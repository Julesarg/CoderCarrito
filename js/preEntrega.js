//VARIABLES GENERALES
let descuentoGeneral = 0.1
//VARIABLES QUE EL CLIENTE MODIFICA O PRECARGA (como hago esto?)
let cantidadDeProducto = 3
let formaDePago = "efectivo"
//VARIABLES QUE VARIAN CONSECUENTEMENTE A LO MODIFICADO O PRECARGADO POR EL CLIENTE
let costoDeEnvio = 0
let resultadoFinal = 0

//OBJETOS
class Rascador{
    constructor(marca, modelo, precio, alto, ancho, profundidad, peso, descuento) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = parseFloat(precio);
    this.alto = alto;
    this.ancho = ancho;
    this.profundidad = profundidad;
    this.peso = peso;
    this.descuento = this.precio * descuentoGeneral;
    }
}

//objeto que deberia cargar el cliente en algun campo del html y guardarse
const datosEnvioCliente = { pais: "Argentina", provincia: "Buenos Aires", localidad: "capital federal", codigo_postal: "1405", domicilio: "Av. Siempreviva 1234"}


//ARRAY
const listaProductos = [];
listaProductos.push(new Rascador("Rumapets", "Mian Alfombra", 4100, "55cm", "40cm", "40cm", "6kg", descuentoGeneral));
listaProductos.push(new Rascador("Rumapets", "Grecia", 4560, "50cm", "30cm", "30cm", "4.5kg", descuentoGeneral));
listaProductos.push(new Rascador("Rumapets", "Mian Yute", 5100, "55cm", "40cm", "40cm", "8kg", descuentoGeneral));
listaProductos.push(new Rascador("Rumapets", "Ivy", 8160, "60cm", "44cm", "44cm", "10kg", descuentoGeneral));
listaProductos.push(new Rascador("Rumapets", "Atalaya", 8160, "75cm", "55cm", "55cm", "11kg", descuentoGeneral));
listaProductos.push(new Rascador("Rumapets", "Nuage Alfombra", 11040, "100cm", "60cm", "55cm", "15kg", descuentoGeneral));
listaProductos.push(new Rascador("Rumapets", "Nuage Yute", 14160, "100cm", "60cm", "55cm", "19kg", descuentoGeneral));
listaProductos.push(new Rascador("Rumapets", "Kamui", 17400, "90cm", "50cm", "55cm", "16kg", descuentoGeneral));
listaProductos.push(new Rascador("Rumapets", "Ruma", 25200, "120cm", "50cm", "55cm", "22kg", descuentoGeneral));


//FUNCIONES

//ej. para COSTO DE ENVIO DEPENDIENDO LOCALIDAD

if (datosEnvioCliente.localidad.toLowerCase() === "capital federal"){
    costoDeEnvio = 500
}
else if (datosEnvioCliente.localidad.toLowerCase() === "buenos aires"){
    costoDeEnvio = 900
}
else {
    costoDeEnvio = 1500
}


//monto a abonar dependiendo elecciones

if (formaDePago === "efectivo"){
  function totalPedidoEfectivo (producto, descuento, cantidad, envio){
    resultadoFinal = ((producto - descuento) * cantidad) + envio;
    }
   totalPedidoEfectivo(listaProductos[0].precio, listaProductos[0].descuento, cantidadDeProducto, costoDeEnvio);
}else {
    function totalPedidoEfectivo (producto, cantidad, envio){
        resultadoFinal = producto * cantidad + envio;
    }    
    totalPedidoEfectivo(listaProductos[0].precio, cantidadDeProducto, costoDeEnvio);       
}

console.log(`El producto elegido es el ${listaProductos[0].modelo} y su precio es de $${listaProductos[0].precio}`);
console.log(`El descuento correspondiente al producto elegido es de $${listaProductos[0].descuento}`);
console.log(`El costo de envio es de $${costoDeEnvio}`);
console.log("El valor final a abonar es de $" + resultadoFinal);