//funcion vaciar carrito OK
botonVaciarCarrito.onclick = () => {
    carrito.length = 0
    actualizarCarrito();
}

//funcion agregar al carrito OK
const agregarAlCarrito = (productoId) => {
    const item = listaProductos.find((producto) => producto.id === productoId);
    carrito.push(item);
    actualizarCarrito();
  };
  
  //funcion eliminar del carrito OK
  const eliminarDeCarrito = (idParaEliminar) => {
    const item = carrito.find((producto) => producto.id === idParaEliminar);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
  };
  
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
  
  
      const botonComprar = document.getElementById(`${producto.id}`);
      botonComprar.onclick = () => {
        agregarAlCarrito(producto.id);
    
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
    }
  };
}

//funcion crear productos OK
for (const producto of listaProductos) {
  document.getElementById(`cajaProductos`).style.display = `grid`;
  document.getElementById(`cajaBuscador`).style.display = `flex`;
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

  cajaGeneralProductos.append(cajaIndividual);
  cajaIndividual.append(linkProducto, cajaInferior, cajaComprar);
  linkProducto.append(cajaImagen);
  cajaInferior.append(cajaNombreProducto, cajaPrecioLista, cajaPrecioEfvo);
  cajaPrecioLista.append(textoPrecioLista, precioLista);
  cajaPrecioEfvo.append(textoPrecioEfvo, descuentoPrecioEfvo, precioEfvo);

  const botonComprar = document.getElementById(`${producto.id}`);
  botonComprar.onclick = () => {
    agregarAlCarrito(producto.id);

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

//funcion agregar al carrito OK
const actualizarCarrito = () => {
  cajaCarritoGeneral.innerHTML = "";

  carrito.forEach((producto) => {
    cajaCarritoProducto = document.createElement(`div`);

    const imagenProducto = document.createElement(`div`);
    const nombreProducto = document.createElement(`div`);
    const precioProducto = document.createElement(`div`);
    const cantidadProducto = document.createElement(`div`);
    const cajaEliminarProducto = document.createElement(`button`);

    cajaCarritoProducto.className = `cajaCarritoProducto`;
    cajaEliminarProducto.className = `eliminarProducto`;    

    imagenProducto.innerHTML = `<img src="${producto.img}">`;
    nombreProducto.innerHTML = `<p>Modelo <br>${producto.modelo}</p>`;
    precioProducto.innerHTML = `<p>Precio<br>$${producto.precio}</p>`;
    cantidadProducto.innerHTML = `<p>${producto.cantidad}</p>`;
    cajaEliminarProducto.innerHTML = `<img src="../images/carrito/tacho.png">`;

    cajaEliminarProducto.onclick = () => eliminarDeCarrito(producto.id);   
    cajaCarritoGeneral.append(cajaCarritoProducto, botonVaciarCarrito);
    cajaCarritoProducto.append(
      imagenProducto,
      nombreProducto,
      precioProducto,
      cantidadProducto,
      cajaEliminarProducto);

    localStorage.setItem(`carritoLocal`, JSON.stringify(carrito))    
  });
  contadorCarrito.innerText = carrito.length;
  montoTotal.innerHTML =`<p>Total:$${carrito.reduce(
    (accumulador, producto) => accumulador + producto.precio,0)}`
};