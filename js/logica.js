let costoDeEnvio = 0;
let resultadoFinal = 0;
const descuentoGeneral = 0.1
const precioEfectivo = 0.9


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
