"use strict"

window.addEventListener("load", () => {

    let numContador = document.getElementById("numero");
    let btnIncremento = document.getElementById("incremento");
    let btnReset = document.getElementById("reset");
    let btnDecremento = document.getElementById("decremento");
    let valor = parseInt(numContador.innerHTML);
    //let bip = new Audio("../assets/sounds/bip.mp3");

    // Gestiona el color del contador
    function comprobarColor() {
        if(valor > 0) numContador.style.color = ("green")
        else if(valor < 0) numContador.style.color = ("red")
        else numContador.style.color = ("gray")
    }

    comprobarColor();

    
    /* Incremento. Ejecutamos la acción en el mousedown y cancelamos en el mouseup
    para que se ejecute mientras está pulsado el botón*/
    btnIncremento.addEventListener("mousedown", () => {

        //Para que nada más pulsar el botón ya haga un incremento sin esperar
        numContador.innerHTML = ++valor;
        //bip.play();
        comprobarColor();

        let incrementa = setInterval(() => {
            numContador.innerHTML = ++valor;
            //bip.play();
            comprobarColor();
        }, 150
        );

        this.addEventListener("mouseup", () => {
            clearInterval(incrementa);            
        });
    });
    
    // Reseteo a 0
    btnReset.addEventListener("click", () => {
        valor = 0;
        numContador.innerHTML = valor;
        comprobarColor();
    });

    // Decremento
    btnDecremento.addEventListener("mousedown", () => {
        numContador.innerHTML = --valor;
        //bip.play();
        comprobarColor();

        let decrementa = setInterval(() => {
            numContador.innerHTML = --valor;
            //bip.play();
            comprobarColor();
        }, 150
        );

        this.addEventListener("mouseup", () => {
            clearInterval(decrementa);
        });
    });

});
