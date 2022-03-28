//variables globales
let costoDeEnvio = 0;
let resultadoFinal = 0;
const descuentoGeneral = 0.1;
const precioEfectivo = 0.9;

//nodos barra de busqueda
const cajaBuscador = document.getElementById("cajaBuscador");
const cajaBusquedaMinimo = document.createElement(`input`);
const cajaBusquedaMaximo = document.createElement(`input`);
const cajaBusquedaGeneral = document.createElement(`input`);
const cajaBotonBuscar = document.createElement(`button`);

cajaBusquedaMinimo.className = `cajaBusquedaMinimo`;
cajaBusquedaMaximo.className = `cajaBusquedaMaximo`;
cajaBusquedaMinimo.type = `number`;
cajaBusquedaMaximo.type = `number`;
cajaBusquedaGeneral.className = `cajaBusquedaGeneral`;
cajaBotonBuscar.className = `cajaBuscar`;
cajaBusquedaMinimo.id = `cajaBusquedaMinimo`;
cajaBusquedaMaximo.id = `cajaBusquedaMaximo`;
cajaBusquedaGeneral.id = `cajaBusquedaGeneral`;
cajaBotonBuscar.id = `cajaBuscar`;
cajaBusquedaMinimo.placeholder = `precio min.`;
cajaBusquedaMaximo.placeholder = `precio max.`;

cajaBotonBuscar.innerHTML = `Buscar`;

cajaBuscador.append(
  cajaBusquedaMinimo,
  cajaBusquedaMaximo,
  cajaBusquedaGeneral,
  cajaBotonBuscar
);

let input1 = document.getElementById(`cajaBusquedaMinimo`);
let input2 = document.getElementById(`cajaBusquedaMaximo`);
let input3 = document.getElementById(`cajaBusquedaGeneral`);

//nodo contenedor de resultados de busqueda
const cajaFiltroProductos = document.getElementById("cajaProductos2");
document.getElementById(`cajaProductos2`).style.display = `none`;


//nodo de productos general
const cajaGeneralProductos = document.getElementById("cajaProductos");

//nodo carrito
let cajaCarritoProducto;


const contenedorCarritoTotal = document.getElementById(`contenedorCarritoTotal`)
const cajaCarritoGeneral = document.getElementById("cajaCarritoGeneral");
const contadorCarrito = document.getElementById(`contadorCarrito`)

const cajaTextoSuperior = document.createElement(`div`);
const botonVaciarCarrito = document.createElement(`button`)
const montoTotal = document.createElement(`div`)

contenedorCarritoTotal.className = `contenedorCarritoTotal`
cajaTextoSuperior.className = `cajaTextoSuperior`;
botonVaciarCarrito.className = `botonVaciarCarrito`
montoTotal.className = `montoTotal`

cajaTextoSuperior.innerHTML = `<p>Articulo</> <p>Carrito</p>`;
botonVaciarCarrito.innerHTML = `<p>Vaciar Carrito</p>`
montoTotal.innerHTML = `<p>Total $0</p>`
contenedorCarritoTotal.append(cajaTextoSuperior, cajaCarritoGeneral, montoTotal)