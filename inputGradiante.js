inputGradiante.js
let input = document.createElement("input");
input.type = "text";
document.body.appendChild(input);

let body = document.querySelector("body");

input.addEventListener("change", function () {
    let color = input.value;
    let multi =generarColorAleatorio()
    
    body.style.background = `linear-gradient(to right, ${color},${multi})`;
});
function generarColorAleatorio() {
    let caracteres = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += caracteres[Math.floor(Math.random() * 16)];
    }

    return color;
  }
  let marquesina=document.createElement("marquee");

marquesina.innerText="increible";

document.body.appendChild(marquesina)


body.style.border = "1px solid black";
'1px solid black'
