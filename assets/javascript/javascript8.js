/* Modelo */
const menu = [
    {
        id: 1,
        nombre: "Huevos fritos con chorizo",
        categoria: "platos combinados",
        precio: 3.50,
        ruta: "../assets/img/restaurant_menu/huevos_fritos.jpg",
        descripcion: "Un par de huevos fritos con chorizo y patatas fritas. Nunca falla.",
        creditos: "http://cluberas.blogspot.com/2011/12/menus-en-crisis-2_15.html",
    },
    {
        id: 2,
        nombre: "Ensalada de lechuga",
        categoria: "platos combinados",
        precio: 2.50,
        ruta: "../assets/img/restaurant_menu/ensalada.jpg",
        descripcion: "Ensalada de lechuga, zanahoria, tomate, berenjena y tofu.",
        creditos: "https://cocinaconluzverde.blogspot.com/2010/06/ensalada-de-zanahorias-con-curry-y.html",
    },
    {
        id: 3,
        nombre: "Arroz a la cubana",
        categoria: "platos combinados",
        precio: 4.20,
        ruta: "../assets/img/restaurant_menu/arroz_cubana.png",
        descripcion: "Arroz con tomate, plátano frito y aguacate.",
        creditos: "https://www.asopaipas.com/2018/10/arroz-la-cubana-video-receta.html",
    },
    {
        id: 4,
        nombre: "Fideos integrales con verduras asadas",
        categoria: "platos combinados",
        precio: 4.80,
        ruta: "../assets/img/restaurant_menu/verduras_asadas.jpg",
        descripcion: "Fideos integrales con patata, pimiento, tomate y zanahorias asadas.",
        creditos: "https://www.pinterest.es/pin/317714948707010336/",
    },
    {
        id: 5,
        nombre: "Patatas bravas",
        categoria: "platos combinados",
        precio: 3.20,
        ruta: "../assets/img/restaurant_menu/patatas_bravas.jpg",
        descripcion: "Patatas bravas con... bueno, lo que sea eso.",
        creditos: "http://descobrintgirona.blogspot.com/2013/10/Frankfurter-konig.html",
    },
    {
        id: 6,
        nombre: "Café con leche y croissant",
        categoria: "desayunos",
        precio: 1.80,
        ruta: "../assets/img/restaurant_menu/Cafe_con_leche_y_cruasan.jpg",
        descripcion: "Desayuno rápido para empezar bien el día",
        creditos: "https://es.wikipedia.org/wiki/Archivo:Cafe_con_leche_y_cruas%C3%A1n.jpg",
    },
    {
        id: 7,
        nombre: "Café y zumo de naranja",
        categoria: "desayunos",
        precio: 1.80,
        ruta: "../assets/img/restaurant_menu/desayuno_zumo.jpg",
        descripcion: "Café, zumo de naranja y pan con jamón.",
        creditos: "https://commons.wikimedia.org/wiki/File:Desayuno_en_Sevilla.jpg",
    },
    {
        id: 8,
        nombre: "Café y batido",
        categoria: "desayunos",
        precio: 3.90,
        ruta: "../assets/img/restaurant_menu/desayuno_aguacate.jpg",
        descripcion: "Un poco de pan con hummus de aguacate, un huevo pasado por agua, café y un batido de kiwi y lima. No alimenta pero serás el más hipster del barrio.",
        creditos: "https://www.elespanol.com/cocinillas/recetas/saludables/20140817/desayunos-tener-dia/1000002049813_30.html",
    },
    {
        id: 9,
        nombre: "Desayuno inglés",
        categoria: "desayunos",
        precio: 3.50,
        ruta: "../assets/img/restaurant_menu/desayuno_ingles.webp",
        descripcion: "Huevos a la plancha, judías, tomate y bacon. British total",
        creditos: "https://pixabay.com/es/photos/desayuno-desayuno-ingles-completo-998220/",
    },
    {
        id: 10,
        nombre: "Desayuno americano",
        categoria: "desayunos",
        precio: 2.80,
        ruta: "../assets/img/restaurant_menu/american_breakfast.jpg",
        descripcion: "Huevos a la plancha, tomate y un gofre. No cuentes las calorías.",
        creditos: "https://pixabay.com/es/photos/desayuno-desayuno-ingles-completo-998220/",
    },
    {
        id: 11,
        nombre: "Batido de chocolate",
        categoria: "postres",
        precio: 1.50,
        ruta: "../assets/img/restaurant_menu/batido-chocolate.jpg",
        descripcion: "Batido de chocolate con plátanos, aguacate y dátiles.",
        creditos: "https://www.cuerpomente.com/recetas-veganas/postres/postres-sanos-chocolate_2080",
    },
    {
        id: 12,
        nombre: "Tarta de manzana",
        categoria: "postres",
        precio: 1.50,
        ruta: "../assets/img/restaurant_menu/tarta-de-manzana.jpg",
        descripcion: "Tarta de manzana, un clásico americano",
        creditos: "https://postres-faciles.org/receta-de-postres-faciles/tarta-de-manzana-postres-faciles/",
    },
    {
        id: 13,
        nombre: "Arroz con leche",
        categoria: "postres",
        precio: 1.00,
        ruta: "../assets/img/restaurant_menu/arroz-con-leche.jpg",
        descripcion: "El clásico postre de la abuela, por si te habías quedado con hambre",
        creditos: "https://buenavibra.es/casa/sabores/arroz-con-leche-la-receta-de-la-abuela-para-preparar-este-postre-de-fama-mundial/",
    },
    {
        id: 14,
        nombre: "Pastel de queso",
        categoria: "postres",
        precio: 1.20,
        ruta: "../assets/img/restaurant_menu/pastel_de_queso.jpg",
        descripcion: "Pastel de queso, tan bueno como aparenta. ",
        creditos: "https://familiaactiva.es/tarta-de-queso-con-thermomix/",
    },
    {
        id: 15,
        nombre: "Panacota",
        categoria: "postres",
        precio: 1.10,
        ruta: "../assets/img/restaurant_menu/panacota.jpg",
        descripcion: "Como el flan pero con base de nata y frutos rojos",
        creditos: "https://www.cocinayvino.com/en-la-cocina/especiales/cinco-postres-italianos-famosos/",
    },
];

