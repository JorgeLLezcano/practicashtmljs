// Solicitar el color al usuario
/*let color = prompt("Ingrese el color de fondo deseado:");

// Obtener la referencia al elemento body
let body = document.querySelector("body");

// Cambiar el color de fondo del body
body.style.backgroundColor = color;*/

// let input = document.createElement("input");

/*/ Establecer el tipo del input como "text"
input.type = "text";

// Agregar el input al body
document.body.appendChild(input);

let color =input;
// Obtener la referencia al elemento body
let body = document.querySelector("body");

// Cambiar el color de fondo del body
body.style.backgroundColor = color;*/

let input = document.createElement("input");

// Establecer el tipo del input como "text"
input.type = "text";

// Agregar el input al body
document.body.appendChild(input);

// Obtener la referencia al elemento body
let body = document.querySelector("body");

// Agregar un evento de cambio al input
input.addEventListener("change", function() {
  // Obtener el valor del input
  let color = input.value;

  // Cambiar el color de fondo del body
  body.style.backgroundColor = color;
});

body.style.borderStyle = "solid";
body.style.borderWidth = "10px";
body.style.borderImage = "linear-gradient(to right, red, blue) 1";