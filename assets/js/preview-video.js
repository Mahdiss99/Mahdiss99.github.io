/*
  Muted looping cover previews (homepage, Projects index, Experience related-project cards).
  Each preview is a <video data-preview-src> plus a .preview-toggle button inside a [data-preview] element.

  - Videos start with no source (poster only). A source is attached only when playback is
    actually wanted, so nothing is downloaded on phones, with reduced motion, or with data saving.
  - Plays while at least a quarter of the preview is on screen and the tab is visible;
    pauses otherwise (IntersectionObserver + visibilitychange).
  - The pause/play button records a manual choice, which visibility changes never override.
  - At most MAX_AUTOPLAY previews play on their own at once (the most visible ones), so a page
    with several animated covers never decodes them all together. A preview the visitor
    starts with its button is not counted against that limit.
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

  var MAX_AUTOPLAY = 2;
  var previews = [];

  Array.prototype.forEach.call(videos, function (video) {
    var button = video.closest("[data-preview]").querySelector(".preview-toggle");
    var preview = {
      video: video,
      button: button,
      visible: !("IntersectionObserver" in window),
      ratio: 1,
      userStarted: false,
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
        preview.userStarted = true;
        play(preview);
      } else {
        preview.userPaused = true;
        preview.userStarted = false;
        video.pause();
      }
      syncAll();
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

  // Decide which previews play: visible, tab shown, not paused by the visitor; previews the
  // visitor started always play, the rest are limited to the MAX_AUTOPLAY most visible.
  function syncAll() {
    var wanted = previews.filter(function (p) { return p.visible && !document.hidden && !p.userPaused; });
    var chosen = wanted.filter(function (p) { return p.userStarted; });
    wanted.filter(function (p) { return !p.userStarted; })
      .sort(function (a, b) { return b.ratio - a.ratio || previews.indexOf(a) - previews.indexOf(b); })
      .slice(0, MAX_AUTOPLAY)
      .forEach(function (p) { chosen.push(p); });
    previews.forEach(function (p) {
      var shouldPlay = chosen.indexOf(p) !== -1;
      if (shouldPlay && p.video.paused) play(p);
      else if (!shouldPlay && !p.video.paused) p.video.pause();
    });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        previews.forEach(function (preview) {
          if (preview.video === entry.target) {
            preview.ratio = entry.intersectionRatio;
            preview.visible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
          }
        });
      });
      syncAll();
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] });
    previews.forEach(function (preview) { observer.observe(preview.video); });
  } else {
    syncAll();
  }

  document.addEventListener("visibilitychange", syncAll);

  // If the visitor turns on reduced motion while the page is open, stop the previews.
  function onPreferenceChange() {
    if (!motionAllowed()) {
      previews.forEach(function (preview) { preview.userPaused = true; preview.userStarted = false; preview.video.pause(); });
    }
  }
  [reducedMotion, smallOrTouch, reducedData].forEach(function (query) {
    if (query.addEventListener) query.addEventListener("change", onPreferenceChange);
    else if (query.addListener) query.addListener(onPreferenceChange);
  });
})();
