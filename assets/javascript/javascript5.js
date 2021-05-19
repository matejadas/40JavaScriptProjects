window.addEventListener("load", () => {
    let hamburguesa = document.getElementById("menu_hamb");
    let cerrar = document.getElementById("cerrar");
    let sidebar = document.getElementById("sidebar");
    
    hamburguesa.addEventListener("click", () => {

        // Menú
        if(sidebar.className !== "mostrar") {
            sidebar.className = "";
            sidebar.classList.add("mostrar");
        } else {
            sidebar.classList.remove("mostrar");
            sidebar.classList.add("ocultar");
        }

        // Animación del botón
        if(hamburguesa.className !== "vertical") {
            console.log(this.classname);
            hamburguesa.className = "";
            hamburguesa.classList.add("vertical");
        } else {
            hamburguesa.classList.toggle("vertical");

        }
    })

    cerrar.addEventListener("click", () => {
        sidebar.classList.remove("mostrar");
        sidebar.classList.add("ocultar");
        hamburguesa.classList.toggle("vertical");
    });


})
