import Curso from "./classes/Curso.js";
import Profesor from "./classes/Profesor.js";
import Alumno from "./classes/Alumno.js";

const elem = document.getElementById("cursos");

function mostrarCurso(curso) {
  const hijo = document.createElement("div");
  hijo.classList.add("card");
  hijo.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="${curso.getPoster()}" alt="${curso.getNombre()}" />
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
        <div class="s-center">
            <span class="small s-center">Cantidad de clases: ${curso.getClases()}
    </span></div>
    </div>
    `;
  elem.appendChild(hijo);
}

const formulario = document.getElementById("formCursos");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log(e.target);
  const target = e.target;
  const curso = new Curso(
    target.nombreCurso.value,
    target.posterCurso.value,
    target.clasesCurso.value
  );
  mostrarCurso(curso);
});

const profe = new Profesor(
  "Diego",
  "Alonso",
  "diego@mail.com",
  true,
  ["React", "Drupal"],
  10
);

const alumno1 = new Alumno("Juanito", "Pérez", "juan@mail.com", false, [
  "HTML",
  "CSS",
]);

const alumno2 = new Alumno("María", "Alonso", "maria@mail.com", true, [
  "HTML",
  "CSS",
  "JavaScript",
]);

const html = new Curso("HTML desde cero", "mi-poster.png", 7);

html.setInscritos([...html.getInscritos(),alumno1]);
console.log(html);

html.setInscritos([...html.getInscritos(),alumno2]);
console.log(html);
