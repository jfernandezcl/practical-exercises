// Seleccionamos los elementos del DOM
const formulario = document.getElementById("suma-form");
const resultado = document.getElementById("resultado");

// Agregamos el evento al botón
formulario.addEventListener("submit", function (e) {
  e.preventDefault()

  let numero1 = parseInt(document.getElementById("numero1").value);
  let numero2 = parseInt(document.getElementById("numero2").value);

  if (isNaN(numero1) || isNaN(numero2)) {
    resultado.innerHTML = 'Introduce solo números';
    return
  }

  let suma = numero1 + numero2;
  resultado.innerHTML = `El resultado es ${suma}`;
  resultado('')
});
