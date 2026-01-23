/**
 * Search Module
 * Handles search box toggle
 */

export function initSearch() {
  const searchBoxOuter = document.querySelector('.search-box-outer');
  const closeSearch = document.querySelector('.close-search');

  if (searchBoxOuter) {
    searchBoxOuter.addEventListener('click', () => {
      document.body.classList.add('search-active');
    });
  }

  if (closeSearch) {
    closeSearch.addEventListener('click', () => {
      document.body.classList.remove('search-active');
    });
  }
}
