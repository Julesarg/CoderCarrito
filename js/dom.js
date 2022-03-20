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
    alert('producto agregado al carrito'); //ver
  }
}



const cajaCarritoGeneral = document.getElementById('cajaCarritoGeneral');
const cajaCarritoProducto = document.createElement(`div`);
cajaCarritoProducto.className = `cajaCarritoProducto`;

const mostrarCarrito = () => {  
  for (const producto of carrito){
    const imagenProducto = `<img src="${producto.img}">`;
    const nombreProducto = `<p>Modelo: ${producto.modelo}</p>`;
    const precioProducto = `<p>Precio: $${producto.precio}</p>`;
    cajaCarritoProducto.innerHTML += imagenProducto;
    cajaCarritoProducto.innerHTML += nombreProducto;
    cajaCarritoProducto.innerHTML += precioProducto;
  }
  const totalCompra = carrito.reduce((accumulador, producto) => accumulador + producto.precio, 0);
  cajaCarritoProducto.append(`TOTAL: $${totalCompra}`);
  cajaCarritoGeneral.append(cajaCarritoProducto);
}

  botonCarrito.onclick = mostrarCarrito;