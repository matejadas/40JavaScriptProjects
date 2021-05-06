"use strict"

window.addEventListener("load", () => {

    let numContador = document.getElementById("numero");
    let btnIncremento = document.getElementById("incremento");
    let btnReset = document.getElementById("reset");
    let btnDecremento = document.getElementById("decremento");
    let valor = parseInt(numContador.innerHTML);
    //let bip = new Audio("../assets/sounds/bip.mp3");
    
    /* Ejecutamos la acción en el mousedown y cancelamos en el mouseup
    para que se ejecute mientras está pulsado el botón*/
    btnIncremento.addEventListener("mousedown", () => {

        //Para que nada más pulsar el botón ya haga un incremento sin esperar
        numContador.innerHTML = ++valor;
        //bip.play();

        let incrementa = setInterval(() => {
            numContador.innerHTML = ++valor;
            //bip.play();
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
    });

    // Decremento
    btnDecremento.addEventListener("mousedown", () => {
        numContador.innerHTML = --valor;
        //bip.play();

        let decrementa = setInterval(() => {
            numContador.innerHTML = --valor;
            //bip.play();
        }, 150
        );

        this.addEventListener("mouseup", () => {
            clearInterval(decrementa);
        });
    });


});
