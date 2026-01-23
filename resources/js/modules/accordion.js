/**
 * Accordion Module
 * Handles accordion functionality
 */

export function initAccordion() {
  // Bootstrap accordion (already handled by Bootstrap)
  // This is for custom accordion groups
  const accordionGroups = document.querySelectorAll('.accrodion-grp');

  accordionGroups.forEach((group) => {
    const groupName = group.getAttribute('data-grp-name');
    if (!groupName) return;

    group.classList.add(groupName);
    const accordions = group.querySelectorAll('.accrodion');

    accordions.forEach((accordion) => {
      const content = accordion.querySelector('.accrodion-content');
      const title = accordion.querySelector('.accrodion-title');

      if (!content || !title) return;

      // Hide all content initially
      if (!accordion.classList.contains('active')) {
        content.style.display = 'none';
      }

      title.addEventListener('click', () => {
        const isActive = accordion.classList.contains('active');

        if (!isActive) {
          // Close all in this group
          group.querySelectorAll('.accrodion').forEach((acc) => {
            acc.classList.remove('active');
            const cont = acc.querySelector('.accrodion-content');
            if (cont) {
              cont.style.transition = 'max-height 0.3s ease-out';
              cont.style.maxHeight = '0';
              cont.style.overflow = 'hidden';
              setTimeout(() => {
                cont.style.display = 'none';
              }, 300);
            }
          });

          // Open clicked one
          accordion.classList.add('active');
          content.style.display = 'block';
          content.style.maxHeight = content.scrollHeight + 'px';
          setTimeout(() => {
            content.style.maxHeight = 'none';
          }, 300);
        }
      });
    });
  });

  // Pet FAQ accordion
  const petAccordions = document.querySelectorAll(
    '.pet .faq .accordion-item, .pet .contact .accordion-item'
  );
  petAccordions.forEach((item) => {
    item.addEventListener('click', () => {
      petAccordions.forEach((acc) => acc.classList.remove('active'));
      item.classList.add('active');
    });
  });
}
