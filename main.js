// function saludo () {
//     let bienvenida = alert("Bienvenidx a Fitness para todxs!")
//     let nombre = prompt("Por favor, ingresa tu nombre")
//     alert("Que disfrutes tu estadia " + nombre + "!!")
// }

// saludo()

//BTNS DARK LIGHT
let btnDarkMode = document.getElementById("botonDarkMode");
let btnLightMode = document.getElementById("botonLightMode");
//VALOR PREDETERMINADO LIGHT, SI SE SELECCIONA DARK SE GUARDA
let darkMode;
localStorage.getItem("darkMode");
if (localStorage.getItem("darkMode")) {
  darkMode = localStorage.getItem("darkMode");
} else {
  localStorage.setItem("darkMode", "light");
}

if (darkMode == "dark") {
  document.body.classList.add("darkMode");
}

btnDarkMode.addEventListener("click", () => {
  document.body.classList.add("darkMode");
  //setAtributte
  localStorage.setItem("darkMode", "dark");
});
btnLightMode.addEventListener("click", () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("lightMode", "light");
});

//PARA ELIMINAR ALGUN ITEM USAR LOCASTORAGE.REMOVEITEM ("AQUI VA LA KEY") A TRAVES DE UN BUTTON

//ARRAY DE PRODUCTOS
//DECLARACION DE LA CLASE
class Juegos {
  constructor(id, nombre, año, precio, imagen) {
    //atributos de nuestra clase
    (this.id = id),
      (this.nombre = nombre),
      (this.año = año),
      (this.precio = precio),
      (this.imagen = imagen);
  }
}

//Instanciacion de objetos

const juego1 = new Juegos(
  1,
  "God Of War",
  2020,
  20000,
  "/Media/games/game1.jpg"
);
const juego2 = new Juegos(
  2,
  "Horizon Zero Dawn",
  2017,
  40000,
  "./Media/games/game2.jpg"
);
const juego3 = new Juegos(
  3,
  "Crash Team Racin Nitro Fueled",
  2015,
  45000,
  "./Media/games/game3.jpg"
);
const juego4 = new Juegos(4, "Ghost", 2018, 55000, "/Media/games/game4.jpg");
const juego5 = new Juegos(5, "Fornite", 2018, 20000, "Media/games/game8.png");
const juego6 = new Juegos(
  6,
  "Ratchet Clank",
  2014,
  20000,
  "Media/games/game7.jpg"
);

//Declarar Arrays
let LibGames = [];
let productosEnCarrito = [];

if (localStorage.getItem("estanteria")) {
  LibGames = JSON.parse(localStorage.getItem("estanteria"));
} else {
  LibGames.push(juego1, juego2, juego3, juego4, juego5, juego6);
  localStorage.setItem("estanteria", JSON.stringify(LibGames));
}

//PLANTILLA DE JUEGOS
//ELEMENTOS DOM
let botonCarrito = document.getElementById("botonCarrito");
let modalBody = document.getElementById("modal-body");
let botonFinalizarCompra = document.getElementById("botonFinalizarcompra");
let parrafoCompra = document.getElementById("precioTotal");
let acumulador;
let divProductos = document.getElementById("productos");
divProductos.setAttribute("class", "productosEstilos");
function mostrarCatalogo() {
  LibGames.forEach((Juegos) => {
    let nuevoJuegos = document.createElement("div");
    nuevoJuegos.innerHTML = `<article id="${Juegos.id}" class="card">
                                        <h3 class="tituloCard">${Juegos.nombre}</h3> 
                                        <img src="${Juegos.imagen}" alt="${Juegos.nombre}">
                                        <div class="content">
                                            <p class="autorCard">${Juegos.nombre}</p>
                                            <p class="precioCard">${Juegos.precio}</p>
                                            <button id="agregarBtn${Juegos.id}">Agregar al carrito</button>
                                        </div>                          
                                   </article>`;
    divProductos.appendChild(nuevoJuegos);
    //codigo btn agregar
    let btnAgregar = document.getElementById(`agregarBtn${Juegos.id}`);
    //invocar agregarAlCarrito
    btnAgregar.addEventListener("click", () => {
      agregarAlCarrito(Juegos);
    });
  });
}
function agregarAlCarrito(Juegos) {
  Swal.fire({
    title: `El libro ${Juegos.nombre} ha sido agregado. N° identificación libro: ${Juegos.id}`,
  });
  productosEnCarrito.push(Juegos);
  console.log(productosEnCarrito);
  //Cargar al storage
  localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
}

