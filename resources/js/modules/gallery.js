/**
 * Gallery Module
 * Handles Isotope gallery and Fancybox lightbox
 */

export function initGallery() {
  // Isotope Gallery
  const masonryGallery = document.querySelector('.masonry-gallery');
  const masonryGrid = document.querySelector('.masonry-grid');
  const masonryGridFitrows = document.querySelector('.masonry-grid-fitrows');

  if (masonryGallery || masonryGrid || masonryGridFitrows) {
    // Check if Isotope is loaded
    if (typeof window.Isotope === 'undefined') {
      console.warn('Isotope not loaded - gallery filtering disabled');
      return;
    }

    window.addEventListener('load', () => {
      if (masonryGallery) {
        masonryGallery.style.display = 'block';
        const iso = new window.Isotope(masonryGallery, {
          itemSelector: '.isotope-item',
          layoutMode: 'masonry',
          transitionDuration: '0.6s',
          filter: '*',
        });

        // Filter buttons
        const filterButtons = document.querySelectorAll('.masonry-filter li a');
        filterButtons.forEach((button) => {
          button.addEventListener('click', (e) => {
            e.preventDefault();
            const filterValue = button.getAttribute('data-filter');

            // Update active state
            document
              .querySelectorAll('.masonry-filter a.active')
              .forEach((a) => a.classList.remove('active'));
            button.classList.add('active');
            button.parentElement.classList.add('active');

            // Filter
            iso.arrange({ filter: filterValue });
          });
        });
      }

      if (masonryGrid) {
        new window.Isotope(masonryGrid, {
          itemSelector: '.masonry-grid-item',
          layoutMode: 'masonry',
        });
      }

      if (masonryGridFitrows) {
        new window.Isotope(masonryGridFitrows, {
          itemSelector: '.masonry-grid-item',
          layoutMode: 'fitRows',
        });
      }
    });
  }

  // Fancybox Lightbox
  const lightboxImages = document.querySelectorAll('.lightbox-image');
  if (lightboxImages.length > 0) {
    // Check if Fancybox is loaded
    if (typeof window.$.fancybox !== 'undefined') {
      lightboxImages.forEach((img) => {
        img.addEventListener('click', (e) => {
          e.preventDefault();
          window.$.fancybox({
            href: img.getAttribute('href') || img.src,
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: { media: {} },
          });
        });
      });
    }
  }
}
