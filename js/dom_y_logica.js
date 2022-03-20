let costoDeEnvio = 0;
let resultadoFinal = 0;
const descuentoGeneral = 0.1
const precioEfectivo = 0.9

////////////////////////////DOM caja de buscador
const cajaBuscador = document.getElementById("cajaBuscador");

////////////////////////////////////////////////////////////////////
const cajaBusquedaMinimo = document.createElement(`input`);
const cajaBusquedaMaximo = document.createElement(`input`);
const cajaBusquedaGeneral = document.createElement(`input`);
const cajaBotonBuscar = document.createElement(`div`);

cajaBusquedaMinimo.className = `cajaBusquedaMinimo`;
cajaBusquedaMaximo.className = `cajaBusquedaMaximo`;
cajaBusquedaGeneral.className = `cajaBusquedaGeneral`;
cajaBotonBuscar.className = `cajaBuscar`;
cajaBusquedaMinimo.id = `cajaBusquedaMinimo`;
cajaBusquedaMaximo.id = `cajaBusquedaMaximo`;
cajaBusquedaGeneral.id = `cajaBusquedaGeneral`;
cajaBotonBuscar.id = `cajaBuscar`;
cajaBusquedaMinimo.placeholder = `precio min.`
cajaBusquedaMaximo.placeholder = `precio max.`

cajaBotonBuscar.innerHTML = `Buscar`; // interaccion

cajaBuscador.append(cajaBusquedaMinimo, cajaBusquedaMaximo, cajaBusquedaGeneral, cajaBotonBuscar);
// ///////////////////////////////////////////////////////////////////////

//////////////////////////DOM CAJA DE PRODUCTOS


const cajaGeneralProductos = document.getElementById("cajaProductos");
const botonCarrito = document.getElementById(`botonCarrito`);

for (const producto of listaProductos) {

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
  cajaComprar.id = `${producto.id}`

  linkProducto.target = "_blank";
  linkProducto.setAttribute("href", `${producto.link}`);
  cajaImagen.src= `${producto.img}`;
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
    const productoComprado = listaProductos.find(producto => producto.id === cajaComprar.id);
    carrito.push({img: productoComprado.img, modelo:productoComprado.modelo, precio:productoComprado.precio})
    alert('producto agregado al carrito, luego modificare esto'); //hacer pop up no invasivo con bootstrap despues
  }
}

//DOM CARRITO
let cajaCarritoProducto;
const cajaCarritoGeneral = document.getElementById('cajaCarritoGeneral');

const cajaTextoSuperior = document.createElement(`div`)
cajaTextoSuperior.className = `cajaTextoSuperior`;
cajaTextoSuperior.innerHTML = `<p>Articulo</> <p>Carrito</p>`

const mostrarCarrito = () => {
  cajaCarritoGeneral.append(cajaTextoSuperior);  

  for (const producto of carrito){
    cajaCarritoProducto = document.createElement(`div`);
    const cajaEliminarProducto = document.createElement(`div`);

    cajaCarritoProducto.className = `cajaCarritoProducto`;
    cajaEliminarProducto.className = `eliminarProducto`;
    
    const imagenProducto = `<img src="${producto.img}">`;
    const nombreProducto = `<p>Modelo <br>${producto.modelo}</p>`;
    const precioProducto = `<p>Precio<br>$${producto.precio}</p>`;
        
    cajaCarritoProducto.innerHTML += imagenProducto;
    cajaCarritoProducto.innerHTML += nombreProducto;
    cajaCarritoProducto.innerHTML += precioProducto;
    cajaEliminarProducto.innerHTML += `<img src="../images/carrito/tacho.png">`;

    cajaCarritoGeneral.append(cajaCarritoProducto);
    cajaCarritoProducto.append(cajaEliminarProducto);
  } 

  const montoTotal = document.createElement(`div`);
  montoTotal.className = `montoTotal`;    
  const totalCompra = carrito.reduce((accumulador, producto) => accumulador + producto.precio, 0); 
  montoTotal.innerHTML = `<p>total: $${totalCompra}</p>`;
  
  cajaCarritoGeneral.append(cajaCarritoProducto);
  cajaCarritoGeneral.append(montoTotal);
}
  botonCarrito.onclick = mostrarCarrito;




