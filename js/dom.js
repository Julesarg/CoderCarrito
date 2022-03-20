////////////////////////////DOM caja de buscador
const cajaBuscador = document.getElementById("cajaBuscador");

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

//////////////////////////DOM CAJA DE PRODUCTOS

const cajaGeneralProductos = document.getElementById("cajaProductos");

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

//clases
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


//contenido de nodos
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
}