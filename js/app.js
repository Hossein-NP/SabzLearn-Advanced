// Top bar animation handler
import { animationHandler } from "./topbar-animation-handler.js"; 
console.log(animationHandler)

// Accordion handler
const accordions = document.querySelectorAll('.course-accordion');

accordions.forEach(item => {
  const header = item.querySelector('.course-accordion__header');
  const icon = item.querySelector('.course-accordion__icon');

  function toggleAccordion() {
    accordions.forEach(acc => {
      if (acc !== item) {
        acc.classList.remove('course-accordion--open');
      }
    });
    item.classList.toggle('course-accordion--open');
  }

  header.addEventListener('click', toggleAccordion);
  icon.addEventListener('click', toggleAccordion);
});
