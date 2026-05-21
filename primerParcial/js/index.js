
let hamburguesas = [
    {'id': 1, 'nombre': 'Armonia', 'precio': 12000, 'descripcion': 'Doble medallón de carne, queso cheddar, queso roquefort, huevo frito y pan con queso gratinado.', 'img': '/assets/hamburguesas/burga-1.jpg'},
    {'id': 2, 'nombre': 'Doble batalla', 'precio': 15000, 'descripcion': 'Doble medallón de carne, doble queso cheddar, doble beacon, cebolla caramelizada y pan con semillas de sésamo.', 'img': '/assets/hamburguesas/burga-2.jpg'},
    {'id': 3, 'nombre': 'Clásica Law', 'precio': 9000, 'descripcion': 'Medallón de carne, queso cheddar, panceta, cebolla crispy, salsa barbacoa, tomate, lechuga y pan con semillas de sésamo.', 'img': '/assets/hamburguesas/burga-3.jpg'},
    {'id': 4, 'nombre': 'Exotically', 'precio': 16500, 'descripcion': 'Medallón de carne, doble queso roquefort, rúcula, cebolla caramelizada, tomate, hongo portobello salteado y pan brioche con semillas.', 'img': '/assets/hamburguesas/burga-4.jpg'},
    {'id': 5, 'nombre': 'La Bestia', 'precio': 19000, 'descripcion': 'Quíntuple medallón de carne, 5 capas de cheddar, panceta en cada piso, cheddar en cada piso, queso especial derretido y pan con queso gratinado.', 'img': '/assets/hamburguesas/burga-5.jpg'},
    {'id': 6, 'nombre': 'Nuggy Chop', 'precio': 14500, 'descripcion': 'Doble medallón de carne, doble queso cheddar, doble panceta, cebolla caramelizada, Nuggets de muzzarella y pan con queso gratinado.', 'img': '/assets/hamburguesas/burga-6.jpg'},
]

let bebidas = [
     {'id': 7, 'nombre': 'Agua sin gas (1L)', 'precio': 2000, 'descripcion': 'Botella 1 litro agua Villavicencio sin gas.', 'img': '/assets/bebidas/agua-con-gas.png'},
    {'id': 8, 'nombre': 'Agua con gas (1L)', 'precio': 1500, 'descripcion': 'Botella 1 litro agua Saldan con gas.', 'img': '/assets/bebidas/agua-sin-gas.png'},
    {'id': 9, 'nombre': 'Aquarius Manzana (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de manzana.', 'img': '/assets/bebidas/aquarius-manzana.png'},
    {'id': 10, 'nombre': 'Aquarius Pomelo (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de pomelo.', 'img': '/assets/bebidas/aquarius-pomelo.png'},
    {'id': 11, 'nombre': 'Aquarius Naranja (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de naranja.', 'img': '/assets/bebidas/aquarius-naranja.png'},
    {'id': 12, 'nombre': 'Coca-Cola (1.5L)', 'precio': 4500, 'descripcion': 'Botella 1.5 litros de Coca-Cola.', 'img': '/assets/bebidas/coca-cola.png'},
    {'id': 13, 'nombre': 'Sprite (1.5L)', 'precio': 4500, 'descripcion': 'Botella 1.5 litros de Sprite.', 'img': '/assets/bebidas/sprite.png'},
]

let tragos = [
    {'id': 14, 'nombre': 'Campari', 'precio': 6000, 'descripcion': 'Vaso de Campari y jugo de naranja.', 'img': '/assets/tragos/campari.png'},
    {'id': 15, 'nombre': 'Fernet', 'precio': 7000, 'descripcion': 'Vaso de Coca-Cola y Fernet.', 'img': '/assets/tragos/fernet.png'},
    {'id': 16, 'nombre': 'Gancia', 'precio': 6000, 'descripcion': 'Vaso de Gancia y Sprite.', 'img': '/assets/tragos/gancia.png'},
    {'id': 17, 'nombre': 'Ron Havana Club', 'precio': 9000, 'descripcion': 'Vaso de Ron y Coca-Cola.', 'img': '/assets/tragos/ron.png'},
    {'id': 18, 'nombre': 'Daiquiri', 'precio': 7000, 'descripcion': 'Vaso de Daiquiri.', 'img': '/assets/tragos/daiquiri.png'},
]
let listado=[];


function sumarAlCarrito() {

}

function restarDelCarrito() {
    
}

