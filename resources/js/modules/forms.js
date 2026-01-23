/**
 * Forms Module
 * Handles form validation and custom selects
 */

export function initForms() {
  // Custom select box (jQuery UI selectmenu replacement)
  const customSelects = document.querySelectorAll('.custom-select-box');
  customSelects.forEach((select) => {
    // If jQuery UI is available, use it temporarily
    // Otherwise, use native select styling
    if (typeof window.$ !== 'undefined' && window.$.fn.selectmenu) {
      window.$(select).selectmenu().selectmenu('menuWidget').addClass('overflow');
    }
  });

  // Contact form validation (if jQuery Validate is available)
  const contactForm = document.getElementById('contact-form');
  if (contactForm && typeof window.$ !== 'undefined' && window.$.fn.validate) {
    window.$(contactForm).validate({
      rules: {
        email: {
          required: true,
          email: true,
        },
        subject: {
          required: true,
        },
        message: {
          required: true,
        },
      },
    });
  }

  // Date picker (if jQuery UI is available)
  const datepickers = document.querySelectorAll('.datepicker');
  if (datepickers.length > 0 && typeof window.$ !== 'undefined' && window.$.fn.datepicker) {
    datepickers.forEach((dp) => {
      window.$(dp).datepicker();
    });
  }

  // MixItUp gallery filters
  const filterList = document.querySelector('.filter-list');
  if (filterList && typeof window.mixItUp !== 'undefined') {
    window.mixItUp(filterList);
  }
}

/**
 * Scroll to target
 */
export function initScrollToTarget() {
  const scrollLinks = document.querySelectorAll('.scroll-to-target');
  scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-bs-target') || link.getAttribute('href');
      if (!target) return;

      const targetElement = document.querySelector(target);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}
