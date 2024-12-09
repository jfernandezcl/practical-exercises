// Array con 5 números
let numeros = [12, 25, 18, 40, 8];

// Inicializar la variable para la suma
let suma = 0;

// Bucle para recorrer el array y sumar los valores
numeros.forEach(function (numero) {
  suma += numeros
})

// Mostrar el resultado en la consola
if (suma > 100) {
  console.log("Suma mayor que 100");
} else {
  console.log("Suma menor o igual a 100");
}
