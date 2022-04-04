//////////////////////////////////////////////////////////nodos barra de busqueda
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

////////////////////////////////////////////////////////nodos caja de productos
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
const montoTotal = document.createElement(`div`);

contenedorCarritoTotal.className = `contenedorCarritoTotal`;
cajaTextoSuperior.className = `cajaTextoSuperior`;
cajaCarritoGeneral.className = `cajaCarritoGeneral`;
botonVaciarCarrito.className = `botonVaciarCarrito`;
montoTotal.className = `montoTotal`;

cajaTextoSuperior.innerHTML = `<p>Articulo</> <p>Eliminar</p>`;
botonVaciarCarrito.innerHTML = `<p>Vaciar Carrito</p>`;
montoTotal.innerHTML = `<p>Total $0</p>`;

contenedorCarritoTotal.append(
  cajaTextoSuperior,
  cajaCarritoGeneral,
  montoTotal
);

//////////////////////////////////////////////////////nodo contenedor de resultados de busqueda
const cajaFiltroProductos = document.getElementById("cajaProductos2");
document.getElementById(`cajaProductos2`).style.display = `none`;

///////////////////////////////////////////////////////////////nodos de metodo de envio
const contenedorEnvioTotal = document.getElementById(`contenedorEnvioTotal`);

const cajaTextoEnvio = document.createElement(`div`);
const cajaEnvioGeneral = document.createElement(`div`);

contenedorEnvioTotal.className = `contenedorEnvioTotal`;
cajaTextoEnvio.className = `cajaTextoEnvio`;
cajaEnvioGeneral.className = `cajaEnvioGeneral`;

cajaTextoEnvio.innerHTML = `<p>Metodo de Envio</p>`;
cajaEnvioGeneral.innerHTML = `<div class="cajaFormaDeEnvio">
<select class="form-select" aria-label="Default select example"> 
<option selected>Open this select menu</option>
  <option value="1" id="envioDomicilio">Envio a Domicilio</option>
  <option value="2" id="retiroLocal">Retiro en local</option>
</select>
</div>`;

contenedorEnvioTotal.append(cajaTextoEnvio, cajaEnvioGeneral);

envioDomicilio.addEventListener(`click`, () => {
  cajaEnvioGeneral.innerHTML += `<p>Ingrese su Domicilio</p>`;
  cajaEnvioGeneral.innerHTML += `<input id="domicilioIngresado"></input>`;
  contenedorEnvioTotal.append(cajaEnvioGeneral);

  let domicilioIngresado = document.getElementById(`domicilioIngresado`);
  domicilioIngresado.onchange = () => {
    alert(`hola`);
  }
  });

//////////////////////////////////nodo finalizar compra
const terminarCompra = document.getElementById(`terminarCompra`);
