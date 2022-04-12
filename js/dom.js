//BARRA DE BUSQUEDA
const cajaBuscador = document.getElementById("cajaBuscador");
const cajaBusquedaMinimo = document.createElement(`input`);
const cajaBusquedaMaximo = document.createElement(`input`);
const cajaBusquedaGeneral = document.createElement(`input`);
const cajaBotonBuscar = document.createElement(`button`);
cajaBusquedaMinimo.className = `cajaBusquedaMinimo`;
cajaBusquedaMaximo.className = `cajaBusquedaMaximo`;
cajaBusquedaGeneral.className = `cajaBusquedaGeneral`;
cajaBotonBuscar.className = `cajaBuscar`;
cajaBusquedaMinimo.type = `number`;
cajaBusquedaMinimo.min = "0";
cajaBusquedaMaximo.type = `number`;
cajaBusquedaMaximo.min = "0";
cajaBusquedaMinimo.id = `cajaBusquedaMinimo`;
cajaBusquedaMaximo.id = `cajaBusquedaMaximo`;
cajaBusquedaGeneral.id = `cajaBusquedaGeneral`;
cajaBotonBuscar.id = `cajaBotonBuscar`;
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

//CAJA DE PRODUCTOS
let cajaCarritoProducto;
const cajaProductos = document.getElementById(`cajaProductos`);
const contenedorCarritoTotal = document.getElementById(
  `contenedorCarritoTotal`
);
const cajaCarritoGeneral = document.getElementById(`cajaCarritoGeneral`);
const contadorCarrito = document.getElementById(`contadorCarrito`);
const botonPaginaCarrito = document.getElementById(`botonPaginaCarrito`);
const cajaTextoSuperior = document.createElement(`div`);
const botonVaciarCarrito = document.createElement(`button`);

const cajaMontoTotal = document.createElement(`div`);
const textoMontoTotal = document.createElement(`p`);
const montoTotal = document.createElement(`div`);



contenedorCarritoTotal.className = `contenedorCarritoTotal`;
cajaTextoSuperior.className = `cajaTextoSuperior`;
cajaCarritoGeneral.className = `cajaCarritoGeneral`;
botonVaciarCarrito.className = `botonVaciarCarrito`;
cajaMontoTotal.className = `cajaMontoTotal`;
textoMontoTotal.className = `textoMontoTotal`;
montoTotal.className = `montoTotal`;

cajaTextoSuperior.innerHTML = `<p>Articulo</> <p>Eliminar</p>`;
botonVaciarCarrito.innerHTML = `<p>Vaciar Carrito</p>`;
textoMontoTotal.innerHTML = `<p>Subtotal: $`
montoTotal.innerHTML = `<p>0</p>`;
contenedorCarritoTotal.append(
  cajaTextoSuperior,
  cajaCarritoGeneral,
  cajaMontoTotal
);

cajaMontoTotal.append(textoMontoTotal, montoTotal)



//CAJA DE RESULTADO DE BUSQUEDA INICIALMENTE OCULTO
const cajaFiltroProductos = document.getElementById("cajaProductos2");
document.getElementById(`cajaProductos2`).style.display = `none`;

//CAJA METODO DE ENVIO
const contenedorEnvioTotal = document.getElementById(`contenedorEnvioTotal`);
const cajaTextoEnvio = document.createElement(`div`);
const cajaEnvioGeneral = document.createElement(`div`);
contenedorEnvioTotal.className = `contenedorEnvioTotal`;
cajaTextoEnvio.className = `cajaTextoEnvio`;
cajaEnvioGeneral.className = `cajaEnvioGeneral`;
cajaEnvioGeneral.id = `cajaEnvioGeneral`;
cajaTextoEnvio.innerHTML = `<p>Metodo de Envio</p>`;
cajaEnvioGeneral.innerHTML = `<div id="cajaFormaDeEnvio" class="cajaFormaDeEnvio">
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Seleccionar
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button" id=envioDomicilio>Envio a Domicilio</button></li>
    <li><button class="dropdown-item" type="button" id=retiroEnTienda>Retiro en Tienda</button></li>
  </ul>
</div>
</div>`;
contenedorEnvioTotal.append(cajaTextoEnvio, cajaEnvioGeneral);


//CAJA FINALIZAR COMPRA Y VACIAR CARRO
const contenedorFinal = document.getElementById(`contenedorMontoFinal`);
const contenedorProductos = document.createElement(`div`);
const contenedorEnvio = document.createElement(`div`);
const contenedorPrecioFinal = document.createElement(`div`);
const costoFinalProductos = document.createElement(`div`);
const costoFinalEnvio = document.createElement(`div`);

contenedorFinal.className = `contenedorFinal`;
contenedorProductos.className = `contenedorProductos`;
contenedorEnvio.className = `contenedorEnvio`;
contenedorPrecioFinal.className = `contenedorPrecioFinal`;
costoFinalProductos.className = `costoFinalProductos`;
costoFinalEnvio.className = `costoFinalEnvio`;

contenedorFinal.append(
  contenedorProductos,
  contenedorEnvio,
  contenedorPrecioFinal
);
contenedorPrecioFinal.append(costoFinalProductos, costoFinalEnvio);















//nodo finalizar compra
const terminarCompra = document.getElementById(`terminarCompra`);
