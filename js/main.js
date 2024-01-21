window.onload = function() {
  escalarTodosElementos(1)};

window.onresize = function() {
  escalarTodosElementos(1)
};
function escalarTodosElementos(factorEscala) {
  // Obtén todos los elementos en la página
  var elementos = document.querySelectorAll('body');

  elementos.forEach(function(elemento) {
      // Obtén el tamaño actual del elemento
      var tamanoActual = getComputedStyle(elemento).fontSize;

      // Convierte el tamaño actual a un número
      var tamanoNumerico = parseFloat(tamanoActual);

      // Calcula el nuevo tamaño aplicando el factor de escala
      var nuevoTamano = tamanoNumerico * factorEscala;

      // Aplica el nuevo tamaño al elemento
      elemento.style.fontSize = nuevoTamano + 'px';
  });
}
document.addEventListener("DOMContentLoaded", function () {
  escalarTodosElementos();
  const logo = document.querySelector(".logo");
  logo.addEventListener("click", () => {
    Swal.fire({
      title: "¡Bienvenido a Anngelo Systems!",
      html: "<p style='font-size: 18px;'>Siéntete libre de explorar mis proyectos y ponerte en contacto conmigo para colaboraciones o consultas.</p><p style='font-size: 18.5px;'>¡Gracias por visitar Anngelo Systems!</p>",
      confirmButtonColor: "#327cae",
      confirmButtonText: "Aceptar",
    });
        
  });

  const certificados = document.querySelectorAll(".certificado-img");
  certificados.forEach((certificado) => {
    certificado.addEventListener("click", function () {
      const rutaImagen = this.getAttribute("data-imagen");
      mostrarImagenConSweetAlert(rutaImagen);
    });
  });

  function mostrarImagenConSweetAlert(rutaImagen) {
    Swal.fire({
      imageUrl: rutaImagen,
      imageAlt: "Certificado",
      //showCloseButton: true,
      confirmButtonColor: "#327cae",
      confirmButtonText: "Aceptar",
      customClass: {
        image: "imagen-ampliada-swal",
        popup: "tamanio-personalizado",
      },
    });
  }

  const formulario = document.getElementById("formulario-contacto");

  formulario.addEventListener("submit", function (event) {
    sessionStorage.removeItem("formularioEnviado");
  });

  // Cuando la página se descarga (cerrar la pestaña, navegar a otra página, etc.). o recarga
  window.addEventListener("unload", function (event) {
    // Restablece el formulario al descargar o recargar la página
    if (sessionStorage.getItem("formularioEnviado")) {
      formulario.reset();
    }
  });

  // Se activa antes de descargar o cerrar la página
  window.addEventListener("beforeunload", function (event) {
    // Establecer la señal "formularioEnviado" en sessionStorage al enviar el formulario
    sessionStorage.setItem("formularioEnviado", "true");
  });
});
