// se importa el metodo que guarda en el Storage
import { guardarCarritoStorage } from "../storage/storage.js";

const actualizarTotalesCarrito = (carrito) => {
  // se crean los metodos para sumar la cantidad total y el pracio total en el carrito
  const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalCompra = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );
  // Se llaman a los metodos con sus paramatros y los pinta en el carrito
  pintarTotalesCarrito(totalCantidad, totalCompra);
  // Actualiza el carrito y lo guarda en el local Storage
  guardarCarritoStorage(carrito);
};
// Se crea el metodo con parametros para mostrar los totales en el carrito
const pintarTotalesCarrito = (totalCantidad, totalCompra) => {
  
  //Se obtienen elementos del HTML por ID
  const contadorCarrito = document.getElementById("contador-carrito");
  const precioTotal = document.getElementById("precioTotal");
  //Se actualizan los textos del HTML
  contadorCarrito.innerText = totalCantidad;
  precioTotal.innerText = totalCompra;
};
// Se exporta el metodo para usar en la hoja correspondiente
export { actualizarTotalesCarrito };
