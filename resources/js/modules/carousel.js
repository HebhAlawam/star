/**
 * Carousel Module
 * Handles Owl Carousel initialization (keeping Owl for now, but can be replaced with Swiper later)
 */

export function initCarousels() {
  // Wait for jQuery and Owl Carousel to be loaded
  // Since owl.js is loaded as a regular script after app.js, we need to wait
  let attempts = 0;
  const maxAttempts = 150; // Maximum 15 seconds (150 * 100ms)

  const checkAndInit = () => {
    attempts++;

    // Check if jQuery and Owl Carousel plugin are available
    if (
      typeof window.$ === 'undefined' ||
      typeof window.$.fn === 'undefined' ||
      typeof window.$.fn.owlCarousel === 'undefined'
    ) {
      if (attempts >= maxAttempts) {
        // Only warn if there are actually carousel elements on the page
        const hasCarousels = document.querySelectorAll(
          '.testimonial-carousel-two, .single-item-carousel, .testimonials-item-carousel, .owl-carousel, .new_custom-carousel'
        ).length > 0;
        
        if (hasCarousels) {
        console.warn(
          'Owl Carousel not loaded after maximum attempts. Some carousels may not work.'
        );
        }
        return;
      }
      // Retry after a short delay
      setTimeout(checkAndInit, 100);
      return;
    }

    // Now we can safely initialize carousels
    initializeCarousels();
  };

  // Always wait for window load event (ensures all scripts are loaded)
  // This is important because app.js (Vite module) loads before owl.js (regular script)
  if (document.readyState === 'complete') {
    // Page already loaded, but wait a bit more for scripts to initialize
    setTimeout(checkAndInit, 200);
  } else {
    // Wait for window load event (fires after all resources including scripts are loaded)
    window.addEventListener('load', () => {
      // Additional delay to ensure scripts are fully initialized
      setTimeout(checkAndInit, 300);
    });
  }
}

function initializeCarousels() {
  // Testimonial carousel
  const testimonialCarousel = document.querySelector('.testimonial-carousel-two');
  if (testimonialCarousel && window.$) {
    window.$(testimonialCarousel).owlCarousel({
      loop: true,
      margin: 60,
      nav: true,
      rtl: true,
      navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
      dots: false,
      autoWidth: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1, autoWidth: false },
        991: { items: 1, autoWidth: false },
        992: { items: 2, autoWidth: false },
        1200: { items: 2, autoWidth: false },
        1400: { items: 2, autoWidth: false },
      },
    });
  }

  // Single item carousel
  const singleItemCarousel = document.querySelector('.single-item-carousel');
  if (singleItemCarousel && window.$) {
    window.$(singleItemCarousel).owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      rtl: true,
      smartSpeed: 700,
      autoplay: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: { items: 1 },
        480: { items: 1 },
        768: { items: 1 },
        800: { items: 1 },
        960: { items: 1 },
        1024: { items: 1 },
      },
    });
  }

  // Testimonials item carousel
  const testimonialsItemCarousel = document.querySelector('.testimonials-item-carousel');
  if (testimonialsItemCarousel && window.$) {
    window.$(testimonialsItemCarousel).owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 700,
      rtl: true,
      autoplay: 5000,
      navText: [
        '<span class="fa fa-long-arrow-left"></span>',
        '<span class="fa fa-long-arrow-right"></span>',
      ],
      responsive: {
        0: { items: 1 },
        480: { items: 1 },
        768: { items: 1 },
        800: { items: 1 },
        960: { items: 1 },
        1024: { items: 1 },
      },
    });
  }

  // Generic owl-carousel
  const owlCarousel = document.querySelector('.owl-carousel');
  if (owlCarousel && window.$) {
    window.$(owlCarousel).owlCarousel({
      items: 1,
      loop: true,
      rtl: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 10000,
      autoplayHoverPause: true,
      autoHeight: false,
      dots: false,
      nav: true,
      navText: ["<i class='fas fa-paw'></i>", "<i class='fas fa-paw'></i>"],
      responsive: {
        0: { items: 1 },
        480: { items: 1 },
        768: { items: 1 },
      },
    });
  }

  // New custom carousel
  const newCustomCarousel = document.querySelector('.new_custom-carousel');
  if (newCustomCarousel && window.$) {
    window.$(newCustomCarousel).owlCarousel({
      items: 1,
      loop: true,
      rtl: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 8000,
      autoplayHoverPause: true,
      autoHeight: false,
      dots: false,
      nav: true,
      navText: ["<i class='fas fa-paw'></i>", "<i class='fas fa-paw'></i>"],
      responsive: {
        0: { items: 1 },
        480: { items: 1 },
        768: { items: 1 },
      },
    });
  }
}
