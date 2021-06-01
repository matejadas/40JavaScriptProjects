let btnPlay = document.querySelector("#btnPlay");
let btnPause = document.querySelector("#btnPause");
let video = document.querySelector("#video");
let preloader = document.querySelector("#preloader");

window.addEventListener("DOMContentLoaded", () => {
    btnPause.classList.add("oculto");
});

window.addEventListener("load", () => {
    preloader.classList.add("oculto");
});

btnPlay.addEventListener("click", () => {
    video.play();
    btnPlay.classList.toggle("oculto");
    btnPause.classList.toggle("oculto");
});

btnPause.addEventListener("click", () => {
    video.pause();
    btnPause.classList.toggle("oculto");
    btnPlay.classList.toggle("oculto");
});