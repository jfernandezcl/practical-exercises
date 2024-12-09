// Seleccionamos el botón
const boton = document.getElementById("mi-boton");

// Agregamos un evento de clic al botón
boton.addEventListener("click", function cambiarTextoColor() {
  boton.innerText = "¡Clic hecho!";
  boton.style.color = "red";
});
