/**
 * Header Module
 * Handles sticky header and scroll-to-top functionality
 */

export function initHeader() {
  const header = document.querySelector('.main-header');
  const scrollToTop = document.querySelector('.scroll-to-top');

  if (!header) return;

  function handleScroll() {
    const windowpos = window.scrollY;

    if (windowpos >= 250) {
      header.classList.add('fixed-header');
      if (scrollToTop) {
        scrollToTop.style.display = 'block';
        scrollToTop.style.transition = 'opacity 300ms';
        scrollToTop.style.opacity = '1';
      }
    } else {
      header.classList.remove('fixed-header');
      if (scrollToTop) {
        scrollToTop.style.transition = 'opacity 300ms';
        scrollToTop.style.opacity = '0';
        setTimeout(() => {
          if (scrollToTop.style.opacity === '0') {
            scrollToTop.style.display = 'none';
          }
        }, 300);
      }
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
}

/**
 * Scroll to top button handler
 */
export function initScrollToTop() {
  const scrollToTop = document.querySelector('.scroll-to-top');
  if (!scrollToTop) return;

  scrollToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

/**
 * Dropdown menu handlers for mobile
 */
export function initDropdownMenus() {
  const dropdowns = document.querySelectorAll('.main-header .navigation li.dropdown');

  dropdowns.forEach((dropdown) => {
    const dropdownBtn = dropdown.querySelector('.dropdown-btn');
    const dropdownMenu = dropdown.querySelector('ul');
    const dropdownLink = dropdown.querySelector('> a');

    if (!dropdownBtn && dropdownMenu) {
      // Create dropdown button if it doesn't exist
      const btn = document.createElement('div');
      btn.className = 'dropdown-btn';
      btn.innerHTML = '<span class="fa fa-angle-down"></span>';
      dropdown.appendChild(btn);

      btn.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
      });
    } else if (dropdownBtn) {
      dropdownBtn.addEventListener('click', () => {
        const isVisible = dropdownMenu.style.display !== 'none';
        dropdownMenu.style.display = isVisible ? 'none' : 'block';
      });
    }

    // Disable parent link click
    if (dropdownLink) {
      dropdownLink.addEventListener('click', (e) => {
        e.preventDefault();
      });
    }
  });
}
