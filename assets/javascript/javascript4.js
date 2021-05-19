window.addEventListener("load", () => {
    let links = document.getElementById("links");

    if(window.innerWidth <= 1024) {
        links.className = "";
        links.classList.add("oculto");
    } else {
        links.classList.remove("oculto");
        links.classList.add("grande");
    }
});

window.addEventListener("resize", () => {
    let links = document.getElementById("links");

    if(window.innerWidth <= 1024) {
        links.className = "";
        links.classList.add("oculto");
    } else {
        links.classList.remove("oculto");
        links.classList.add("grande");
    }
});

document.getElementById("menu_hamb").addEventListener("click", () => {
    
    if(links.className !== "vertical") {
        links.className = "";
        links.classList.add("vertical");  
    } else {
        links.classList.remove("vertical");
        links.classList.add("oculto");
    }
});