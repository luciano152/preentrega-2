// Lista de productos con precios
let productos = [
    { nombre: "reloj", precio: 5000 },
    { nombre: "buzo", precio: 2000 },
    { nombre: "remera", precio: 1000 },
    { nombre: "pantalon", precio: 3000 },
    { nombre: "zapatillas", precio: 7000 },
    { nombre: "lentes", precio: 4000 },
    { nombre: "campera", precio: 6000 }
];

// Función para iniciar el simulador
function iniciarSimulador() {
    // Ordenar productos del más barato al más caro
    productos.sort((a, b) => a.precio - b.precio);
    
    // Mostrar la lista de productos ordenados
    let listaProductos = "Lista de los productos:\n\n";

    productos.forEach((producto, index) => {
        listaProductos += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });

    alert(listaProductos);
    
    // Iniciar el proceso de compra
    realizarCompra();
}

// Función para realizar la compra
function realizarCompra() {
    let total = 0;
    let agregarOtro = true;

    // Bucle para añadir productos hasta que el usuario decida no agregar más
    while (agregarOtro) {
        // Mostrar productos y preguntar cuál desea comprar
        let productoSeleccionado = parseInt(prompt("¿Qué producto deseas comprar? (1-remera, 2-buzo, 3-pantalon, 4-lentes, 5-reloj, 6-campera, 7-zapatillas)"));
        
        // Validar la selección del producto
        if (productoSeleccionado >= 1 && productoSeleccionado <= 7) {
            let producto = productos[productoSeleccionado - 1];
            
            // Preguntar cuántas unidades quiere comprar
            let cantidad = parseInt(prompt(`¿Cuántas unidades de ${producto.nombre} quieres comprar?`));

            // Validar la cantidad
            if (cantidad > 0) {
                total += producto.precio * cantidad;
            } else {
                alert("Por favor, ingresa una cantidad válida.");
            }
        } else {
            alert("Por favor, selecciona un producto válido.");
        }

        // Preguntar si desea agregar otro producto
        agregarOtro = confirm("¿Deseas agregar otro producto?");
    }

    // Mostrar el total de la compra
    alert(`El total de la compra es: $${total}`);
}

// Ejecutar el simulador al cargar la página
iniciarSimulador();
