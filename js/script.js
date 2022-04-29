const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
  password: /^.{4,12}$/, // 4 a 12 digitos.
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const validarFormulario = (e) => {
  /* console.log(e.target.value); */
  switch (e.target.name) {
    case "usuario":
      if (expresiones.usuario.test(e.target.value)) {
        document.getElementById('grupo_usuario').classList.add('formulario_correcto');
        document.getElementById('grupo_usuario').classList.remove('formulario_incorrecto')
        document.querySelector('#grupo_usuario > p').classList.remove('mostrar_mensaje_error')

      } else {
        document.getElementById('grupo_usuario').classList.remove('formulario_correcto')
        document.getElementById('grupo_usuario').classList.add('formulario_incorrecto')
        document.querySelector('#grupo_usuario > p').classList.add('mostrar_mensaje_error')
      }
      break;
    case "nombre":
      if (expresiones.nombre.test(e.target.value)) {
        document.getElementById('grupo_nombre').classList.add('formulario_correcto');
        document.getElementById('grupo_nombre').classList.remove('formulario_incorrecto')
        document.querySelector('#grupo_nombre > p').classList.remove('mostrar_mensaje_error')
      } else {
        document.getElementById('grupo_nombre').classList.remove('formulario_correcto')
        document.getElementById('grupo_nombre').classList.add('formulario_incorrecto')
        document.querySelector('#grupo_nombre > p').classList.add('mostrar_mensaje_error')
      }
      break;
    case "telefono":
      if (expresiones.telefono.test(e.target.value)) {
        document.getElementById('grupo_telefono').classList.add('formulario_correcto');
        document.getElementById('grupo_telefono').classList.remove('formulario_incorrecto')
        document.querySelector('#grupo_telefono > p').classList.remove('mostrar_mensaje_error')
      } else {
        document.getElementById('grupo_telefono').classList.remove('formulario_correcto')
        document.getElementById('grupo_telefono').classList.add('formulario_incorrecto')
        document.querySelector('#grupo_telefono > p').classList.add('mostrar_mensaje_error')
      }
      break;

    default:
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("blur", validarFormulario("par"));
  input.addEventListener("keyup", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Formulario Enviado");
});
