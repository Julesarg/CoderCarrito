//BARRA DE BUSQUEDA
const cajaBuscador = document.getElementById("cajaBuscador");
const cajaTodosLosProductos = document.createElement(`div`);
const cajaBusquedaMinimo = document.createElement(`input`);
const cajaBusquedaMaximo = document.createElement(`input`);
const cajaBusquedaGeneral = document.createElement(`input`);
const cajaBotonBuscar = document.createElement(`button`);
cajaTodosLosProductos.className = `cajaTodosLosProductos`;
cajaBusquedaMinimo.className = `cajaBusquedaMinimo`;
cajaBusquedaMaximo.className = `cajaBusquedaMaximo`;
cajaBusquedaGeneral.className = `cajaBusquedaGeneral`;
cajaBotonBuscar.className = `cajaBuscar`;
cajaBusquedaMinimo.type = `number`;
cajaBusquedaMinimo.min = "0";
cajaBusquedaMaximo.type = `number`;
cajaBusquedaMaximo.min = "0";
cajaTodosLosProductos.id =`cajaTodosLosProductos`;
cajaBusquedaMinimo.id = `cajaBusquedaMinimo`;
cajaBusquedaMaximo.id = `cajaBusquedaMaximo`;
cajaBusquedaGeneral.id = `cajaBusquedaGeneral`;
cajaBotonBuscar.id = `cajaBotonBuscar`;
cajaBusquedaMinimo.placeholder = `precio min.`;
cajaBusquedaMaximo.placeholder = `precio max.`;
cajaTodosLosProductos.innerHTML = `<p>Todos los Productos</p>`;
cajaBotonBuscar.innerHTML = `Buscar`;
cajaBuscador.append(
  cajaTodosLosProductos,
  cajaBusquedaMinimo,
  cajaBusquedaMaximo,
  cajaBusquedaGeneral,
  cajaBotonBuscar
);
let input1 = document.getElementById(`cajaBusquedaMinimo`);
let input2 = document.getElementById(`cajaBusquedaMaximo`);
let input3 = document.getElementById(`cajaBusquedaGeneral`);


//PARA CARGAR PRODUCTOS GENERAL y LISTA FILTRADO
const domListaProductos = () => {
  cajaFiltroProductos.innerHTML = "";
  cajaProductos.innerHTML = "";
  document.getElementById(`cajaProductos`).style.display = `grid`;
  document.getElementById(`cajaProductos2`).style.display = `none`;
  for (const producto of listaProductos) {
    const cajaIndividual = document.createElement(`div`);
    const linkProducto = document.createElement(`a`);
    const cajaImagen = document.createElement(`img`);
    const cajaInferior = document.createElement(`div`);
    const cajaComprar = document.createElement(`p`);
    const cajaNombreProducto = document.createElement(`p`);
    const cajaPrecioLista = document.createElement(`div`);
    const cajaPrecioEfvo = document.createElement(`div`);
    const precioLista = document.createElement(`p`);
    const textoPrecioLista = document.createElement(`p`);
    const precioEfvo = document.createElement(`p`);
    const textoPrecioEfvo = document.createElement(`p`);
    const descuentoPrecioEfvo = document.createElement(`p`);
    cajaIndividual.className = `cajaIndividual`;
    cajaImagen.className = `cajaImagen`;
    cajaInferior.className = `cajaInferior`;
    cajaComprar.className = `botonComprar`;
    cajaPrecioLista.className = `cajaPrecioLista`;
    cajaNombreProducto.className = `nombreModelo`;
    cajaPrecioEfvo.className = `cajaPrecioEfvo`;
    precioLista.className = `precioLista`;
    textoPrecioLista.className = `textoPrecioLista`;
    precioEfvo.className = `precioEfvo`;
    textoPrecioEfvo.className = `textoPrecioEfvo`;
    descuentoPrecioEfvo.className = `descuentoPrecioEfvo`;
    cajaImagen.src = `${producto.img}`;
    linkProducto.target = "_blank";
    linkProducto.setAttribute("href", `${producto.link}`);
    cajaComprar.id = `${producto.id}`;
    cajaComprar.innerHTML = `COMPRAR`;
    cajaNombreProducto.innerHTML = `${producto.modelo}`;
    precioLista.innerHTML = `$${producto.precio}`;
    textoPrecioLista.innerHTML = `Tarjeta`;
    precioEfvo.innerHTML = `$${producto.precioEfectivo()}`;
    descuentoPrecioEfvo.innerHTML = `-$${producto.descuentoDeProducto()} (10%)`;
    textoPrecioEfvo.innerHTML = `Efectivo`;
    cajaProductos.append(cajaIndividual);
    cajaIndividual.append(linkProducto, cajaInferior, cajaComprar);
    linkProducto.append(cajaImagen);
    cajaInferior.append(cajaNombreProducto, cajaPrecioLista, cajaPrecioEfvo);
    cajaPrecioLista.append(textoPrecioLista, precioLista);
    cajaPrecioEfvo.append(textoPrecioEfvo, descuentoPrecioEfvo, precioEfvo);
    const botonComprar = document.getElementById(producto.id);
    botonComprar.addEventListener(`click`, () => {
      agregarAlCarrito(producto.id);
      Swal.fire({
        position: "bottom-end",
        imageUrl: `${producto.img}`,
        icon: `success`,
        imageWidth: `100px`,
        imageHeight: `100px`,
        title: `Has agregado el rascador "${producto.modelo}" a tu carrito`,
        showConfirmButton: false,
        timer: 2000,
      });
    });
  };
};

