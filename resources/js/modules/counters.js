/**
 * Counter Module
 * Handles animated counters using Intersection Observer
 */

export function initCounters() {
  const countBoxes = document.querySelectorAll('.count-box');
  if (countBoxes.length === 0) return;

  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        animateCounter(entry.target);
        entry.target.classList.add('counted');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  countBoxes.forEach((box) => {
    observer.observe(box);
  });
}

function animateCounter(element) {
  const countText = element.querySelector('.count-text, .counting-value');
  if (!countText) return;

  const target = parseInt(countText.getAttribute('data-stop') || countText.textContent, 10);
  const duration = parseInt(countText.getAttribute('data-speed') || 2000, 10);
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      countText.textContent = target;
      clearInterval(timer);
    } else {
      countText.textContent = Math.floor(current);
    }
  }, 16);
}
