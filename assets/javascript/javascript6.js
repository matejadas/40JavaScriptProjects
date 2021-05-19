let modal = document.getElementById("modal");
let contenido = document.getElementById("contenido");
let btnMostrar = document.getElementById("btnMostrar");
let btnCerrar = document.getElementById("btnCerrar");

window.addEventListener("load", () => {
    modal.className = "";
    modal.classList.add("oculto");
    contenido.classList.add("visible");
})

btnMostrar.addEventListener("click", () => {
    contenido.className = "";
    contenido.classList.add("oculto");
    modal.className = "";
    modal.classList.add("fullWindow");
});

btnCerrar.addEventListener("click", () => {
    modal.className = "";
    modal.classList.add("oculto");
    contenido.className = "";
    contenido.classList.add("visible");
});