const containerLeft = document.querySelector(".container__left");
const animations = document.querySelectorAll(".observer__animation");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

animations.forEach((animation) => {
  observer.observe(animation);
});

