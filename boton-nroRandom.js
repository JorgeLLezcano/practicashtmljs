let boton =document.createElement("button")
document.body.appendChild(boton);
boton.innerText= "Click"
let button= document.querySelector("button")

function getRandom() {
    const random = Math.random()
    const multird =random*10
    const rounder=Math.floor(multird)
    const result = rounder +1
    return result 
    
}



function mostrarRandom() {
  let parrafo = document.createElement("p");
  parrafo.innerText = "este es el numero ramdon "+getRandom();
  document.body.appendChild(parrafo);
}

button.addEventListener("click", mostrarRandom);