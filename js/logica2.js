let carrito = [];

//funcion para cargar listado general de productos
domListaProductos()

//LISTA DE PRODUCTOS FILTRADOS
cajaBotonBuscar.onclick = () => {
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
  }
};

//////////////////////////////////////FUNCIONES GENERALES

//funcion para resetear listado de productos luego de filtrar busqueda
cajaTodosLosProductos.onclick = () => {
  domListaProductos()
}

//funcion de busqueda
let funcionDeBusqueda = () => {
  resultadoBusquedaValores = listaProductos.filter(
    (rascadores) =>
    
      ((rascadores.precio >= input1.value && rascadores.precio <= input2.value) && rascadores.modelo.toLowerCase() === input3.value) ||
      (rascadores.precio >= input1.value && rascadores.precio <= input2.value) ||
      rascadores.modelo.toLowerCase() === input3.value
  );
};
input1.onchange = funcionDeBusqueda;
input2.onchange = funcionDeBusqueda;
input3.onchange = funcionDeBusqueda;

//funcion agregar al carrito
const agregarAlCarrito = (IdProducto) => {
  const productoExistente = carrito.some(
    (producto) => producto.id === IdProducto
  );
  if (productoExistente) {
    const producto = carrito.map((producto) => {
      if (producto.id === IdProducto) {
        Toastify({
          text: `Agregaste rascador "${producto.modelo}" a tu carrito`,
          duration: 1500,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "center",
          stopOnFocus: true,
          style: {
            background: "linear-gradient(to right, #14e7b2, #49c93d)",
          },
          onClick: function () {},
        }).showToast();
        producto.cantidad++;
      }
    });
  } else {
    const product = listaProductos.find(
      (producto) => producto.id === IdProducto
    );
    carrito.push(product);
  }
  actualizarCarrito();
};

//funcion restar del carrito
const restarAlCarrito = (IdProducto) => {
  const productoExistente = carrito.some(
    (producto) => producto.id === IdProducto
  );
  if (productoExistente) {
    const producto = carrito.map((producto) => {
      if (producto.id === IdProducto) {
        Toastify({
          text: `Eliminaste rascador "${producto.modelo}" de tu carrito`,
          duration: 1500,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "center",
          stopOnFocus: true,
          style: {
            background: "linear-gradient(to right, #db0606, #c9813d)",
          },
          onClick: function () {},
        }).showToast();
        producto.cantidad--;
        if (producto.cantidad === 0) {
          const item = carrito.find((producto) => producto.id === IdProducto);
          const indice = carrito.indexOf(item);
          item.cantidad = 1;
          carrito.splice(indice, 1);
          localStorage.setItem(`carrito`, JSON.stringify(carrito));
        }
      }
    });
  }
  actualizarCarrito();
};

//funcion eliminar del carrito
const eliminarDeCarrito = (idParaEliminar) => {
  const item = carrito.find((producto) => producto.id === idParaEliminar);
  const indice = carrito.indexOf(item);
  carrito.splice(indice, 1);
  localStorage.setItem(`carrito`, JSON.stringify(carrito));
  actualizarCarrito();
};

//funcion vaciar carrito
botonVaciarCarrito.addEventListener(`click`, () => {
  carrito.length = 0;
  localStorage.setItem(`carrito`, JSON.stringify(carrito));
  actualizarCarrito();
});