//BOTON MOSTRAR CATALOGO
let verCatalogoBtn = document.getElementById("verCatalogo");
verCatalogoBtn.addEventListener("click", mostrarCatalogo);
//AGREGAR VARIABLE OCULTARCATALOGO Y ASIGNAR ID DEL BOTON, CON ADDEVENTLISTENER ASIGNAR FUNCION CREADA MAS ABAJO PARA OCULTAR
let ocultarCatalogoBtn = document.getElementById("ocultarCatalogo");
ocultarCatalogoBtn.addEventListener("click", ocultarCatalogo);
//FUNCION OCULTAR CATALOGO
function ocultarCatalogo() {
  divProductos.innerHTML = "";
}

//Evento carrito
botonCarrito.addEventListener("click", () => {
  cargarProductosCarrito(productosEnCarrito);
});
//SOLICITAR NUEVO JUEGO Y AGREGAR NUEVO JUEGO

function guardarJuego() {
  let nombreInput = document.getElementById("nombreJuego");
  let anioInput = document.getElementById("anioJuego");
  let precioInput = document.getElementById("valorJuego");
  let juegoCreado = new Juegos(
    LibGames.length + 1,
    nombreInput.value,
    anioInput.value,
    precioInput.value,
    "Media/caratulavacia.png"
  );
  console.log(juegoCreado);
  //GUARDAR JUEGO AGREGADO A TRAVES DE .PUSH
  LibGames.push(juegoCreado);
  //guardar en el storage ESTANTERIA
  localStorage.setItem("estanteria", JSON.stringify(LibGames));
}

function cargarProductosCarrito(productosDelStorage) {
  modalBody.innerHTML = " ";
  productosDelStorage.forEach((productoCarrito) => {
    modalBody.innerHTML += `
          <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
              <img class="card-img-top" src="${productoCarrito.imagen}" alt="${productoCarrito.nombre}">
              <div class="card-body">
                      <h4 class="card-title">${productoCarrito.nombre}</h4>
                  
                      <p class="card-text">$${productoCarrito.precio}</p> 
                      <button class= "btn btn-danger" id="botonEliminar"><i class="fas fa-trash-alt"></i></button>
              </div>    
          
          
          </div>
  `;
  });
  //FUnction del total
  //productosEnCarritos
  compraTotal(productosDelStorage);
}

function compraTotal(productosTotal) {
  acumulador = 0;
  //recorrer productosTotal
  productosTotal.forEach((productoCarrito) => {
    acumulador += productoCarrito.precio;
  });
  console.log(acumulador);
  //if acumularo = 0 o !=
  if (acumulador == 0) {
    parrafoCompra.innerHTML = `<p>No hay productos en el carrito</p>`;
  } else {
    parrafoCompra.innerHTML = `Importe de su compra ${acumulador}`;
  }
}

// //logica iniciar carrito
// if (localStorage.getItem("carrito")) {
//   productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
// } else {
//   localStorage.setItem("carrito", []);
// }

//BOTON PARA GUARDAR JUEGO
const guardarJuegoBtn = document.getElementById("guardarJuegos");
guardarJuegoBtn.addEventListener("click", guardarJuego);

//PARA GUARDAR OBJETOS DEBEMOS HACER ALGO ADICIONAL, HAY QUE TRANSFORMAR EL OBJETO A JSON == JSON.STRINGIFY -- JSON.PARSE

// let juego1JSON = JSON.stringify(juego1)
// console.log(juego1JSON)
// //pushear
// localStorage.setItem("productoJSON", juego1JSON)
// //pushear array
// let arrayJSON = JSON.stringify(LibGames)
// localStorage.setItem("arrayJson", arrayJSON)

// ALMACENAR JUEGOS

const juegosGuardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};
//JUEGO POR JUEGO
for (const productos of LibGames) {
  juegosGuardarLocal(productos.id, JSON.stringify(LibGames));
}
