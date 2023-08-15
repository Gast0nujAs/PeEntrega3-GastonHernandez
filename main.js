const Bebidas = function(id,nombre,precio,stock){
    this.id = id
    this.nombre = nombre, 
    this.precio = precio,
    this.stock = stock 
}

let whisky1 = new Bebidas(1,"Blue Label", 100000, 5);
let whisky2 = new Bebidas(2,"Double Black Label", 25000, 10);
let whisky3 = new Bebidas(3,"Green Label", 65000, 7);
let whisky4 = new Bebidas(4,"Ballantines 12", 12000, 14);
let whisky5 = new Bebidas(5,"Ballantines 7", 8000, 5);
let whisky6 = new Bebidas(6,"Ballantines",5000, 12);

const Whisky = [whisky1,whisky2,whisky3,whisky4,whisky5,whisky6];

const guardarLocal = (clave,valor ) => (localStorage.setItem(clave, valor));

for (const producto of Whisky){
  guardarLocal(producto.id, JSON.stringify(producto));
  
}

guardarLocal("bebidas",JSON.stringify(Whisky))


let carrito = []

const boton = document.getElementById("boton");

function agregarCarrito(){
  const botella = document.getElementById("botella")
  const producto = JSON.parse(localStorage.getItem(Whisky))
  const cantidad = 1
  if (cantidad > 0){
    carrito.push(botella)
  }
  alert("agregado")

}

console.log(carrito)
