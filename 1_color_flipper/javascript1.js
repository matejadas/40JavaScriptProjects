'use strict'

/**
 * Generaremos un hexadecimal de 6 cifras, siempre 6, porque
 * Se generarán de 2 en 2, 2 para r, 2 para g y 2 para b (rgb)
 * Una vez generadas se ponen todas juntas, se les antepone una #
 * y se establece ese color, por ejemplo #a4c697
 */

let boton = document.getElementById("btnCambiar");
let span = document.getElementById("hex");

// Comprobamos si lo que se ha generado es una sola letra
function isLetter(string) {
    let result = false;

    if(string.match(/[a-f]{1}/) && string.length === 1) result = true;

    return result;
}

// Generamos un número hexadecimal entre 00 y FF, siempre de 2 cifras
function generar() {
    let hexNumber = Math.round((Math.random()*255)).toString(16);

    if(hexNumber < 10 || isLetter(hexNumber)) hexNumber = hexNumber.padStart(2, 0)

    return hexNumber;
}


function establecerColor() {
    span.innerHTML = `#${generar()}${generar()}${generar()}`;
    document.body.style.backgroundColor = span.innerHTML;
}

// Al cargar la página también se pondrá de un color aleatorio
window.addEventListener("load", () => {
    establecerColor();
})

boton.addEventListener("click", () => {
    establecerColor();
});
