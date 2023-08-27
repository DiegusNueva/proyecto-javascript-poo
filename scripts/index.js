import Curso from "./classes/Curso.js";
import Profesor from "./classes/Profesor.js";
import Alumno from "./classes/Alumno.js";

const elem = document.getElementById("cursos");

function resultadosCheckbox(target) {
  // Obtener valores de checkboxes
  const htmlCheckbox = target.html.checked;
  const cssCheckbox = target.css.checked;
  const javascriptCheckbox = target.javascript.checked;
  const resultadoCheckbox = [];

  if (htmlCheckbox) {
    resultadoCheckbox.push("HTML");
  }

  if (cssCheckbox) {
    resultadoCheckbox.push("CSS");
  }

  if (javascriptCheckbox) {
    resultadoCheckbox.push("JavaScript");
  }

  resultadoCheckbox.forEach((element) => {
    console.log(element);
  });

  return resultadoCheckbox;
}

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

//DATOS obtenidos del formulario relativos al CURSO
const formularioCurso = document.getElementById("formCursos");
formularioCurso.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  const target = e.target;
  console.log(target.nombreCurso.value);
  console.log(target.posterCurso.value);
  console.log(target.clasesCurso.value);
  const curso = new Curso(
    target.nombreCurso.value,
    target.posterCurso.value,
    target.clasesCurso.value
  );
  mostrarCurso(curso);
});

//DATOS obtenidos del formulario relativos al PROFESOR
const formularioProfesores = document.getElementById("formProfesores");
formularioProfesores.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  const target = e.target;
  console.log(target.nombreProfesor.value);
  console.log(target.apellidosProfesor.value);
  console.log(target.emailProfesor.value);
  console.log(target.gender.value);

  const valoresCheckboxProfesor = resultadosCheckbox(target);

  console.log(target.calificacionProfesor.value);

  const profe = new Profesor(
    target.nombreProfesor.value,
    target.apellidosProfesor.value,
    target.emailProfesor.value,
    target.gender.value,
    valoresCheckboxProfesor,
    target.calificacionProfesor.value
  );
});

//DATOS obtenidos del formulario relativos al ALUMNO
const formularioAlumnos = document.getElementById("formAlumnos");
formularioAlumnos.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  const target = e.target;
  console.log(target.nombreAlumno.value);
  console.log(target.apellidosAlumno.value);
  console.log(target.emailAlumno.value);
  console.log(target.gender.value);

  const valoresCheckboxAlumno = resultadosCheckbox(target);

  const alumno1 = new Alumno(
    target.nombreAlumno.value,
    target.apellidosAlumno.value,
    target.emailAlumno.value,
    target.gender.value,
    valoresCheckboxAlumno
  );

  html.setInscritos([...html.getInscritos(), alumno1]);
  console.log(html);
});

const alumno2 = new Alumno("María", "Alonso", "maria@mail.com", true, [
  "HTML",
  "CSS",
  "JavaScript",
]);

const html = new Curso("HTML desde cero", "mi-poster.png", 7);

html.setInscritos([...html.getInscritos(), alumno2]);
console.log(html);
