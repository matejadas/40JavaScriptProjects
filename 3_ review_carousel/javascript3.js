let numSeleccionada = 1;

// Función para el bucle
function validar(num) {
  let ret;

  if (num > 5) ret = 1;
  else if(num < 1) ret = 5;
  else ret = num;

  return ret;
}

// Devuelve una review
function seleccionarReview(op){
  let sel = 1;

  if(op === "up") sel = numSeleccionada++;
  else if (op ==="down") sel = numSeleccionada--;
  else if(op === "random") sel = Math.floor(Math.random() * 5) + 1;

  numSeleccionada = validar(sel);

  let revSeleccionada = document.getElementById(`rev${numSeleccionada}`);

  console.log(numSeleccionada);

  return revSeleccionada;
}

function mostrarOcultar(op) {
  let coleccion = document.getElementsByClassName("review");
  let sel = seleccionarReview(op);


}


window.addEventListener("load", () => {
  seleccionarReview("random").classList.toggle("oculto");
  
  document.querySelector(".btnPrevious").addEventListener("click", () => {
    seleccionarReview("down").classList.toggle("oculto");
  });
  
  document.querySelector(".btnNext").addEventListener("click", () => {
    seleccionarReview("up").classList.toggle("oculto");
  });
  
  document.querySelector(".btnRandom").addEventListener("click", () => {
    seleccionarReview("random").classList.toggle("oculto");
  });

});