//funcion actualizar carrito
const actualizarCarrito = () => {
  cajaCarritoGeneral.innerHTML = "";

  for (const producto of carrito) {
    const cajaCarritoProducto = document.createElement(`div`);
    const imagenProducto = document.createElement(`div`);
    const nombreProducto = document.createElement(`div`);
    const precioProducto = document.createElement(`div`);
    const cantidadProducto = document.createElement(`div`);
    const cantidadProductoInterior = document.createElement(`div`);
    const botonMenosCantidad = document.createElement(`button`);
    const botonCantidad = document.createElement(`div`);
    const botonMasCantidad = document.createElement(`button`);
    const cajaEliminarProducto = document.createElement(`button`);

    cajaCarritoProducto.className = `cajaCarritoProducto`;
    imagenProducto.className = `imagenProducto`;
    nombreProducto.className = `nombreProducto`;
    precioProducto.className = `precioProducto`;
    cajaEliminarProducto.className = `eliminarProducto`;
    cantidadProducto.className = `cantidadProducto`;
    cantidadProductoInterior.className = `cantidadProductoInterior`;

    cantidadProducto.innerHTML = `<p>Cantidad</p>`;
    imagenProducto.innerHTML = `<img src="${producto.img}">`;
    nombreProducto.innerHTML = `<div class="nombreProductoInterior"><p class="modelo">Modelo</p><p>${producto.modelo}</p></div>`;
    precioProducto.innerHTML = `<div class="precioProductoInterior"><p class="precio">Precio</p><p>$${producto.precio}</p></div>`;
    botonMenosCantidad.innerHTML = `<p>-</p>`;
    botonCantidad.innerHTML = `<p type ="number" min="0">${producto.cantidad}</p>`;
    botonMasCantidad.innerHTML = `<p>+</p>`;
    cajaEliminarProducto.innerHTML = `<section>
                                      <span class="trash"><img src="../images/carrito/tachobajo.png">
                                        <span>
                                        <img src="../images/carrito/tachotapa.png">
                                        </span>
                                          <i></i>
                                        </span>
                                      </section>`;

    botonMasCantidad.addEventListener(`click`, () =>
      agregarAlCarrito(producto.id)
    );
    botonMenosCantidad.addEventListener(`click`, () =>
      restarAlCarrito(producto.id)
    );
    cajaEliminarProducto.addEventListener(`click`, () =>
      eliminarDeCarrito(producto.id)
    );

    cajaCarritoGeneral.append(cajaCarritoProducto, botonVaciarCarrito);
    cajaCarritoProducto.append(
      imagenProducto,
      nombreProducto,
      precioProducto,
      cantidadProducto,
      cajaEliminarProducto
    );
    cantidadProducto.append(cantidadProductoInterior);
    cantidadProductoInterior.append(
      botonMenosCantidad,
      botonCantidad,
      botonMasCantidad
    );

    localStorage.setItem(`carrito`, JSON.stringify(carrito));
  }
  contadorCarrito.innerText = carrito.length;

  montoTotal.innerHTML = `${carrito.reduce(
    (accumulador, producto) =>
      accumulador + producto.precio * producto.cantidad,
    0
  )}`;
  contenedorProductos.innerHTML = `${montoTotal.innerHTML}`;
  costoFinalProductos.innerHTML = `${parseInt(contenedorProductos.innerHTML)}`;
};

//////////////////TRABAJANDO//////////////////////////////////////////////////////////////////////////////////////////////

//funcion eleccion de metodo de envio con fetch

//envio
const envioDomicilio = document.getElementById(`envioDomicilio`);
envioDomicilio.onclick = () => {
  fetch(`../envio.json`)
    .then((resultado) => resultado.json())
    .then((envio) => {
      envio.forEach((direccion) => {
        if (direccion.id > 1) {
          const cajaEnvioGeneral = document.getElementById(`cajaEnvioGeneral`);
          const cajaOpcionesEnvio = document.createElement(`button`);
          const domicilio = document.createElement(`div`);
          const localidad = document.createElement(`div`);
          const provincia = document.createElement(`div`);
          const cp = document.createElement(`div`);
          const precio = document.createElement(`div`);

          cajaOpcionesEnvio.className = `cajaOpcionesEnvio`;
          domicilio.className = `domicilio`;
          localidad.className = `localidad`;
          provincia.className = `provincia`;
          cp.className =`cp`;
          precio.className = `precio`;

          domicilio.innerHTML = `<p class="textoEnvio">Domicilio</p><p>${direccion.domicilio}</p>`;
          localidad.innerHTML = `<p class="textoEnvio">Localidad</p><p>${direccion.localidad}</p>`;
          provincia.innerHTML = `<p class="textoEnvio">Provincia</p><p>${direccion.provincia}</p>`;
          cp.innerHTML = `<p class="textoEnvio">Codigo Postal</p><p>${direccion.cp}</p>`;
          precio.innerHTML = `<p class="textoEnvio">Precio</p><p>${direccion.precio}</p>`;
          cajaEnvioGeneral.append(cajaOpcionesEnvio);
          cajaOpcionesEnvio.append(domicilio, localidad, provincia, cp, precio);

          cajaOpcionesEnvio.onclick = () => {
            buscarDondeEnviar(direccion.id);
            
           };
          const buscarDondeEnviar = (idDireccion) => {
            const item = envio.find(
              (direccion) => direccion.id === idDireccion
            );
            contenedorEnvio.innerHTML = `${item.precio}`;
            costoFinalEnvio.innerHTML = `${contenedorEnvio.innerHTML}`;
            };
          }
          
        });
    });
};

