function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach(sec => sec.classList.remove("activa"));
  document.getElementById(id).classList.add("activa");
}

// Manejo de cita
document.getElementById("formCita").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("respuestaCita").textContent = "✅ ¡Cita registrada!";
  this.reset();
});

let indiceCarrusel = 0;
const imagenes = document.querySelectorAll(".carrusel-item");

function mostrarImagen(indice) {
  imagenes.forEach((img, i) => {
    img.classList.remove("activo");
    if (i === indice) {
      img.classList.add("activo");
    }
  });
}

function moverCarrusel(direccion) {
  indiceCarrusel += direccion;
  if (indiceCarrusel >= imagenes.length) {
    indiceCarrusel = 0;
  } else if (indiceCarrusel < 0) {
    indiceCarrusel = imagenes.length - 1;
  }
  mostrarImagen(indiceCarrusel);
}

// Mostrar la primera imagen al cargar
mostrarImagen(indiceCarrusel);
