///JSON QUE NO FUNCIONA//////////
document.addEventListener(`DOMContentLoaded`, () => {
    if (localStorage.getItem(`carrito`)){
        carrito.JSON.parse(localStorage.getItem(`carrito`))
        actualizarCarrito();
    }
})

//////////////////////////LISTA DE PRODUCTOS
listaProductos.forEach ((producto) => {
    document.getElementById(`cajaProductos`).style.display = `grid`;
    document.getElementById(`cajaBuscador`).style.display = `flex`;
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

    const botonComprar = document.getElementById(producto.id)
    
    botonComprar.onclick = () => {
        agregarAlCarrito(producto.id)
    }
})

/////////////////////LISTA DE PRODUCTOS FILTRADOS
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
  
      const botonComprar = document.getElementById(producto.id)
    
        botonComprar.onclick = () => {
        agregarAlCarrito(producto.id)
        } 
    };
}

//FUNCIONES GENERALES

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
    const productoExistente = carrito.some (producto => producto.id === IdProducto)

    if(productoExistente){
        const producto = carrito.map (producto => {
            if (producto.id === IdProducto){
                producto.cantidad++                
            }
        })
    }else {
    const product = listaProductos.find((producto) => producto.id === IdProducto)
    carrito.push(product);    
    }
    actualizarCarrito()
};

//funcion eliminar del carrito
const eliminarDeCarrito = (idParaEliminar) => {
    const item = carrito.find((producto) => producto.id === idParaEliminar);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
  };

//funcion vaciar carrito
  botonVaciarCarrito.onclick = () => {
    carrito.length = 0
    actualizarCarrito();
};

//funcion actualizar carrito
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

        localStorage.setItem(`carrito`, JSON.stringify(carrito)) 
    });
    contadorCarrito.innerText = carrito.length
    montoTotal.innerHTML =`<p>Total: $${carrito.reduce(
        (accumulador, producto) => accumulador + (producto.precio*producto.cantidad),0)}`
  };









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
  