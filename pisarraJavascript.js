let canvaNuevo = document.createElement("canvas");
canvaNuevo.width = 400;
canvaNuevo.height = 400;
let ctx = canvaNuevo.getContext("2d");

// Agregar el lienzo al documento
document.body.appendChild(canvaNuevo);

// Variables para rastrear el estado del dibujo
let pintando = false;
let posicionAnterior = { x: 0, y: 0 };

// Registrar eventos del mouse
canvaNuevo.addEventListener("mousedown", function(e) {
    pintando = true;
    posicionAnterior = obtenerPosicionMouse(e);
});

canvaNuevo.addEventListener("mousemove", function(e) {
    if (pintando) {
        let posicionActual = obtenerPosicionMouse(e);
        dibujarLinea(posicionAnterior.x, posicionAnterior.y, posicionActual.x, posicionActual.y);
        posicionAnterior = posicionActual;
    }
});

canvaNuevo.addEventListener("mouseup", function() {
    pintando = false;
});

// Función para obtener la posición del mouse relativa al lienzo
function obtenerPosicionMouse(e) {
    let rect = canvaNuevo.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

// Función para dibujar una línea en el lienzo
function dibujarLinea(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// Crear el botón de borrado
let btnBorrar = document.createElement("button");
btnBorrar.textContent = "Borrar";
document.body.appendChild(btnBorrar);

// Evento de clic para borrar el lienzo
btnBorrar.addEventListener("click", function() {
    ctx.clearRect(0, 0, canvaNuevo.width, canvaNuevo.height);
});
canvaNuevo.style.borderStyle="solid";
canvaNuevo.style.borderWidth="10px"
btnBorrar.style.borderWidth="5px"
btnBorrar.style.borderRadius="5px"
canvaNuevo.style.cursor = "url('63612.png'), auto";
