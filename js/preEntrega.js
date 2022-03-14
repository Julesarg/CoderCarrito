let descuentoGeneral = 0.1;
let costoDeEnvio = 0;
let resultadoFinal = 0;

class Rascador {
  constructor(
    img,
    marca,
    tipo,
    modelo,
    precio,
    alto,
    ancho,
    profundidad,
    peso,
    material_de_tubos,
    material_de_estructura,
    descuento
  ) {
    this.img = img;
    this.marca = marca;
    this.tipo = tipo;
    this.modelo = modelo;
    this.precio = parseFloat(precio);
    this.alto = alto;
    this.ancho = ancho;
    this.profundidad = profundidad;
    this.peso = peso;
    this.material_de_tubos = material_de_tubos;
    this.material_de_estructura = material_de_estructura;
    this.descuento = this.precio * descuentoGeneral;
  }
}
// class Direccion {
//   constructor(pais, provincia, localidad, codigo_postal, domicilio) {
//     this.pais = pais;
//     this.provincia = provincia;
//     this.localidad = localidad;
//     this.codigo_postal = codigo_postal;
//     this.domicilio = domicilio;
//   }
// }

// //datos para cargar en un hipotetico formulario, podrian cargarse varios y guardarlos en un nuevo array

// const datosEnvioCliente = [];
// let pais = prompt("INGRESAR PAIS");
// let provincia = prompt("INGRESAR PROVINCIA");
// let localidad = prompt("INGRESAR LOCALIDAD");
// let codigo_postal = parseInt(prompt("INGRESAR CODIGO POSTAL"));
// let domicilio = prompt("INGRESAR DOMICILIO");
// datosEnvioCliente.push(
//   new Direccion(pais, provincia, localidad, codigo_postal, domicilio)
// );

// const datosEnvioCliente2 = datosEnvioCliente.slice(0, 2);
// localidad = prompt("INGRESAR LOCALIDAD2");
// codigo_postal = parseInt(prompt("INGRESAR CODIGO POSTAL2"));
// domicilio = prompt("INGRESAR DOMICILIO2");

// const baseDeDomicilioCliente = [datosEnvioCliente, datosEnvioCliente2];

// console.table(baseDeDomicilioCliente);

///OBJETOS
const listaProductos = [];
listaProductos.push(
  new Rascador(
    "../images/productos/mian.png",
    "Rumapets",
    "Rascador",
    "Mian Alfombra",
    4100,
    "55cm",
    "40cm",
    "40cm",
    "6kg",
    "alfombra",
    "polar soft",
    descuentoGeneral
  )
);
listaProductos.push(
  new Rascador(
    "../images/productos/grecia.png",
    "Rumapets",
    "Rascador",
    "Grecia",
    4560,
    "50cm",
    "30cm",
    "30cm",
    "4.5kg",
    "yute",
    "polar soft",
    descuentoGeneral
  )
);
listaProductos.push(
  new Rascador(
    "../images/productos/mianyute.png",
    "Rumapets",
    "Rascador",
    "Mian Yute",
    5100,
    "55cm",
    "40cm",
    "40cm",
    "8kg",
    "yute",
    "polar soft",
    descuentoGeneral
  )
);
listaProductos.push(
  new Rascador(
    "../images/productos/ivy.png",
    "Rumapets",
    "Rascador",
    "Ivy",
    8160,
    "60cm",
    "44cm",
    "44cm",
    "10kg",
    "yute",
    "polar soft",
    descuentoGeneral
  )
);
listaProductos.push(
  new Rascador(
    "../images/productos/atalaya.png",
    "Rumapets",
    "Rascador",
    "Atalaya",
    8160,
    "75cm",
    "55cm",
    "55cm",
    "11kg",
    "alfombra",
    "polar soft",
    descuentoGeneral
  )
);
listaProductos.push(
  new Rascador(
    "../images/productos/nuagealfombra.png",
    "Rumapets",
    "Rascador",
    "Nuage Alfombra",
    11040,
    "100cm",
    "60cm",
    "55cm",
    "15kg",
    "alfombra",
    "polar soft",
    descuentoGeneral
  )
);
listaProductos.push(
  new Rascador(
    "../images/productos/nuage.png",
    "Rumapets",
    "Rascador",
    "Nuage Yute",
    14160,
    "100cm",
    "60cm",
    "55cm",
    "19kg",
    "yute",
    "polar soft",
    descuentoGeneral
  )
);
listaProductos.push(
  new Rascador(
    "../images/productos/kamui.png",
    "Rumapets",
    "Rascador",
    "Kamui",
    17400,
    "90cm",
    "50cm",
    "55cm",
    "16kg",
    "yute",
    "polar soft",
    descuentoGeneral
  )
);
listaProductos.push(
  new Rascador(
    "../images/productos/ruma.png",
    "Rumapets",
    "Rascador",
    "Ruma",
    25200,
    "120cm",
    "50cm",
    "55cm",
    "22kg",
    "yute",
    "polar soft",
    descuentoGeneral
  )
);

//AGREGADO DOM DE PRODUCTOS
const cajaProductos = document.getElementById("cajaProductos");

for (const producto of listaProductos) {
  const cardGeneralItems = document.createElement(`div`);
  cardGeneralItems.className = `cajitaImagen`;
  cardGeneralItems.innerHTML = `<img src="${producto.img}" alt="${producto.modelo}" class="imagenProductoListado"><a class="textoprueba1">${producto.modelo}</a>`;
  cajaProductos.append(cardGeneralItems);
}

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

// //buscador de items por nombre (necesito un filtro mas abarcativo que no me haga escribir cada propiedad del objeto)
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
