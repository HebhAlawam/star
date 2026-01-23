/**
 * Main JavaScript Entry Point
 * STAR Animal Rescue Website
 * Phase 3: jQuery removed from core functionality
 */

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS
import 'bootstrap';

// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import SCSS
import '../scss/app.scss';

// Import modules (Vanilla JS - no jQuery dependency)
import { initPreloader } from './modules/preloader.js';
import { initHeader, initScrollToTop, initDropdownMenus } from './modules/header.js';
import { initCounters } from './modules/counters.js';
import { initAccordion } from './modules/accordion.js';
import { initCarousels } from './modules/carousel.js';
import { initGallery } from './modules/gallery.js';
import { initForms, initScrollToTarget } from './modules/forms.js';
import { initAnimations } from './modules/animations.js';
import { initSearch } from './modules/search.js';
import { initAppointment } from './modules/appointment.js';
import { initFilterSystem } from './modules/filter.js';

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Core functionality (Vanilla JS)
  initPreloader();
  initHeader();
  initScrollToTop();
  initDropdownMenus();
  initCounters();
  initAccordion();
  initSearch();
  initAppointment();
  initScrollToTarget();
  initFilterSystem();

  // Features that may still use jQuery plugins (Owl, Fancybox, Isotope)
  // These will be initialized after plugins load
  // Note: Owl Carousel is not used in any pages - keeping initCarousels() for future use
  // initCarousels(); // Disabled - no carousels found in HTML
  initGallery();
  initForms();
  initAnimations();

  console.log('STAR Website initialized (Phase 3 - jQuery removed from core)');
});
