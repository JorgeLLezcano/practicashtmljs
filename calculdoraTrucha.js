let input = document.createElement("input");
input.type = "number";
document.body.appendChild(input);

const botonSuma = document.createElement("button");
botonSuma.innerText = "+";
botonSuma.addEventListener("click", sumar);

const botonResta = document.createElement("button");
botonResta.innerText = "-";
botonResta.addEventListener("click", restar);

document.body.appendChild(botonSuma);
document.body.appendChild(botonResta);

let primerNumero = 0; // Variable para almacenar el primer número ingresado
const resultadoParrafo = document.createElement("p");
document.body.appendChild(resultadoParrafo);

function sumar() {
  // Verificar si se ingresó el primer número
  if (primerNumero === 0) {
    primerNumero = parseFloat(input.value);
    input.value = ""; // Limpiar el input
    input.placeholder = "Ingrese el segundo número";
  } else {
    // Obtener el segundo número ingresado
    const segundoNumero = parseFloat(input.value);

    // Realizar la operación de suma
    const resultado = primerNumero + segundoNumero;

    // Mostrar el resultado en pantalla
    resultadoParrafo.innerText = `Resultado de la suma: ${resultado}`;

    // Restaurar el estado inicial
    primerNumero = 0;
    input.value = ""; // Limpiar el input
    input.placeholder = "Ingrese el primer número";
  }
}

function restar() {
  // Verificar si se ingresó el primer número
  if (primerNumero === 0) {
    primerNumero = parseFloat(input.value);
    input.value = ""; // Limpiar el input
    input.placeholder = "Ingrese el segundo número";
  } else {
    // Obtener el segundo número ingresado
    const segundoNumero = parseFloat(input.value);

    // Realizar la operación de resta
    const resultado = primerNumero - segundoNumero;

    // Mostrar el resultado en pantalla
    resultadoParrafo.innerText = `Resultado de la resta: ${resultado}`;

    // Restaurar el estado inicial
    primerNumero = 0;
    input.value = ""; // Limpiar el input
    input.placeholder = "Ingrese el primer número";
  }
}
