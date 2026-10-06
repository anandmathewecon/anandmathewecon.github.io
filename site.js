// Theme switch: light by default, dark when chosen, remembered across pages.
(function () {
  var root = document.documentElement;
  var btn = document.querySelector(".theme-toggle");
  if (!btn) return;
  function label() {
    var dark = root.getAttribute("data-theme") === "dark";
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }
  function applySaved() {
    var saved = null;
    try { saved = localStorage.getItem("theme"); } catch (e) {}
    if (saved === "dark") root.setAttribute("data-theme", "dark"); else root.removeAttribute("data-theme");
    label();
  }
  label();
  // Pages restored by the Back button, and other open tabs, pick up the latest choice.
  window.addEventListener("pageshow", applySaved);
  window.addEventListener("storage", function (e) { if (e.key === "theme") applySaved(); });
  btn.addEventListener("click", function () {
    var dark = root.getAttribute("data-theme") === "dark";
    if (dark) root.removeAttribute("data-theme"); else root.setAttribute("data-theme", "dark");
    try { localStorage.setItem("theme", dark ? "light" : "dark"); } catch (e) {}
    label();
  });
})();

// Smooth scrolling (Lenis) for wheel, trackpad and in-page links.
// Skipped for visitors who ask their system for reduced motion.
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (typeof Lenis === "undefined") return;
  var lenis = new Lenis({ duration: 1.1, anchors: { offset: -16 }, smoothWheel: true });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
})();
