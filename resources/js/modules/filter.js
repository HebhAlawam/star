/**
 * Filter System Module
 * Shared filter functionality for news/stories pages
 */

export function initFilterSystem(containerSelector = '.news-grid, .stories-grid') {
  const filterLinks = document.querySelectorAll('.news-type-filter a, .stories-category-chip');
  const items = document.querySelectorAll(`${containerSelector} .filter-item`);
  
  if (filterLinks.length === 0 || items.length === 0) {
    return; // Exit if no filter elements found
  }
  
  filterLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Update active state
      filterLinks.forEach(a => {
        a.classList.remove('active');
        a.setAttribute('aria-selected', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
      
      const filter = this.getAttribute('data-filter');
      
      items.forEach(item => {
        if (filter === '*') {
          item.style.display = '';
        } else {
          // Check both class name and data-category
          const hasClass = item.classList.contains(filter);
          const category = item.getAttribute('data-category');
          const matchesCategory = category === filter;
          
          if (hasClass || matchesCategory) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
}

// Auto-init if DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initFilterSystem());
} else {
  initFilterSystem();
}

