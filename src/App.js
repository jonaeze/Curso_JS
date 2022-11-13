import { validarProductoCarrito } from "../src/components/cart/accionesCarrito.js";
import { productos } from "../src/data/stock.js";

// Funcion que muestra los productos en pantalla

const mostrarProducto = () => {
  //Obtiene el elemento HTML por ID
  const contenedorProductos = document.getElementById("producto-contenedor");
  //Se vacia el elemento para una posterior carga
  contenedorProductos.innerHTML = "";
  //Se recorre la lista de productos para ir armando la tarjeta
  productos.forEach((producto) => {
    //Se crea el elemento DIV agregando clases para darle estilo
    const div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("col-8");
    div.classList.add("col-md-4");
    div.classList.add("mb-5");
    div.classList.add("d-flex");
    div.classList.add("justify-content-center");
    
    const divImagen = document.createElement("div");
    divImagen.classList.add("imgBox");
    divImagen.innerHTML += `<img src="${producto.img}" class="productosBebidas"></img> `;

    const divContenidoCard = document.createElement("div");
    divContenidoCard.classList.add("contentBox");
    divContenidoCard.innerHTML += `
                                    <h3>${producto.nombre}</h3>
                                    <h2 class="price"> $${producto.precio}</h2>
                                    <button type="button" class="buy" id=boton${producto.id}>Comprar</button>
                                    `;
    //Se agregan elementos al elemento padre
    div.appendChild(divImagen);
    div.appendChild(divContenidoCard);
    contenedorProductos.appendChild(div);
    
    const boton = document.getElementById(`boton${producto.id}`);
    //Se le agrega el evento al boton para validar el producto
    boton.addEventListener("click", () => {
      validarProductoCarrito(producto.id);
      //Se crea un mensaje mediante SweetAlert para mostrar el resultado en pantalla
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Su producto se agrego con exito!",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  });
};
//Se llama a la funcion para mostrar los productos
mostrarProducto();
//Se exporta el producto para poder obtenerlo en otra hoja JS
export { mostrarProducto };
