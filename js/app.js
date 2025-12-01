// Accordion handler
let acHeader = document.querySelector(".course-accordion__header")

function openHandler() {
  document.querySelector(".course-accordion").classList.toggle("course-accordion--open")
}

acHeader.addEventListener("click", openHandler())