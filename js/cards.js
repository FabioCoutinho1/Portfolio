document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("listCards");

  if (!list) {
    console.error(
      "Elemento #listCards não encontrado. Verifique o id no HTML."
    );
    return;
  }

  const projects = [
    {
      name: "To-Do List",
      description:
        "Aplicativo para gerenciar tarefas com salvamento no localStorage.",
      image: "https://placehold.co/400x300",
      github: "https://github.com/FabioCoutinho1/todo-list",
      demo: "#",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "To-Do List",
      description:
        "Aplicativo para gerenciar tarefas com salvamento no localStorage.",
      image: "https://placehold.co/400x300",
      github: "https://github.com/FabioCoutinho1/todo-list",
      demo: "#",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "To-Do List",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum unde ducimus amet perferendis rem corporis impedit qui quia ex quaerat. Accusantium facilis modi quisquam nobis aspernatur labore et laborum quae?",
      image: "https://placehold.co/400x300",
      github: "https://github.com/FabioCoutinho1/todo-list",
      demo: "#",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  list.innerHTML = projects
    .map(
      (p) => `
        <li class="card__item observer__animation">
          <div class="icons__redirect">
            <a href="${
              p.github
            }" target="_blank" rel="noopener noreferrer" aria-label="GitHub do projeto ${
        p.name
      }">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="${
              p.demo
            }" target="_blank" rel="noopener noreferrer" aria-label="Abrir projeto ${
        p.name
      }">
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <img src="${p.image}" alt="Imagem do projeto ${
        p.name
      }" loading="lazy" />
          <div class="card__infos">
            <h2>${p.name}</h2>
            <p>${p.description}</p>
            <div class="technologies__used">
              ${p.technologies.map((t) => `<span>${t}</span>`).join("")}
            </div>
          </div>
        </li>
      `
    )
    .join("");
});
