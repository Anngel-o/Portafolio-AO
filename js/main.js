function mostrarAnngelo() {
  Swal.fire({
    title: "¡Bienvenido a Anngelo Systems!",
    html: "<p style='font-size: 18px;'>Siéntete libre de explorar mis proyectos y ponerte en contacto conmigo para colaboraciones o consultas.</p><p style='font-size: 18.5px;'>¡Gracias por visitar Anngelo Systems!</p>",
    confirmButtonColor: "#327cae",
    confirmButtonText: "Aceptar",
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");
  logo.addEventListener("click", mostrarAnngelo);
  logo.click();

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
    // Restablecer el formulario al descargar o recargar la página
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

// Menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.innerHTML = nav.classList.contains("active")
    ? '<i class="bi bi-x"></i>'
    : '<i class="bi bi-list"></i>';
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.innerHTML = '<i class="bi bi-list"></i>';
  });
});

// Header scroll effect
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 100,
});

// Certificate modal
const certificateItems = document.querySelectorAll(".certificate-item");
const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("modalImage");
const modalClose = document.querySelector(".modal-close");

certificateItems.forEach((item) => {
  item.addEventListener("click", () => {
    const imgSrc = item.querySelector("img").src;
    modal.style.display = "flex";
    modalImg.src = imgSrc;
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Form submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const formAction = this.getAttribute("action");

  fetch(formAction, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        Swal.fire({
          title: "¡Mensaje enviado!",
          text: "Gracias por contactarme. Te responderé lo antes posible.",
          icon: "success",
          confirmButtonText: "OK",
        });
        contactForm.reset();
      } else {
        throw new Error("Error en el envío");
      }
    })
    .catch((error) => {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.",
        icon: "error",
        confirmButtonText: "OK",
      });
    });
});

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