//retiro
const retiroEnTienda = document.getElementById(`retiroEnTienda`);
retiroEnTienda.onclick = () => {
  fetch(`../envio.json`)
    .then((resultado) => resultado.json())
    .then((envio) => {
      envio.forEach((direccion) => {
        if (direccion.id === 1) {
          const cajaEnvioGeneral = document.getElementById(`cajaEnvioGeneral`);
          const cajaOpcionesEnvio = document.createElement(`button`);
          const domicilio = document.createElement(`div`);
          const localidad = document.createElement(`div`);
          const provincia = document.createElement(`div`);
          const cp = document.createElement(`div`);
          const precio = document.createElement(`div`);

          cajaOpcionesEnvio.className = `cajaOpcionesEnvio`;
          domicilio.className = `domicilio`;
          localidad.className = `localidad`;
          provincia.className = `provincia`;
          cp.className =`cp`;
          precio.className = `precio`;

          domicilio.innerHTML = `<p class="textoEnvio">Domicilio</p><p>${direccion.domicilio}</p>`;
          localidad.innerHTML = `<p class="textoEnvio">Localidad</p><p>${direccion.localidad}</p>`;
          provincia.innerHTML = `<p class="textoEnvio">Provincia</p><p>${direccion.provincia}</p>`;
          cp.innerHTML = `<p class="textoEnvio">Codigo Postal</p><p>${direccion.cp}</p>`;
          precio.innerHTML = `<p class="textoEnvio">Precio</p><p>${direccion.precio}</p>`;
          cajaEnvioGeneral.append(cajaOpcionesEnvio);
          cajaOpcionesEnvio.append(domicilio, localidad, provincia, cp, precio);

          cajaOpcionesEnvio.onclick = () => {
            buscarDondeRetirar(direccion.id);
          };
          const buscarDondeRetirar = (idDireccion) => {
            const item = envio.find(
              (direccion) => direccion.id === idDireccion
            );
            contenedorEnvio.innerHTML = `${item.precio}`;
            costoFinalEnvio.innerHTML = `${contenedorEnvio.innerHTML}`;
          };
        }
      });
    });
};

//carrito SALIDA
//funcion terminar compra y vaciar carrito
terminarCompra.addEventListener(`click`, () => {
  if (carrito.length === 0) {
    localStorage.setItem(`carrito`, JSON.stringify(carrito));
    actualizarCarrito();
    alert(`tu carrito esta vacio`);
  } else {
    carrito.length = 0;
    localStorage.setItem(`carrito`, JSON.stringify(carrito));
    actualizarCarrito();
    alert(`compra Realizada`);
  }
});

//json
carrito = JSON.parse(localStorage.getItem("carrito")) || [];
actualizarCarrito();

//////////////////////FUNCIONES PENDIENTES?

//ej. para COSTO DE ENVIO DEPENDIENDO LOCALIDAD

// if (
//     baseDeDomicilioCliente[0][0].localidad.toLowerCase() === "capital federal"
//   ) {
//     costoDeEnvio = 500;
//   } else if (
//     baseDeDomicilioCliente[0][0].localidad.toLowerCase() === "buenos aires"
//   ) {
//     costoDeEnvio = 900;
//   } else {
//     costoDeEnvio = 1500;
//   }

//   //monto a abonar dependiendo elecciones

//   let formaDePago = prompt("Elige tu forma de pago \n1.Efectivo\n2.Tarjeta");
//   if (formaDePago === 1) {
//     const sumatoriaConDescuento = (producto, descuento, cantidad, envio) => {
//       return (resultadoFinal = (producto - descuento) * cantidad + envio);
//     };
//     sumatoriaConDescuento(
//       productoElegido.precio,
//       productoElegido.descuento,
//       cantidadDeProducto,
//       costoDeEnvio
//     );

//     console.log(`El producto elegido es el ${
//       productoElegido.modelo
//     } y su precio es de $${productoElegido.precio}\n
//    El descuento correspondiente al producto elegido es de $${
//      productoElegido.descuento
//    } cada uno, por un total de $${(productoElegido.descuento *=
//       cantidadDeProducto)}\n
//    El costo de envio es de $${costoDeEnvio}\n
//    El valor final a abonar es de $${resultadoFinal}`);
//   } else {
//     const sumatoriaSinDescuento = (producto, cantidad, envio) => {
//       return (resultadoFinal = producto * cantidad + envio);
//     };
//     sumatoriaSinDescuento(
//       productoElegido.precio,
//       cantidadDeProducto,
//       costoDeEnvio
//     );

//     console.log(`El producto elegido es el ${productoElegido.modelo} y su precio es de $${productoElegido.precio}\n
//     El costo de envio es de $${costoDeEnvio}\n
//     El valor final a abonar es de $${resultadoFinal}`);
//   }

//   alert("VER RESULTADOS POR CONSOLA");
