window.addEventListener("load", () => {
    let hamburguesa = document.getElementById("menu_hamb");
    let cerrar = document.getElementById("cerrar");
    let sidebar = document.getElementById("sidebar");
    
    hamburguesa.addEventListener("click", () => {

        if(sidebar.className !== "mostrar") {
            sidebar.className = "";
            sidebar.classList.add("mostrar");
        } else {
            sidebar.classList.remove("mostrar");
            sidebar.classList.add("ocultar");
        }
    })

    cerrar.addEventListener("click", () => {
        sidebar.classList.remove("mostrar");
        sidebar.classList.add("ocultar");
    })

})
