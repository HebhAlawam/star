/**
 * Animations Module
 * Handles WOW.js and other scroll animations
 */

export function initAnimations() {
  // WOW.js initialization
  if (typeof window.WOW !== 'undefined') {
    const wow = new window.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }

  // Parallax image animation (custom)
  initParallaxImages();
}

function initParallaxImages() {
  const parallaxImages = document.querySelectorAll('html:not(.pt_touch) .an_image');
  if (parallaxImages.length === 0) return;

  let ticking = false;

  function updateParallax() {
    const winH = window.innerHeight;

    parallaxImages.forEach((img) => {
      const elem = img.querySelector('.an_image_image');
      if (!elem) return;

      const bounds = img.getBoundingClientRect();
      if (bounds.top < winH && bounds.bottom > 0) {
        const speed = (parseFloat(img.getAttribute('data-speed')) || 10) / 10;
        const ypos = (bounds.top - winH / 2) * speed;
        elem.style.transform = `translateY(${ypos}px)`;
      }
    });

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick);
  requestTick(); // Initial
}
