// Función que filtra números positivos
function filtrarNumerosPositivos(array) {
  // Comprobar si el array está vacío
  if (array.length === 0) {
    return "El array está vacío";
  }

  // Filtrar números positivos
  return array.filter(function (numero) {
    return numero > 0; // Retornar solo los números positivos
  });
}

// Ejemplo de array con números positivos y negativos
let numeros = [12, -5, 0, 42, -8, 7, -2];

// Llamar a la función y mostrar el resultado
let resultado = filtrarNumerosPositivos(numeros);
console.log(resultado); // Debería mostrar un array con números positivos
