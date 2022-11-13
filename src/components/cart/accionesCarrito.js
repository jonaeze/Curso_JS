// Se importan los metodos a utilizar en esta hoja
import { actualizarTotalesCarrito } from "../cart/actualizarCarrito.js";
import { productos } from "../../data/stock.js";
import { obtenerCarritoStorage } from "../storage/storage.js";
// Se crea el carrito 
let carrito = [];
// Se crea el metodo para validar los productos
const validarProductoCarrito = (productoId) => {
  if (localStorage.getItem("carrito")) {
    carrito = obtenerCarritoStorage();
  }
//Se usa el metodo find para recorrer carrito y se busca producto repetido por ID
  const productoRepetido = carrito.find(
    (producto) => producto.id === productoId
  );
// Si el producto esta repetido se le suma 1 a la cantidad del producto correspondiente y se actualiza
  if (productoRepetido) {
    productoRepetido.cantidad++;
    const cantidadProducto = document.getElementById(
      `cantidad${productoRepetido.id}`
    );
    cantidadProducto.innerHTML = `Cantidad: ${productoRepetido.cantidad}`;

    actualizarTotalesCarrito(carrito);
  } else {
    agregarAlCarrito(productoId);
  }
};
// Se agregan productos al carrito
const agregarAlCarrito = (productoId) => {
  //Se toma un elemento del HTML y se recorre la lista de productos
  const contenedor = document.getElementById("cuerpo-carrito");
  const producto = productos.find((producto) => producto.id === productoId);
// Se suman productos al carrito con el metodo PUSH
  carrito.push(producto);
// Se crea un elemento en el HTML y se agregan class
  const divProducto = document.createElement("div");
  divProducto.classList.add("modal-body");
  divProducto.classList.add("productoEnCarrito");
  // Se pintan los productos dentro del carrito
  divProducto.innerHTML += `     <p class="texto-carrito">${producto.nombre}</p>
                                <p class="texto-carrito">$${producto.precio}</p>
                                <p class="texto-carrito" id=cantidad${producto.id}>Cantidad:${producto.cantidad}</p>
                                <button type="button" class="btn btn-danger boton-eliminar" id=eliminar${producto.id} value='${producto.id}'><i class="bi bi-trash3-fill"></i> Eliminar</button>
                                `;
// Se agregan elementos hijos al elemento padre del HTML
  contenedor.appendChild(divProducto);
  // Se llama al metodo correspondiente para actualizar los totales del carrito
  actualizarTotalesCarrito(carrito);
};
// Se crea metodo para vizualizar el carrito
const pintarCarrito = (carrito) => {
  // Se llama un elemento del HTML mediante el ID
  const contenedor = document.getElementById("cuerpo-carrito");
// Se limpia el contenedor para una carga posterior
  contenedor.innerHTML = "";
// Se recorre el carrito para luego poder pintar los productos en el HTML
  carrito.forEach((producto) => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("modal-body");
    divProducto.classList.add("productoEnCarrito");
    divProducto.innerHTML += `  <p class="texto-carrito">${producto.nombre}</p>
                                <p class="texto-carrito">$${producto.precio}</p>
                                <p class="texto-carrito" id=cantidad${producto.id}>Cantidad:${producto.cantidad}</p>
                                <button type="button" class="btn btn-danger boton-eliminar" id=eliminar${producto.id} value='${producto.id}'><i class="bi bi-trash3-fill"></i> Eliminar</button>
                                `;

// Se agregan elementos hijos al elemento padre del HTML
    contenedor.appendChild(divProducto);
  });
};
// se crea metodo para eliminar productos dentro del carrito
const eliminarProductoCarrito = (productoId) => {
  const carritoStorage = obtenerCarritoStorage();
  const carritoActualizado = carritoStorage.filter(
    (producto) => producto.id !== Number(productoId)
  );
// Se actuliza y pinta nuevamente el carrito
  actualizarTotalesCarrito(carritoActualizado);
  pintarCarrito(carritoActualizado);
};

//Metodo para vaciar el carrito al finalizar la compra
const vaciarCarrito = () => {
  
  const carritoActualizado = [];
  // Se actuliza y pinta nuevamente el carrito
  actualizarTotalesCarrito(carritoActualizado);
  pintarCarrito(carritoActualizado);
};



// Se exportan metodos a utilizar en otras hojas JS
export {
  validarProductoCarrito,
  pintarCarrito,
  agregarAlCarrito,
  eliminarProductoCarrito,
  vaciarCarrito
};