/* Controlador */
const todos = menu;
const desayunos = menu.filter(item => item.categoria === "desayunos");
const pCombinados = menu.filter(item => item.categoria === "platos combinados");
const postres = menu.filter(item => item.categoria === "postres");

/* Vista */
function generaPlatos(arrayPlatos) {
    const contPlatos = document.getElementById("platos");
    contPlatos.innerHTML = "";

    arrayPlatos.forEach(plato => {
        let contenido =
        `
        <div class="plato">
            <div class="foto">
                <img src=${plato.ruta}>
            </div>
            <div class="descripcion">
                <div class="encabezado">
                    <div class="nombre">${plato.nombre}</div>
                    <div class="precio">${plato.precio}</div>
                </div>
                <div class="texto">${plato.descripcion}</div>
            </div>
        </div>
        `;

        contPlatos.innerHTML += contenido;
    });
}

/* Eventos */
    /* Elementos */
let btnTodos = document.getElementById("todos");
let btnDesayunos = document.getElementById("desayunos");
let btnPCombinados = document.getElementById("pCombinados");
let btnPostres = document.getElementById("postres");
let filtrado = document.getElementById("filtrado");

    /* Escuchadores */
window.addEventListener("DOMContentLoaded", () => {
    generaPlatos(todos);
    filtrado.innerHTML = "todos";
});

document.addEventListener("click", (ev) => {
    if (ev.target.matches("#todos")) {
        generaPlatos(todos);
        filtrado.innerHTML = "todos";
    }
    else if(ev.target.matches("#desayunos")) {
        generaPlatos(desayunos);
        filtrado.innerHTML = "desayunos";
    }
    else if(ev.target.matches("#pCombinados")) {
        generaPlatos(pCombinados);
        filtrado.innerHTML = "platos combinados";
    }
    else if(ev.target.matches("#postres")) {
        generaPlatos(postres);
        filtrado.innerHTML = "postres";
    }
})
