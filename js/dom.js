//nodos barra de busqueda
const cajaBuscador = document.getElementById("cajaBuscador");
const cajaBusquedaMinimo = document.createElement(`input`);
const cajaBusquedaMaximo = document.createElement(`input`);
const cajaBusquedaGeneral = document.createElement(`input`);
const cajaBotonBuscar = document.createElement(`button`);
cajaBusquedaMinimo.className = `cajaBusquedaMinimo`;
cajaBusquedaMaximo.className = `cajaBusquedaMaximo`;
cajaBusquedaMinimo.type = `number`;
cajaBusquedaMinimo.min = "0";
cajaBusquedaMinimo.pattern = `[0-9]`
cajaBusquedaMaximo.type = `number`;
cajaBusquedaMaximo.min = "0";
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

//nodos estaticos de caja de productos
let cajaCarritoProducto;
const cajaProductos = document.getElementById(`cajaProductos`)
const contenedorCarritoTotal = document.getElementById(`contenedorCarritoTotal`)
const cajaCarritoGeneral = document.getElementById(`cajaCarritoGeneral`)
const contadorCarrito = document.getElementById(`contadorCarrito`)
const botonPaginaCarrito = document.getElementById(`botonPaginaCarrito`)
const cajaTextoSuperior = document.createElement(`div`);
const botonVaciarCarrito = document.createElement(`button`)
const montoTotal = document.createElement(`div`)
contenedorCarritoTotal.className = `contenedorCarritoTotal`
cajaTextoSuperior.className = `cajaTextoSuperior`;
cajaCarritoGeneral.className = `cajaCarritoGeneral`
botonVaciarCarrito.className = `botonVaciarCarrito`
montoTotal.className = `montoTotal`
cajaTextoSuperior.innerHTML = `<p>Articulo</> <p>Eliminar</p>`;
botonVaciarCarrito.innerHTML = `<p>Vaciar Carrito</p>`
montoTotal.innerHTML = `<p>Total $0</p>`
contenedorCarritoTotal.append(cajaTextoSuperior, cajaCarritoGeneral, montoTotal)

//nodo contenedor de resultados de busqueda
const cajaFiltroProductos = document.getElementById("cajaProductos2");
document.getElementById(`cajaProductos2`).style.display = `none`;
const confirmarCompra = document.getElementById(`confirmarCompra`);


//nodos estaticos de metodo de envio
const contenedorEnvioTotal = document.getElementById(`contenedorEnvioTotal`);
const terminarCompra = document.getElementById(`terminarCompra`)

const cajaTextoEnvio = document.createElement(`div`);
const cajaEnvioGeneral = document.createElement(`div`);
const imagenEnvio = document.createElement(`img`);
const domicilioEnvio = document.createAttribute(`p`);
const precioEnvio = document.createElement(`p`);
const modificarEnvio = document.createElement(`button`);

contenedorEnvioTotal.className = `contenedorEnvioTotal`;
cajaTextoEnvio.className = `cajaTextoEnvio`;
cajaEnvioGeneral.className = `cajaEnvioGeneral`;

cajaEnvioGeneral.innerHTML = `<div class="cajaImagenEnvio"><img src= "../images/carrito/adomicilio.png"></div>
<div class="domicilioEnvio"><p>Av. SiempreViva 1234, Sprinfield</p></div>
<div class="precioEnvio"><p>$500</p></div>
<div class="modificarEnvio"><p>Modificar</p></div>`

cajaTextoEnvio.innerHTML = `<p>Metodo de Envio</p>`;

contenedorEnvioTotal.append(cajaTextoEnvio, cajaEnvioGeneral);