const domListaProductosFiltrados = () =>{
  cajaFiltroProductos.innerHTML = "";
  document.getElementById(`cajaProductos`).style.display = `none`;
  document.getElementById(`cajaProductos2`).style.display = `grid`;
  for (const producto of resultadoBusquedaValores) {
    const cajaIndividual = document.createElement(`div`);
    const linkProducto = document.createElement(`a`);
    const cajaImagen = document.createElement(`img`);
    const cajaInferior = document.createElement(`div`);
    const cajaNombreProducto = document.createElement(`p`);
    const cajaPrecioLista = document.createElement(`div`);
    const textoPrecioLista = document.createElement(`p`);
    const precioLista = document.createElement(`p`);
    const cajaPrecioEfvo = document.createElement(`div`);
    const textoPrecioEfvo = document.createElement(`p`);
    const descuentoPrecioEfvo = document.createElement(`p`);
    const precioEfvo = document.createElement(`p`);
    const cajaComprar = document.createElement(`p`);
    cajaIndividual.className = `cajaIndividual`;
    cajaImagen.className = `cajaImagen`;
    cajaInferior.className = `cajaInferior`;
    cajaNombreProducto.className = `nombreModelo`;
    cajaPrecioLista.className = `cajaPrecioLista`;
    textoPrecioLista.className = `textoPrecioLista`;
    precioLista.className = `precioLista`;
    cajaPrecioEfvo.className = `cajaPrecioEfvo`;
    textoPrecioEfvo.className = `textoPrecioEfvo`;
    descuentoPrecioEfvo.className = `descuentoPrecioEfvo`;
    precioEfvo.className = `precioEfvo`;
    cajaComprar.className = `botonComprar`;
    cajaComprar.id = `${producto.id}`;
    linkProducto.target = "_blank";
    linkProducto.setAttribute("href", `${producto.link}`);
    cajaImagen.src = `${producto.img}`;
    cajaNombreProducto.innerHTML = `${producto.modelo}`;
    textoPrecioLista.innerHTML = `Tarjeta`;
    textoPrecioEfvo.innerHTML = `Efectivo`;
    precioLista.innerHTML = `$${producto.precio}`;
    descuentoPrecioEfvo.innerHTML = `-$${producto.descuentoDeProducto()} (10%)`;
    precioEfvo.innerHTML = `$${producto.precioEfectivo()}`;
    cajaComprar.innerHTML = `COMPRAR`;
    cajaFiltroProductos.append(cajaIndividual);
    cajaIndividual.append(linkProducto, cajaInferior, cajaComprar);
    linkProducto.append(cajaImagen);
    cajaInferior.append(cajaNombreProducto, cajaPrecioLista, cajaPrecioEfvo);
    cajaPrecioLista.append(textoPrecioLista, precioLista);
    cajaPrecioEfvo.append(textoPrecioEfvo, descuentoPrecioEfvo, precioEfvo);
    const botonComprar = document.getElementById(producto.id);
    botonComprar.addEventListener(`click`, () => {
      agregarAlCarrito(producto.id);
      Swal.fire({
        position: "bottom-end",
        imageUrl: `${producto.img}`,
        icon: `success`,
        imageWidth: `100px`,
        imageHeight: `100px`,
        title: `Has agregado el rascador "${producto.modelo}" a tu carrito`,
        showConfirmButton: false,
        timer: 2000,
      });
    });
  };
};

