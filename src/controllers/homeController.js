/**
 * Metodo carga Stock desde un JSON local
 * @returns {Array}
 */
const homeController = async () => {
  try {
    const response = await fetch("../../src/data/stock.json");
    const data = await response.json();
    return data;
  } catch (error) {
    Swal.fire("Se ha producido un error inesperado", error, "error");
  }
};

export { homeController };
