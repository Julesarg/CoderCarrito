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
    };
    descuentoDeProducto(){
        return this.precio * descuentoGeneral
    };
    precioEfectivo(){
        return this.precio * precioEfectivo
    };
};

//fetch de listado de propiedades e indexacion a lista principal
const listadoPropiedades =[]
fetch(`../listadoPropiedadesProductos.json`)
.then((resultado) => resultado.json())  
.then ((listadoPropiedadesProductos) => {
        for (let i = 0; i < listadoPropiedadesProductos.length; i++) {
      listaProductos[i].propiedades = listadoPropiedadesProductos[i];
  };
});

//rascadores
const listaProductos = [];
listaProductos.push(
    new Rascador(0,"../images/productos/mian.png","Rumapets","Rascador","Mian Alfombra",4100, listadoPropiedades,"https://www.rumapets.com.ar/rascadores-chicos/rascador-mian",1));
listaProductos.push(
    new Rascador(1,"../images/productos/grecia.png","Rumapets","Rascador","Grecia",4560, listadoPropiedades,"https://www.rumapets.com.ar/rascadores-chicos/rascador-grecia",1));
listaProductos.push(
  new Rascador(2,"../images/productos/mianyute.png","Rumapets","Rascador","Mian Yute",5100, listadoPropiedades,"https://www.rumapets.com.ar/rascadores-chicos/rascador-mian-yute-sisal",1));
listaProductos.push(
    new Rascador(3,"../images/productos/ivy.png","Rumapets","Rascador","Ivy",8160, listadoPropiedades,"https://www.rumapets.com.ar/rascadores-chicos/rascador-ivy",1));
listaProductos.push(
    new Rascador(4,"../images/productos/atalaya.png","Rumapets","Rascador","Atalaya",8160, listadoPropiedades,"https://www.rumapets.com.ar/rascadores-medianos/rascador-atalaya",1));
listaProductos.push(
    new Rascador(5,"../images/productos/nuagealfombra.png","Rumapets","Rascador","Nuage Alfombra",11040, listadoPropiedades,"https://www.rumapets.com.ar/rascadores-medianos/rascador-nuage-alfombra",1));
listaProductos.push(
    new Rascador(6,"../images/productos/nuage.png","Rumapets","Rascador","Nuage Yute",14160, listadoPropiedades,"https://www.rumapets.com.ar/rascadores-medianos/rascador-nuage-yute",1));
listaProductos.push(
  new Rascador(7,"../images/productos/kamui.png","Rumapets","Rascador","Kamui",17400, listadoPropiedades,"https://www.rumapets.com.ar/rascadores-medianos/rascador-kamui",1));
listaProductos.push(
  new Rascador(8,"../images/productos/ruma.png","Rumapets","Rascador","Ruma",25200, listadoPropiedades,"https://www.rumapets.com.ar/rascadores-grandes/rascador-ruma",1));