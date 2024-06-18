(function() {
  let boton = document.createElement("button");

  // Establecer el texto del botón
  boton.innerText = "Haz clic";

  // Agregar el botón al body
  document.body.appendChild(boton);

  // Obtener todos los elementos button en la página
  let buttons = document.getElementsByTagName("button");

  // Agregar un evento de clic a cada botón
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      // Generar un color aleatorio en formato hexadecimal
      let color = generarColorAleatorio();

      // Obtener la referencia al elemento body
      let body = document.querySelector("body");

      // Cambiar el color de fondo del body
      body.style.backgroundColor = color;
    });
  }

  // Función para generar un color aleatorio en formato hexadecimal
  function generarColorAleatorio() {
    let caracteres = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += caracteres[Math.floor(Math.random() * 16)];
    }

    return color;
  }
})();

