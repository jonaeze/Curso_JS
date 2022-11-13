// Se importa el metodo de eliminar el producto del carrito
import { eliminarProductoCarrito, vaciarCarrito } from "../../components/cart/accionesCarrito.js";
// Se obtienen elementos por ID y CLASES del HTML
const modalContenedor = document.querySelector(".modal-content");
const abrirCarrito = document.getElementById("boton-carrito");
const cerrarCarrito = document.getElementById("boton-cerrar-carrito");
const modalCarrito = document.querySelector(".modal-content");
const finalizarCompra = document.getElementById("finalizar-compra");

//Se crean los eventos abrir, cerrar carrito
abrirCarrito.addEventListener("click", () => {
  modalContenedor.classList.toggle("modal-active");
});

cerrarCarrito.addEventListener("click", () => {
  modalContenedor.classList.toggle("modal-active");
});

modalContenedor.addEventListener("click", () => {
  cerrarCarrito.click();
});
// Se crea un evento para el boton de eliminar productos del carrito
modalCarrito.addEventListener("click", (event) => {
  event.stopPropagation();
  if (event.target.classList.contains("boton-eliminar")) {
    // Se utiliza Sweet Alert para dar el mensaje de eliminado
    Swal.fire({
      title: "¿Esta seguro?",
      text: `Se eliminara su producto`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProductoCarrito(event.target.value);
        Swal.fire("Eliminado!", "El producto ha sido eliminado", "success");
      }
    });
  }
});

finalizarCompra.addEventListener("click", () => {
    Swal.fire({
      title: "Se finalizara su compra",
      text: `¿Esta seguro?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito();
        Swal.fire("Felicitaciones!", "Su compra se a realizado con exito!!", "success");
      }
    });
});