function mostrarProductos(){
    let stringHamburguesas="";
    let zonaHamburguesas=document.getElementById("listado-hamburguesas");
    for(let i=0;i<hamburguesas.length;i++){
        stringHamburguesas=stringHamburguesas+`<li class="li-hamburguesa">
                    <img class="img-producto" src="${hamburguesas[i].img}" alt="${hamburguesas[i].nombre}">
                    <div>
                        <h3 class="nombre-producto">${hamburguesas[i].nombre}</h3>
                        <p class="precio-producto">${hamburguesas[i].precio}</p>
                        <p class="descripcion-producto">${hamburguesas[i].descripcion}</p>
                    </div>
                <!-- onclick() es un evento que se ejecuta cuando el usuario hace click sobre un elemento HTML. -->
                    <button class="btn-sumar-a-carrito" id="btn-sumar-${hamburguesas[i].nombre}" onclick="sumarAlCarrito()"> + </button>
                    <p id="cantidad-${hamburguesas[i].nombre}">0</p>
                    <button class="btn-restar-a-carrito" id="btn-restar-${hamburguesas[i].nombre}" onclick="restarDelCarrito()"> - </button>
                </li>`;
        
    }
    zonaHamburguesas.innerHTML=stringHamburguesas;

    let stringBebidas="";
    let zonaBebidas=document.getElementById("listado-bebidas");
    for(let i=0;i<bebidas.length;i++){
        stringBebidas=stringBebidas+`<li class="li-bebida">
                    <img class="img-producto" src="${bebidas[i].img}" alt="${bebidas[i].nombre}">
                    <div>
                        <h3 class="nombre-producto">${bebidas[i].nombre}</h3>
                        <p class="precio-producto">${bebidas[i].precio}</p>
                        <p class="descripcion-producto">${bebidas[i].descripcion}</p>
                    </div>
                <!-- onclick() es un evento que se ejecuta cuando el usuario hace click sobre un elemento HTML. -->
                    <button class="btn-sumar-a-carrito" id="btn-sumar-${bebidas[i].nombre}"onclick="sumarAlCarrito()"> + </button>
                    <p id="cantidad-${bebidas[i].nombre}">0</p>
                    <button class="btn-restar-a-carrito" id="btn-restar-${bebidas[i].nombre}" onclick="restarDelCarrito()"> - </button>
                </li>`;
        
    }
    zonaBebidas.innerHTML=stringBebidas;


    let stringTragos="";
    let zonaTragos=document.getElementById("listado-tragos");
    for(let i=0;i<tragos.length;i++){
        stringTragos=stringTragos+`<li class="li-tragos">
                    <img class="img-producto" src="${tragos[i].img}" alt="${tragos[i].nombre}">
                    <div>
                        <h3 class="nombre-producto">${tragos[i].nombre}</h3>
                        <p class="precio-producto">${tragos[i].precio}</p>
                        <p class="descripcion-producto">${tragos[i].descripcion}</p>
                    </div>
                <!-- onclick() es un evento que se ejecuta cuando el usuario hace click sobre un elemento HTML. -->
                    <button class="btn-sumar-a-carrito" id="btn-sumar-${tragos[i].nombre}" onclick="sumarAlCarrito()"> + </button>
                    <p id="cantidad-${tragos[i].nombre}">0</p>
                    <button class="btn-restar-a-carrito" id="btn-restar-${tragos[i].nombre}" onclick="restarDelCarrito()"> - </button>
                </li>`;
        
    }
    zonaTragos.innerHTML=stringTragos;
}

function crearEscuchadorHamburguesasSumar(nombre){
    let boton=document.getElementById("btn-sumar-"+nombre);
    boton.addEventListener("click",()=>{
        
        for (let i = 0; i < hamburguesas.length; i++) {
           if(hamburguesas[i].nombre===nombre){
                listado.push(structuredClone(hamburguesas[i]));
           }
        }
        console.log(listado);
        const listadoString=JSON.stringify(listado);
        localStorage.setItem("listadoPedidos",listadoString);
        agregarCantidad(nombre);
        const alerta=alert(`un/una ${nombre} fue agregado al carrito`);
    })
    
}


function crearEscuchadorBebidasSumar(nombre){
    let boton=document.getElementById("btn-sumar-"+nombre);
    boton.addEventListener("click",()=>{
        for (let i = 0; i < bebidas.length; i++) {
           if(bebidas[i].nombre===nombre){
                listado.push(structuredClone(bebidas[i]));
           }
        }
        console.log(listado);
        const listadoString=JSON.stringify(listado);
        localStorage.setItem("listadoPedidos",listadoString);
        agregarCantidad(nombre);
        const alerta=alert(`un/una ${nombre} fue agregado al carrito`);
    })
    
}


