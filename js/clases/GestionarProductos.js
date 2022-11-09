class GestionarProductos{
    

    iniciar(){

        productos = [

        {
            "id" : 1 ,
            "nombre":"Aceite para Barba",
            "descripcion":"Contiene 30ml de aceite de coco",
            "precio":1000,
            "stock":100,
            "img":"coco.jpg",
            "destacado": 1,
            
        },
        {
            "id" : 2 ,
            "nombre":"Gel",
            "descripcion":"Gel a base de agua, ultra resistente",
            "precio":500,
            "stock":100,
            "img":"gel.jpg",
            "destacado": 0,
        },
        {
            "id" : 3 ,
            "nombre":"Mascara Matizadora",
            "descripcion":"Corrige tonos amarillos y reafirma tonos grises y blancos",
            "precio":1200,
            "stock":50,
            "img":"mascara.jpg",
            "destacado": 0,
        },
        {
            "id" : 4 ,
            "nombre":"Shampoo Matizador",
            "descripcion":" Corrije tonos amarillos y reafirma grises",
            "precio":1500,
            "stock":100,
            "img":"shampoo.jpg",
            "destacado": 0,
        },
        {
            "id" : 5 ,
            "nombre":"Polvo Texturizador",
            "descripcion":"Fijacion duradera, efecto mate, suave y natural",
            "precio":1300,
            "stock":100,
            "img":"polvo.jpg",
            "destacado": 0,
        },
        {
            "id" : 6 ,
            "nombre":"Pomada Mate",
            "descripcion":"Efecto fijador mate",
            "precio":700,
            "stock":200,
            "img":"pomada.jpg",
            "destacado": 0,
        }
        ]


        let productosDestacados = productos.filter(prod => prod.destacado == 1);
        
        this.cargarProductos(productosDestacados);
    }



    cargarProductos(productos){

        const divProductos = document.querySelector("#productos")
        divProductos.innerHTML = "";

        if(productos.length === 0){
            
            this.mostrarHeader("No hay productos destacados")

        }else{

            productos.forEach(producto => {     

                let prod  = document.createElement ('div');
                prod.classList.add ('tienda')
                prod.setAttribute('id','row_'+producto.id);

                prod.innerHTML = `
                                <div class="tienda__producto">
                                    <img src="../images/productos/${producto.img}"></img>
                                    <h3 class="text-xs">${producto.nombre}</h3>
                                    <p>${producto.descripcion.substring(0,120)}</p>
                                    <p>$${producto.precio}</p>
                                    <a href="javascript:addCarrito(${producto.id})" class="boton" >AGREGAR AL CARRITO</a>
                                </div>
                                `     
               
        
                divProductos.appendChild(prod)

            });

        }
        
    }


    addCart(producto){

        carrito.push(producto);
        alert("Se agrego el producto");

        this.actualizarCarrito();

    }        


        actualizarCarrito(){

            this.actualizarContador();
            
            this.mostrarCarrito();

            this.guardarCarrito();


        }

        actualizarContador(){

            let totalProductos = this.contarProductos();
            let countCarrito = document.querySelector('#badgeCarrito');
            countCarrito.innerHTML = totalProductos;
        }

        contarProductos(){

            let contarProductos= 0;
            
            carrito.forEach((producto) =>{

                contarProductos = contarProductos +parseInt(producto.cantidad);
            })

            return contarProductos
        }

        mostrarCarrito(){

            let detalleCarrito = document.querySelector("#idCarrito");
            detalleCarrito.innerHTML = "";

            let total = 0 ;
            
            carrito.forEach((producto) =>{

                const row = document.createElement("div");
                row.classList.add("row");
                

            })
        }



    
    //mensaje generico
    mostrarHeader(msj){

        const headerProductos = document.querySelector("headerProductos");
        headerProductos.innerHTML = msj;
    }

}