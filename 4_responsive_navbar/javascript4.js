window.addEventListener("load", () => {
    let links = document.getElementById("links");

    if(window.innerWidth <= 1024) {
        links.classList.add("oculto");
        console.log(window.innerWidth);
    }
    
    document.getElementById("menu_hamb").addEventListener("click", () => {
        console.log("click!");
        links.classList.toggle("visible");
        links.classList.toggle("oculto");
    });
})
