/**
 * Appointment Form Module
 * Handles appointment form toggle
 */

export function initAppointment() {
  const navBtn = document.querySelector('.main-header .outer-box .nav-btn');
  const crossIcon = document.querySelector('.appointment-box .inner-box .cross-icon');
  const formBackDrop = document.querySelector('.form-back-drop');

  if (navBtn) {
    navBtn.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.add('appointment-form-visible');
    });
  }

  if (crossIcon) {
    crossIcon.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.remove('appointment-form-visible');
    });
  }

  if (formBackDrop) {
    formBackDrop.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.remove('appointment-form-visible');
    });
  }
}
