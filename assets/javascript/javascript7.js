let colIconos = document.querySelectorAll(".icono");
let colRespuestas = document.querySelectorAll(".respuesta");

colIconos.forEach((icono, indiceIconos) => {

    icono.addEventListener("click", () => {

        colRespuestas.forEach((respuesta, indiceResp) => {
            
            if(indiceResp !== indiceIconos && respuesta.className !== "oculto") {
                respuesta.classList.add("oculto");
            } else {
                respuesta.classList.toggle("oculto");
            }
        });
    });
});
