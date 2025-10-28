const containerLeft = document.querySelector(".container__left");

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

const observerElements = () => {
  const animations = document.querySelectorAll(".observer__animation");
  animations.forEach((animation) => {
    observer.observe(animation);
  });
};

observerElements();

const mutationObserver = new MutationObserver(() => {
  observerElements();
});

const cardsContainer = document.querySelector("#listCards");
if (cardsContainer) {
  mutationObserver.observe(cardsContainer, {
    childList: true,
    subtree: true,
  });
}