// console.table(listaProductos);

// ////////////////////////FUNCIONES

// //buscador de items por rango de precios
// alert("EJEMPLO DE BUSCADOR DE PRODUCTOS POR PRECIO MAXIMO Y MINIMO");
// let campoDeBusqueda = parseInt(prompt("ingresar precio minimo de rascador"));
// let campoDeBusqueda2 = parseInt(prompt("ingresar precio maximo de rascador"));
// let resultadoBusquedaValores = listaProductos.filter(
//   (rascadores) =>
//     rascadores.precio >= campoDeBusqueda &&
//     rascadores.precio <= campoDeBusqueda2
// );

// console.log(
//   "Aca van los resultados de la busqueda por precio minimo y maximo de rascador: %o",
//   resultadoBusquedaValores
// );

//buscador de items por nombre (necesito un filtro mas abarcativo que no me haga escribir cada propiedad del objeto)
// alert("EJEMPLO DE BUSCADOR DE PRODUCTOS POR PALABRA CLAVE ");
// let campoDeBusqueda3 = prompt(
//   "poner palabra clave --rascador-- o algun modelo especifico"
// ).toLowerCase();
// let resultadoBusquedaNombre = listaProductos.filter(
//   (rascadores2) =>
//     rascadores2.tipo.toLowerCase() === campoDeBusqueda3 ||
//     rascadores2.modelo.toLowerCase() === campoDeBusqueda3
// );

// console.log(
//   "Aca van los resultados de la busqueda por palabra clave: %o",
//   resultadoBusquedaNombre
// );

// alert("EJEMPLO DE HACER CLICK PARA AGREGAR A CARRITO PERO CON PROMPT");
// let seleccionProducto = prompt(
//   "Escriba el producto a comprar --escribir ruma--"
// ).toLowerCase();

// productoElegido = listaProductos.find(
//   (rascadores) => rascadores.modelo.toLowerCase() === seleccionProducto
// );

// let cantidadDeProducto = parseInt(prompt("Cuantos quieres?"));

// console.log(
//   `cliente pide ${cantidadDeProducto} rascador/es ${productoElegido.modelo}`
// );

// //ej. para COSTO DE ENVIO DEPENDIENDO LOCALIDAD

// if (
//   baseDeDomicilioCliente[0][0].localidad.toLowerCase() === "capital federal"
// ) {
//   costoDeEnvio = 500;
// } else if (
//   baseDeDomicilioCliente[0][0].localidad.toLowerCase() === "buenos aires"
// ) {
//   costoDeEnvio = 900;
// } else {
//   costoDeEnvio = 1500;
// }

// //monto a abonar dependiendo elecciones

// let formaDePago = prompt("Elige tu forma de pago \n1.Efectivo\n2.Tarjeta");
// if (formaDePago === 1) {
//   const sumatoriaConDescuento = (producto, descuento, cantidad, envio) => {
//     return (resultadoFinal = (producto - descuento) * cantidad + envio);
//   };
//   sumatoriaConDescuento(
//     productoElegido.precio,
//     productoElegido.descuento,
//     cantidadDeProducto,
//     costoDeEnvio
//   );

//   console.log(`El producto elegido es el ${
//     productoElegido.modelo
//   } y su precio es de $${productoElegido.precio}\n
//  El descuento correspondiente al producto elegido es de $${
//    productoElegido.descuento
//  } cada uno, por un total de $${(productoElegido.descuento *=
//     cantidadDeProducto)}\n
//  El costo de envio es de $${costoDeEnvio}\n
//  El valor final a abonar es de $${resultadoFinal}`);
// } else {
//   const sumatoriaSinDescuento = (producto, cantidad, envio) => {
//     return (resultadoFinal = producto * cantidad + envio);
//   };
//   sumatoriaSinDescuento(
//     productoElegido.precio,
//     cantidadDeProducto,
//     costoDeEnvio
//   );

//   console.log(`El producto elegido es el ${productoElegido.modelo} y su precio es de $${productoElegido.precio}\n
//   El costo de envio es de $${costoDeEnvio}\n
//   El valor final a abonar es de $${resultadoFinal}`);
// }

// alert("VER RESULTADOS POR CONSOLA");
