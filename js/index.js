let carrito = [];
let productos = [];
let turnos = [];

let gestor;

const clave_carrito = "carrito"

document.addEventListener('DOMContentLoaded',() =>{

    carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    gestor = new GestionarProductos();
    
    gestor.iniciar();


})

function addCarrito(id){

    let prod = document.querySelector('#row_'+id);
    let producto = new Producto (id,
                                prod.querySelector("h3").textContent,
                                prod.querySelector(".precio").textContent.substring(1,6),
                                prod.querySelector("img").src,
                                )
    
gestor.addCart(producto);



}
