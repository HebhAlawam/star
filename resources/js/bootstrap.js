/**
 * Bootstrap/Initialization File
 * Phase 3: jQuery only loaded for plugins that require it (Owl, Fancybox, Isotope, jQuery UI)
 * Core functionality now uses Vanilla JS modules
 */

// Import jQuery ONLY for plugins that require it
// This will be removed in Phase 4 when we replace Owl/Fancybox/Isotope
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

// Note: Core functionality (preloader, header, counters, accordion) now uses Vanilla JS
// jQuery is only kept for:
// - Owl Carousel (will be replaced with Swiper in Phase 4)
// - Fancybox (will be replaced with PhotoSwipe in Phase 4)
// - Isotope (will be replaced with CSS Grid/Masonry in Phase 4)
// - jQuery UI selectmenu (will be replaced with native select in Phase 4)

export { jQuery as $ };
