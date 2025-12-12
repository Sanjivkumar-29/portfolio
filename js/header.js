// Sticky Header Slide + Shrink + Blur
window.addEventListener("scroll", function () {
  const header = document.querySelector(".sticky-on");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
