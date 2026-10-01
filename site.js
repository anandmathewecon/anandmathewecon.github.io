// Smooth scrolling (Lenis) for wheel, trackpad and in-page links.
// Skipped entirely for visitors who ask their system for reduced motion.
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
