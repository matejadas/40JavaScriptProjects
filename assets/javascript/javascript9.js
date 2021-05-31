let btnPlay = document.querySelector("#btnPlay");
let btnPause = document.querySelector("#btnPause");
let video = document.querySelector("#video");

window.addEventListener("DOMContentLoaded", () => {
    btnPause.classList.add("oculto");
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