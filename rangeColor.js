let input= document.createElement("input")

input.type= "range";
input.value="0"
document.body.appendChild(input);

let body =document.querySelector("body");

input.addEventListener("change", function () {
    let color =input.value;
    body.style.backgroundColor=color;
});