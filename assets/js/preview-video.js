/*
  Muted looping cover previews (homepage, Projects index, Experience related-project cards).
  Each preview is a <video data-preview-src> plus a .preview-toggle button inside a [data-preview] element.

  - Videos start with no source (poster only). A source is attached only when playback is
    actually wanted, so nothing is downloaded on phones, with reduced motion, or with data saving.
  - Plays while at least a quarter of the preview is on screen and the tab is visible;
    pauses otherwise (IntersectionObserver + visibilitychange).
  - The pause/play button records a manual choice, which visibility changes never override.
*/
(function () {
  "use strict";

  var videos = document.querySelectorAll("video[data-preview-src]");
  if (!videos.length) return;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var smallOrTouch = window.matchMedia("(max-width: 767px), (hover: none)");
  var reducedData = window.matchMedia("(prefers-reduced-data: reduce)");
  var connection = navigator.connection || {};

  function motionAllowed() {
    return !reducedMotion.matches && !smallOrTouch.matches && !reducedData.matches && !connection.saveData;
  }

  var previews = [];

  Array.prototype.forEach.call(videos, function (video) {
    var button = video.closest("[data-preview]").querySelector(".preview-toggle");
    var preview = {
      video: video,
      button: button,
      visible: !("IntersectionObserver" in window),
      // A manual pause sticks; when motion is not allowed, start paused (poster) until the visitor presses play.
      userPaused: !motionAllowed()
    };
    previews.push(preview);

    function render() {
      var playing = !video.paused;
      button.setAttribute("data-state", playing ? "playing" : "paused");
      button.setAttribute("aria-label", (playing ? "Pause" : "Play") + " preview video: " + button.getAttribute("data-title"));
    }

    video.addEventListener("play", render);
    video.addEventListener("pause", render);

    button.hidden = false;
    button.addEventListener("click", function () {
      if (video.paused) {
        preview.userPaused = false;
        play(preview);
      } else {
        preview.userPaused = true;
        video.pause();
      }
    });
  });

  function play(preview) {
    var video = preview.video;
    if (!video.getAttribute("src")) {
      video.src = video.getAttribute("data-preview-src");
    }
    var attempt = video.play();
    if (attempt && typeof attempt.catch === "function") {
      // Autoplay refused (browser policy) or source unavailable: keep the poster, show "play".
      attempt.catch(function () { preview.button.setAttribute("data-state", "paused"); });
    }
  }

  function sync(preview) {
    var shouldPlay = preview.visible && !document.hidden && !preview.userPaused;
    if (shouldPlay && preview.video.paused) play(preview);
    else if (!shouldPlay && !preview.video.paused) preview.video.pause();
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        previews.forEach(function (preview) {
          if (preview.video === entry.target) {
            preview.visible = entry.isIntersecting;
            sync(preview);
          }
        });
      });
    }, { threshold: 0.25 });
    previews.forEach(function (preview) { observer.observe(preview.video); });
  } else {
    previews.forEach(sync);
  }

  document.addEventListener("visibilitychange", function () { previews.forEach(sync); });

  // If the visitor turns on reduced motion while the page is open, stop the previews.
  function onPreferenceChange() {
    if (!motionAllowed()) {
      previews.forEach(function (preview) { preview.userPaused = true; preview.video.pause(); });
    }
  }
  [reducedMotion, smallOrTouch, reducedData].forEach(function (query) {
    if (query.addEventListener) query.addEventListener("change", onPreferenceChange);
    else if (query.addListener) query.addListener(onPreferenceChange);
  });
})();
