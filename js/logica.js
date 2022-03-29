////////////////////////CAJA DE PRODUCTOS
for (const producto of listaProductos) {
  document.getElementById(`cajaProductos`).style.display = `grid`;
  document.getElementById(`cajaBuscador`).style.display = `flex`;
  const cajaIndividual = document.createElement(`div`);  /////////////////template-card
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

  cajaGeneralProductos.append(cajaIndividual);
  cajaIndividual.append(linkProducto, cajaInferior, cajaComprar);
  linkProducto.append(cajaImagen);
  cajaInferior.append(cajaNombreProducto, cajaPrecioLista, cajaPrecioEfvo);
  cajaPrecioLista.append(textoPrecioLista, precioLista);
  cajaPrecioEfvo.append(textoPrecioEfvo, descuentoPrecioEfvo, precioEfvo);

  cajaComprar.onclick = () => {
    const productoComprado = listaProductos.find(
      (producto) => producto.id === cajaComprar.id
    );

    carrito.push({
      img: productoComprado.img,
      modelo: productoComprado.modelo,
      precio: productoComprado.precio,
    });

    localStorage.setItem(`carritoLocal`, JSON.stringify(carrito));

    Swal.fire({
      position: "bottom-end",
      imageUrl: `${producto.img}`,
      icon: `success`,
      imageWidth: `100px`,
      imageHeight: `100px`,
      title: `Has agregado el rascador "${producto.modelo}" a tu carrito`,
      showConfirmButton: false,
      timer: 2500,
    });

  };
}
//////////////////////////////////////////////////////////////////////////////////

//funcion OK////////////////////////////////////////////////////
let funcionDeBusqueda = () => {
  resultadoBusquedaValores = listaProductos.filter(
    (rascadores) =>
      (rascadores.precio >= input1.value &&
        rascadores.precio <= input2.value &&
        rascadores.modelo.toLowerCase() === input3.value) ||
      (rascadores.precio >= input1.value &&
        rascadores.precio <= input2.value) ||
      rascadores.modelo.toLowerCase() === input3.value
  );
};
input1.onchange = funcionDeBusqueda;
input2.onchange = funcionDeBusqueda;
input3.onchange = funcionDeBusqueda;
////////////////////////////////////////////////////////////////////////

cajaBotonBuscar.onclick = () => {
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

    cajaComprar.onclick = () => {
      const productoComprado = listaProductos.find(
        (producto) => producto.id === cajaComprar.id
      );

      carrito.push({
        img: productoComprado.img,
        modelo: productoComprado.modelo,
        precio: productoComprado.precio,
      });

      localStorage.setItem(`carritoLocal`, JSON.stringify(carrito));

      Swal.fire({
        position: "bottom-end",
        imageUrl: `${producto.img}`,
        icon: `success`,
        imageWidth: `100px`,
        imageHeight: `100px`,
        title: `Has agregado el rascador "${producto.modelo}" a tu carrito`,
        showConfirmButton: false,
        timer: 2500,
      });
      // mostrarCarrito()
    };
  }
};

////////////////////////////CARRITO
cajaCarritoGeneral.append(cajaTextoSuperior);

const mostrarCarrito = () => {
  const carrito = JSON.parse(localStorage.getItem(`carritoLocal`));
  for (const producto of carrito) {
    cajaCarritoProducto = document.createElement(`div`);
    const cajaEliminarProducto = document.createElement(`div`);

    cajaCarritoProducto.className = `cajaCarritoProducto`;
    cajaEliminarProducto.className = `eliminarProducto`;

    const imagenProducto = `<img src="${producto.img}">`;
    const nombreProducto = `<p>Modelo <br>${producto.modelo}</p>`;
    const precioProducto = `<p>Precio<br>$${producto.precio}</p>`;
    const cantidadProducto = `<p>Cantidad<br>1</p>`;

    cajaCarritoProducto.innerHTML += imagenProducto;
    cajaCarritoProducto.innerHTML += nombreProducto;
    cajaCarritoProducto.innerHTML += precioProducto;
    cajaCarritoProducto.innerHTML += cantidadProducto;
    cajaEliminarProducto.innerHTML += `<img src="../images/carrito/tacho.png">`;

    cajaCarritoGeneral.append(cajaCarritoProducto);
    cajaCarritoProducto.append(cajaEliminarProducto);
  }

  const montoTotal = document.createElement(`div`);
  montoTotal.className = `montoTotal`;
  const totalCompra = carrito.reduce(
    (accumulador, producto) => accumulador + producto.precio,
    0
  );
  montoTotal.innerHTML = `<p>total: $${totalCompra}</p>`;

  cajaCarritoGeneral.append(cajaCarritoProducto);
  cajaCarritoGeneral.append(montoTotal);
};

botonCarrito.onclick = mostrarCarrito;

//////////////////////FUNCIONES PENDIENTES?

//ej. para COSTO DE ENVIO DEPENDIENDO LOCALIDAD

if (
  baseDeDomicilioCliente[0][0].localidad.toLowerCase() === "capital federal"
) {
  costoDeEnvio = 500;
} else if (
  baseDeDomicilioCliente[0][0].localidad.toLowerCase() === "buenos aires"
) {
  costoDeEnvio = 900;
} else {
  costoDeEnvio = 1500;
}

//monto a abonar dependiendo elecciones

let formaDePago = prompt("Elige tu forma de pago \n1.Efectivo\n2.Tarjeta");
if (formaDePago === 1) {
  const sumatoriaConDescuento = (producto, descuento, cantidad, envio) => {
    return (resultadoFinal = (producto - descuento) * cantidad + envio);
  };
  sumatoriaConDescuento(
    productoElegido.precio,
    productoElegido.descuento,
    cantidadDeProducto,
    costoDeEnvio
  );

  console.log(`El producto elegido es el ${
    productoElegido.modelo
  } y su precio es de $${productoElegido.precio}\n
 El descuento correspondiente al producto elegido es de $${
   productoElegido.descuento
 } cada uno, por un total de $${(productoElegido.descuento *=
    cantidadDeProducto)}\n
 El costo de envio es de $${costoDeEnvio}\n
 El valor final a abonar es de $${resultadoFinal}`);
} else {
  const sumatoriaSinDescuento = (producto, cantidad, envio) => {
    return (resultadoFinal = producto * cantidad + envio);
  };
  sumatoriaSinDescuento(
    productoElegido.precio,
    cantidadDeProducto,
    costoDeEnvio
  );

  console.log(`El producto elegido es el ${productoElegido.modelo} y su precio es de $${productoElegido.precio}\n
  El costo de envio es de $${costoDeEnvio}\n
  El valor final a abonar es de $${resultadoFinal}`);
}

alert("VER RESULTADOS POR CONSOLA");
