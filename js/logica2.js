let carrito = [];

//funcion para cargar listado general de productos
domListaProductos();

//LISTA DE PRODUCTOS FILTRADOS
cajaBotonBuscar.onclick = () => {
  domListaProductosFiltrados()  
};

//funcion para resetear listado de productos luego de filtrar busqueda
cajaTodosLosProductos.onclick = () => {
  domListaProductos();
};

//funcion de busqueda
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
  imagenProductos.innerHTML = `<img src="../images/carrito/productos.png">`;
  textoFinalProductos.innerHTML = `<p>Subtotal Productos`;
  precioFinalProductos.innerHTML = parseInt(`${montoTotal.innerHTML} `);
};

//funcion fetch de domicilios y carga de DOM para envios
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
          cajaOpcionesEnvio.id = `cajaOpcionesEnvio`;
          cajaOpcionesEnvio.className = `cajaOpcionesEnvio`;
          domicilio.className = `domicilio`;
          localidad.className = `localidad`;
          provincia.className = `provincia`;
          cp.className = `cp`;
          precio.className = `precio`;
          domicilio.innerHTML = `<p class="textoEnvio">Domicilio</p><p>${direccion.domicilio}</p>`;
          localidad.innerHTML = `<p class="textoEnvio">Localidad</p><p>${direccion.localidad}</p>`;
          provincia.innerHTML = `<p class="textoEnvio">Provincia</p><p>${direccion.provincia}</p>`;
          cp.innerHTML = `<p class="textoEnvio">Codigo Postal</p><p>${direccion.cp}</p>`;
          precio.innerHTML = `<p class="textoEnvio">Precio</p><div><p>$</p><p>${direccion.precio}</p></div>`;
          cajaEnvioGeneral.append(cajaOpcionesEnvio);
          cajaOpcionesEnvio.append(domicilio, localidad, provincia, cp, precio);

          envioDomicilio.onclick = () => {
            cajaOpcionesEnvio[0].remove();
          };
          cajaOpcionesEnvio.onclick = () => {
            buscarDondeEnviar(direccion.id);
          };
          const buscarDondeEnviar = (idDireccion) => {
            const item = envio.find(
              (direccion) => direccion.id === idDireccion
            );
            imagenEnvio.innerHTML = `<img src="../images/carrito/adomicilio.png">`;
            signoPrecioEnvio.innerHTML = `$`;
            domicilioEnvio.innerHTML = `${item.domicilio},<br>${item.localidad},<br>${item.provincia}, CP: ${item.cp}`;
            precioEnvio.innerHTML = `${item.precio}`;
          };
        };
      });
    });
};

//funcion fetch de domicilios y carga de DOM para retiros
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
          cp.className = `cp`;
          precio.className = `precio`;
          domicilio.innerHTML = `<p class="textoEnvio">Domicilio</p><p>${direccion.domicilio}</p>`;
          localidad.innerHTML = `<p class="textoEnvio">Localidad</p><p>${direccion.localidad}</p>`;
          provincia.innerHTML = `<p class="textoEnvio">Provincia</p><p>${direccion.provincia}</p>`;
          cp.innerHTML = `<p class="textoEnvio">Codigo Postal</p><p>${direccion.cp}</p>`;
          precio.innerHTML = `<p class="textoEnvio">Precio</p><p>${direccion.precio}</p>`;
          cajaEnvioGeneral.append(cajaOpcionesEnvio);
          cajaOpcionesEnvio.append(domicilio, localidad, provincia, cp, precio);

          retiroEnTienda.onclick = () => {
            cajaOpcionesEnvio[0].remove();
          };
          cajaOpcionesEnvio.onclick = () => {
            buscarDondeRetirar(direccion.id);
          };
          const buscarDondeRetirar = (idDireccion) => {
            const item = envio.find(
              (direccion) => direccion.id === idDireccion
            );
            imagenEnvio.innerHTML = `<img src="../images/carrito/retirolocal.png">`;
            signoPrecioEnvio.innerHTML = "";
            domicilioEnvio.innerHTML = `${item.domicilio},<br>${item.localidad},<br>${item.provincia}, CP: ${item.cp}`;
            precioEnvio.innerHTML = `${item.precio}`;
          };
        };
      });
    });
};

//funcion para actualizar monto total con envio
const botonParaEnvioFinal = document.getElementById(`botonParaEnvioFinal`);
botonParaEnvioFinal.onclick = () => {
  if (
    precioFinalProductos.textContent === "0" &&
    precioEnvio.innerHTML === "700"
  ) {
    let finalConCostoEnvio = parseInt(`${parseInt(precioEnvio.innerHTML)}`);
    costoFinalProductos.innerHTML = `<p>${finalConCostoEnvio}</p>`;
  } else if (
    precioFinalProductos.textContent === "0" &&
    precioEnvio.innerHTML === "1300"
  ) {
    let finalConCostoEnvio = parseInt(`${parseInt(precioEnvio.innerHTML)}`);
    costoFinalProductos.innerHTML = `<p>${finalConCostoEnvio}</p>`;
  } else if (
    precioFinalProductos.textContent != 0 &&
    precioEnvio.innerHTML === "Gratis"
  ) {
    let finalSinCostoEnvio = `${precioFinalProductos.innerHTML}`;
    costoFinalProductos.innerHTML = `${finalSinCostoEnvio}`;
  } else if (
    precioFinalProductos.textContent != 0 &&
    precioEnvio.innerHTML === "700"
  ) {
    let finalConCostoEnvio = parseInt(
      `${
        parseInt(precioFinalProductos.innerHTML) +
        parseInt(precioEnvio.innerHTML)
      }`
    );
    costoFinalProductos.innerHTML = `<p>${finalConCostoEnvio}</p>`;
  } else if (
    precioFinalProductos.textContent != 0 &&
    precioEnvio.innerHTML === "1300"
  ) {
    let finalConCostoEnvio = parseInt(
      `${
        parseInt(precioFinalProductos.innerHTML) +
        parseInt(precioEnvio.innerHTML)
      }`
    );
    costoFinalProductos.innerHTML = `<p>${finalConCostoEnvio}</p>`;
  } else if (
    precioFinalProductos.textContent != 0 &&
    precioEnvio.innerHTML === ""
  ) {
    let finalConCostoEnvio = parseInt(
      `${parseInt(precioFinalProductos.innerHTML)}`
    );
    costoFinalProductos.innerHTML = `<p>${finalConCostoEnvio}</p>`;
  } else {
    costoFinalProductos.innerHTML = "0";
  }
};

//funcion terminar compra, vaciar carrito y envio
terminarCompra.addEventListener(`click`, () => {
  if (carrito.length === 0) {
    localStorage.setItem(`carrito`, JSON.stringify(carrito));
    actualizarCarrito();
    alert(`tu carrito esta vacio`);
  } else {
    carrito.length = 0;
    contenedorEnvio.innerHTML= "";
    precioEnvio.innerHTML = "";
    localStorage.setItem(`carrito`, JSON.stringify(carrito));
    actualizarCarrito();
    alert(`compra Realizada`);
  }
});

//json
carrito = JSON.parse(localStorage.getItem("carrito")) || [];
actualizarCarrito();