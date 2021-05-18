window.addEventListener("load", () => {
    let links = document.getElementById("links");

    if(window.innerWidth <= 1024) {
        links.classList.add("oculto");
    }
    
    document.getElementById("menu_hamb").addEventListener("click", () => {
        links.classList.toggle("visible");
        links.classList.toggle("oculto");
    });
})
