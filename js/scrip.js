const mobileMenu = document.querySelector(".mobile__list");
const menuBtn = document.querySelector("#btn-menu");

menuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("show");
  menuBtn.classList.toggle("fa-bars", !isOpen);
  menuBtn.classList.toggle("fa-xmark", isOpen);
});
