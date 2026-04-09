/* Parallax background scroll for gabeknuth.com.
   Translates the .parallax-bg layer at a fraction of the page scroll
   so the background drifts slower than the foreground content. */
(function () {
  var bg = document.querySelector('.parallax-bg');
  if (!bg) return;

  var rate = 0.1;
  var ticking = false;

  function update() {
    bg.style.transform = 'translate3d(0,' + (-window.scrollY * rate) + 'px,0)';
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  update();
})();
