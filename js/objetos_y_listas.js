let costoDeEnvio = 0;
let resultadoFinal = 0;
const descuentoGeneral = 0.1;
const precioEfectivo = 0.9;

//OBJETOS CONSTRUCTOR RASCADORES Y PROPIEDADES
class Rascador {
    constructor(id,img,marca,tipo,modelo,precio, propiedades, link, cantidad) {
      this.id = id;
      this.img = img;
      this.marca = marca;
      this.tipo = tipo;
      this.modelo = modelo;
      this.precio = parseFloat(precio);
      this.propiedades = propiedades;
      this.link = link;
      this.cantidad = parseInt(cantidad);
    }
    descuentoDeProducto(){
        return this.precio * descuentoGeneral
    }
    precioEfectivo(){
        return this.precio * precioEfectivo
    }
}
class PropiedadesRascador {
    constructor(alto, ancho, profundidad, peso, material_de_tubos, material_de_estructura){
        this.alto = alto;
        this.ancho = ancho;
        this.profundidad = profundidad;
        this.peso = peso;
        this.material_de_tubos = material_de_tubos;
        this.material_de_estructura = material_de_estructura;
    }
}

//ARRAYS DE RASCADORES Y PROPIEDADES
//propiedades
const listaPropiedadesProductos = [];

listaPropiedadesProductos.push(
    new PropiedadesRascador("55cm","40cm","40cm","6kg","alfombra","polar soft"));
listaPropiedadesProductos.push(
    new PropiedadesRascador("50cm","30cm","30cm","4.5kg","yute","polar soft"));
listaPropiedadesProductos.push(
    new PropiedadesRascador("55cm","40cm","40cm","8kg","yute","polar soft"));
    listaPropiedadesProductos.push(
    new PropiedadesRascador("60cm","44cm","44cm","10kg","yute","polar soft"));
listaPropiedadesProductos.push(
    new PropiedadesRascador("75cm","55cm","55cm","11kg","alfombra","polar soft"));
listaPropiedadesProductos.push(
    new PropiedadesRascador("100cm","60cm","55cm","15kg","alfombra","polar soft"));
listaPropiedadesProductos.push(
    new PropiedadesRascador("100cm","60cm","55cm","19kg","yute","polar soft"));
listaPropiedadesProductos.push(
    new PropiedadesRascador("90cm","50cm","55cm","16kg","yute","polar soft"));
listaPropiedadesProductos.push(
    new PropiedadesRascador("120cm","50cm","55cm","22kg","yute","polar soft"));

//rascadores
const listaProductos = [];

listaProductos.push(
    new Rascador(0,"../images/productos/mian.png","Rumapets","Rascador","Mian Alfombra",4100, listaPropiedadesProductos[0],"https://www.rumapets.com.ar/rascadores-chicos/rascador-mian",1));
listaProductos.push(
    new Rascador(1,"../images/productos/grecia.png","Rumapets","Rascador","Grecia",4560, listaPropiedadesProductos[1],"https://www.rumapets.com.ar/rascadores-chicos/rascador-grecia",1));
listaProductos.push(
  new Rascador(2,"../images/productos/mianyute.png","Rumapets","Rascador","Mian Yute",5100, listaPropiedadesProductos[2],"https://www.rumapets.com.ar/rascadores-chicos/rascador-mian-yute-sisal",1));
listaProductos.push(
    new Rascador(3,"../images/productos/ivy.png","Rumapets","Rascador","Ivy",8160, listaPropiedadesProductos[3],"https://www.rumapets.com.ar/rascadores-chicos/rascador-ivy",1));
listaProductos.push(
    new Rascador(4,"../images/productos/atalaya.png","Rumapets","Rascador","Atalaya",8160, listaPropiedadesProductos[4],"https://www.rumapets.com.ar/rascadores-medianos/rascador-atalaya",1));
listaProductos.push(
    new Rascador(5,"../images/productos/nuagealfombra.png","Rumapets","Rascador","Nuage Alfombra",11040, listaPropiedadesProductos[5],"https://www.rumapets.com.ar/rascadores-medianos/rascador-nuage-alfombra",1));
listaProductos.push(
    new Rascador(6,"../images/productos/nuage.png","Rumapets","Rascador","Nuage Yute",14160, listaPropiedadesProductos[6],"https://www.rumapets.com.ar/rascadores-medianos/rascador-nuage-yute",1));
listaProductos.push(
  new Rascador(7,"../images/productos/kamui.png","Rumapets","Rascador","Kamui",17400, listaPropiedadesProductos[7],"https://www.rumapets.com.ar/rascadores-medianos/rascador-kamui",1));
listaProductos.push(
  new Rascador(8,"../images/productos/ruma.png","Rumapets","Rascador","Ruma",25200, listaPropiedadesProductos[8],"https://www.rumapets.com.ar/rascadores-grandes/rascador-ruma",1));


let carrito = []

document.addEventListener(`DOMContentLoaded`, () => {
    if (localStorage.getItem(`carrito`)) {
      carrito = JSON.parse(localStorage.getItem(`carrito`));
      actualizarCarrito();
    }
  });