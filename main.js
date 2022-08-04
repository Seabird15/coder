// function saludo () {
//     let bienvenida = alert("Bienvenidx a Fitness para todxs!")
//     let nombre = prompt("Por favor, ingresa tu nombre")
//     alert("Que disfrutes tu estadia " + nombre + "!!")
// }

// saludo()

let products = [];
let total = 0;

//agregar productos
function add(product, price) {
  console.log(product, price);
  products.push(product); //.push añade elemento al final del array y devuelve una nueva longitud de array
  total = total + price;
  document.getElementById("checkout").innerHTML = `Pagar $${total}`
}
function pay() {
  window.alert(products.join(", \n"));
}

class planes {
  constructor(id, nombre, duracion, valor) {
    //propiedades o atributos de nuestra clase
    (this.id = id),
      (this.nombre = nombre),
      (this.duracion = duracion),
      (this.valor = valor);
  }
  mostrarDatos() {
    console.log(
      `El nombre del plan es ${this.nombre} su duracion es de ${this.duracion} y tiene un costo de ${this.valor}`
    );
  }
}

//instanciacion de objetos -- se respeta orden y cantidad de atributos

const plan1 = new planes(1, "Plan Basico", "2 meses", 20000);
const plan2 = new planes(2, "Plan Intermedio", "3 meses", 40000);
const plan3 = new planes(3, "Plan Intermedio 2", "4 meses", 45000);
const plan4 = new planes(4, "Plan Intermedio 3", "6 meses", 55000);
const plan5 = new planes(5, "Plan Avanzado", "2 meses", 20000);
const plan6 = new planes(6, "Plan Avano 2", "2 meses", 20000);

//crear array de planes
const gimnasio = [plan1, plan2, plan3, plan4, plan5, plan6];
console.log(gimnasio);

//buscar planes
//gimnasio.forEach((planes)=>console.log(planes.nombre))

//busqueda
//let informacion = prompt("Ingrese su busqueda de planes ")
//informacion = busquedaPlanes

let busquedaPlanes = gimnasio.filter((e) => e.planes == "planes");
console.log(busquedaPlanes);
if (busquedaPlanes == undefined) {
  console.log("El plan no");
}
