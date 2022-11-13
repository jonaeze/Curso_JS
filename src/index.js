//Se importan los metodos para utilizarlos en esta hoja
import { mostrarProducto } from "../src/App.js";
import { pintarCarrito } from "../src/components/cart/accionesCarrito.js";
import { actualizarTotalesCarrito } from "../src/components/cart/actualizarCarrito.js";
// import { productos } from "../src/data/stock.js";
import { obtenerCarritoStorage } from "../src/components/storage/storage.js";
import { homeController } from "./controllers/homeController.js";

document.addEventListener("DOMContentLoaded", async () => {
  const productos = await homeController();

  mostrarProducto(productos);

  if (localStorage.getItem("carrito")) {
    const carrito = obtenerCarritoStorage();
    pintarCarrito(carrito);
    actualizarTotalesCarrito(carrito);
  }
});