function crearEscuchadorTragosSumar(nombre){
    let boton=document.getElementById("btn-sumar-"+nombre);
    
    
    boton.addEventListener("click",()=>{
        for (let i = 0; i < tragos.length; i++) {
           if(tragos[i].nombre===nombre){
                listado.push(structuredClone(tragos[i]));
           }
        }
        console.log(listado);
        const listadoString=JSON.stringify(listado);
        localStorage.setItem("listadoPedidos",listadoString);
        agregarCantidad(nombre);
        const alerta=alert(`un/una ${nombre} fue agregado al carrito`);
    })
    
}


function crearEscuchadorRestar(nombre){
    let boton=document.getElementById("btn-restar-"+nombre);
    boton.addEventListener("click",()=>{
        for (let i = 0; i < listado.length; i++) {
           if(listado[i].nombre===nombre){
                listado.splice(i,1);
                break;
           }
        }
        

        const listadoString=JSON.stringify(listado);
        localStorage.setItem("listadoPedidos",listadoString);
        
        agregarCantidad(nombre);
        const alerta= alert(`un/una ${nombre} fue eliminado del carrito`);
        if(listado.length===0){
            const alertaVacio=alert(`carrito vacio`);

        }
    })
    
}








function agregarCantidad(nombre){
    const stringListadoExtraido=localStorage.getItem("listadoPedidos");
    const arrayListadoExtraido=JSON.parse(stringListadoExtraido);
    const zonaCantidad=document.getElementById("cantidad-"+nombre);
    let arrayProductos=arrayListadoExtraido.filter(producto=>producto.nombre===nombre);

    if(arrayProductos.length===0){
        const alerta=alert(`no hay mas ${nombre} en el carrito`);
    }
    zonaCantidad.textContent=arrayProductos.length;
  

}


function calcularCantidad(){}




mostrarProductos();



for(let i=0;i<hamburguesas.length;i++){
    crearEscuchadorHamburguesasSumar(hamburguesas[i].nombre);
    crearEscuchadorRestar(hamburguesas[i].nombre);
    

}


for(let i=0;i<bebidas.length;i++){
    crearEscuchadorBebidasSumar(bebidas[i].nombre);
    crearEscuchadorRestar(bebidas[i].nombre);

}


for(let i=0;i<tragos.length;i++){
    crearEscuchadorTragosSumar(tragos[i].nombre);
    crearEscuchadorRestar(tragos[i].nombre);

}


window.addEventListener("load",()=>{
    let carrito=document.getElementById("Carrito");
    let tabla="<table><tr><th>Nombre del producto</th><th>Cantidad</th><th>Precio unitario</th></tr>";
    const stringCarritoExtraido=localStorage.getItem("listadoPedidos");
    const arrayCarritoExtraido=JSON.parse(stringCarritoExtraido);
    let arrayMostrar=[];
    for(let i = 0; i < hamburguesas.length; i++){
        for (let j = 0; j < arrayCarritoExtraido.length; j++) {
            if(hamburguesas[i].nombre===arrayCarritoExtraido[j].nombre){
                arrayMostrar.push(hamburguesas[i]);
            }
            
        }
    }


    for(let i = 0; i < bebidas.length; i++){
        for (let j = 0; j < arrayCarritoExtraido.length; j++) {
            if(bebidas[i].nombre===arrayCarritoExtraido[j].nombre){
                arrayMostrar.push(bebidas[i]);
            }
            
        }
    }

      for(let i = 0; i < tragos.length; i++){
        for (let j = 0; j < arrayCarritoExtraido.length; j++) {
            if(tragos[i].nombre===arrayCarritoExtraido[j].nombre){
                arrayMostrar.push(tragos[i]);
            }
            
        }
    }


    const arrayCarritoMap=arrayMostrar.map(producto=>{
        let cantidad=getElementById("cantidad-"+producto.nombre);
        return `<tr><th>${producto.nombre}</th><th>${cantidad.textContent}</th><th>${producto.precio}</th><tr/>`

    });
    let arraycarritomapstring=arrayCarritoMap.join("");
    arraycarritomapstring=arraycarritomapstring+"</table>";
    carrito.innerHTML=arraycarritomapstring;



})


