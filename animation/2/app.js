const box = document.querySelector(".box");
const screen2 = document.querySelector(".screen2");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        box.style.right = "0";
        box.style.scale = "0.5";
        setTimeout(() => {
          box.style.scale = "1";
        }, 500);
      } else {
        box.style.right = "-80%";
        box.style.scale = "0.5";
        setTimeout(() => {
          box.style.scale = "1";
        }, 500);
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(screen2);