//CAJA CARRITO DE PRODUCTOS
let cajaCarritoProducto;
const cajaProductos = document.getElementById(`cajaProductos`);
const contenedorCarritoTotal = document.getElementById(`contenedorCarritoTotal`);
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
textoMontoTotal.innerHTML = `<p>Subtotal: $`;
montoTotal.innerHTML = `<p>0</p>`;
contenedorCarritoTotal.append(
  cajaTextoSuperior,
  cajaCarritoGeneral,
  cajaMontoTotal
);
cajaMontoTotal.append(textoMontoTotal, montoTotal);

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
const contenedorTextoSuperiorFinal = document.createElement(`div`);
const contenedorProductos = document.createElement(`div`);
const imagenProductos = document.createElement(`div`)
const textoFinalProductos = document.createElement(`div`);
const precioTextoFinalProductos = document.createElement(`div`);
const precioFinalProductos = document.createElement(`div`);
const contenedorEnvio = document.createElement(`div`);
const imagenEnvio = document.createElement(`div`);
const domicilioEnvio = document.createElement(`div`);
const signoPrecioEnvio = document.createElement(`div`);
const precioEnvio = document.createElement(`div`);
const contenedorPrecioFinal = document.createElement(`div`);
const textoCostoFinal = document.createElement(`div`);
const signoCostoFinal = document.createElement(`div`);
const costoFinalProductos = document.createElement(`div`);
contenedorFinal.className = `contenedorFinal`;
contenedorTextoSuperiorFinal.className = `contenedorTextoSuperiorFinal`;
contenedorProductos.className = `contenedorProductos`;
imagenProductos.className = `imagenProductos`;
textoFinalProductos.className = `textoFinalProductos`;
precioTextoFinalProductos.className = `precioTextoFinalProductos`;
precioFinalProductos.className = `precioFinalProductos`;
contenedorEnvio.className = `contenedorEnvio`;
imagenEnvio.className  = `imagenEnvio`;
domicilioEnvio.className = `domicilioEnvio`
signoPrecioEnvio.className = `signoPrecioEnvio`;
precioEnvio.className = `precioEnvio`;
contenedorPrecioFinal.className = `contenedorPrecioFinal`;
textoCostoFinal.className = `textoCostoFinal`;
signoCostoFinal.className = `signoCostoFinal`;
costoFinalProductos.className = `costoFinalProductos`;
contenedorTextoSuperiorFinal.innerHTML = `<p>Controla tu pedido</p>`
textoCostoFinal.innerHTML = `Total:`;
signoCostoFinal.innerHTML = `$`;
precioTextoFinalProductos.innerHTML = `$`;
contenedorFinal.append(
  contenedorTextoSuperiorFinal,
  contenedorProductos,
  contenedorEnvio,
  contenedorPrecioFinal
);
contenedorProductos.append(imagenProductos,textoFinalProductos, precioTextoFinalProductos,precioFinalProductos);
contenedorEnvio.append(imagenEnvio, domicilioEnvio,signoPrecioEnvio,precioEnvio);
contenedorPrecioFinal.append(textoCostoFinal,signoCostoFinal,costoFinalProductos);

//nodo finalizar compra
const terminarCompra = document.getElementById(`terminarCompra`);