document.addEventListener("DOMContentLoaded", function () {
  function mostrar() {
    Swal.fire("SweetAlert2 is working!");
    console.log("picado");
  }

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

  // Cuando la página se descarga o recarga
  window.addEventListener("unload", function (event) {
    // Restablece el formulario al descargar o recargar la página
    formulario.reset();
  });
  
  // Se activa antes de descargar la página
  window.addEventListener("beforeunload", function (event) {
    // Establecer la señal "formularioEnviado" en sessionStorage al enviar el formulario
    sessionStorage.setItem("formularioEnviado", "true");
  });
  
});
