let boton =document.createElement("button")
document.body.appendChild(boton);
boton.innerText= "Click"
let button= document.querySelector("button")

const getRandomColor=() =>Math.floor(Math.random()*0xffffff).toString(16);

const generarGradient=()=>{
    const color1=getRandomColor();
    const color2=getRandomColor();
    document.body.style.background=`linear-gradient(to right, #${color1}, #${color2})`;
}
button.addEventListener("click", generarGradient)
