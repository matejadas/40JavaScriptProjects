let app = document.getElementById("app");
let colIconos = document.getElementsByClassName("icono"); // HTMLCollection
let colRespuestas = document.getElementsByClassName("respuesta");

for(let i = 0; i < colIconos.length; i++) {

    colIconos[i].addEventListener("click", () => {        

        //Desplegamos la que corresponde
        colRespuestas[i].classList.toggle("oculto");
    });

};




