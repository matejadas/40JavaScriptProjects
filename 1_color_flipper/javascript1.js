'use strict'

let boton = document.getElementById("btnCambiar");
let span = document.getElementById("hex");

// Generamos un número hexadecimal entre 00 y FF, siempre de 2 cifras
function generar() {
    let hexNumber = Math.round((Math.random()*255)).toString(16);
    let result = "";

    if(hexNumber < 10) result = `0${hexNumber}`;
    else result = hexNumber;

    console.log(result);
    
    return result;
}


function establecerColor() {
    span.innerHTML = `#${generar()}${generar()}${generar()}`;
    document.getElementsByTagName("body")[0].style.backgroundColor = span.innerHTML;
}

window.addEventListener("load", () => {
    establecerColor();
})
boton.addEventListener("click", () => {
    establecerColor();
});
