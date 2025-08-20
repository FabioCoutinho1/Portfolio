const mobileMenu = document.querySelector(".mobile__list");
const menuBtn = document.querySelector("#btn-menu");
const switchTheme = document.querySelectorAll(".switch__input");
const savedTheme = localStorage.getItem("theme");

switchTheme.forEach((el) => {
  el.addEventListener("change", () => {
    const isDarkMode = el.checked;
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (!isDarkMode && currentTheme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
    console.log(isDarkMode);
  });
});
menuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("show");
  menuBtn.classList.toggle("fa-bars", !isOpen);
  menuBtn.classList.toggle("fa-xmark", isOpen);
});

if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  console.log(`Tema carregado: ${savedTheme}`);
  switchTheme.forEach((el) => {
    savedTheme === "light" ? (el.checked = true) : (el.checked = false);
  });
}
