const draggableElement = document.getElementById('draggableElement');

let offsetX = 0;
let offsetY = 0;

// Función para manejar el inicio del arrastre
function handleDragStart(event) {
  offsetX = event.clientX - event.target.getBoundingClientRect().left;
  offsetY = event.clientY - event.target.getBoundingClientRect().top;
  event.dataTransfer.setData('text/plain', event.target.id);
  event.target.style.opacity = '0.6';
}

// Función para manejar el final del arrastre
function handleDragEnd(event) {
  event.target.style.opacity = '1';
}

// Función para manejar el arrastre
function handleDrag(event) {
  event.preventDefault();
  draggableElement.style.left = (event.clientX - offsetX) + 'px';
  draggableElement.style.top = (event.clientY - offsetY) + 'px';
}

// Agregar eventos de arrastre al elemento
draggableElement.addEventListener('dragstart', handleDragStart);
draggableElement.addEventListener('dragend', handleDragEnd);
document.addEventListener('dragover', handleDrag);
