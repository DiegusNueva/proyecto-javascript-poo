export default class Usuario {
  constructor(nombres, apellidos, correo, activo, cursosDictados) {
    (this.nombres = nombres),
      (this.apellidos = apellidos),
      (this.correo = correo),
      (this.activo = activo),
      (this.cursosDictados = cursosDictados),
      (this.cursosTomados = this.cursosTomados);
  }

  presentarse() {
    return `Hola, mi nombre es ${this.nombres} y mi correo es: ${this.correo}`;
  }

  //Métodos getters y los setters
  // GET -> obtener
  // SET -> dar

  getNombres() {
    return this.nombres;
  }

  setNombres(nuevosNombres) {
    this.nombres = nuevosNombres;
  }

  getApellidos() {
    return this.apellidos;
  }

  setApellidos(nuevosApellidos) {
    this.apellidos = nuevosApellidos;
  }
}
