let arrIconos = document.getElementsByClassName("icono"); // HTMLCollection, array
//let arrRespuestas = document.getElementsByClassName("respuesta");

window.addEventListener("click", (ev) => {
    let selector;

    for(i=0; i<arrIconos.length; i++) {
        selector = "." + arrIconos[i].className;

        if(ev.target.matches(selector)) {
            console.log(i);
        }
    }
});
 // no funciona