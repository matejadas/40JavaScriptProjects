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

  if(op === "up") sel = ++numSeleccionada;
  else if (op ==="down") sel = --numSeleccionada;
  else if(op === "random") sel = Math.floor(Math.random() * 5) + 1;

  numSeleccionada = validar(sel);

  let container = document.querySelectorAll(".review");

  for(i=0; i<container.length; i++) {

    if(container[i].id.includes(`rev${numSeleccionada}`)) {
      container[i].style.display = "grid";
    }
    else {
      container[i].style.display = "none";
    }
  }
}


window.addEventListener("load", () => {
  seleccionarReview("random");
  
  document.querySelector(".btnPrevious").addEventListener("click", () => {
    seleccionarReview("down");
  });
  
  document.querySelector(".btnNext").addEventListener("click", () => {
    seleccionarReview("up");
  });
  
  document.querySelector(".btnRandom").addEventListener("click", () => {
    seleccionarReview("random");
  });

});


