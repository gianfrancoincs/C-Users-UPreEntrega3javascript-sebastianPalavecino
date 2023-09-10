
document.addEventListener('DOMContentLoaded', () => {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total');
    const productos = [
        { nombre: 'Motorola Edge 30 Neo', precio: 180000 },
        { nombre: 'iPhone 14 Pro Max', precio: 915000 },
        { nombre: 'Samsung Fold 4', precio: 450000 },
        { nombre: 'Xiaomi Note 12 Pro Plus', precio: 200000 }
    ];
    let carrito = [];

    // Función para agregar un producto al carrito
    const agregarAlCarrito = (nombre, precio) => {
        carrito.push({ nombre, precio });
        actualizarCarrito();
    };

    // Función para actualizar el carrito y la lista de carrito en la página
    const actualizarCarrito = () => {
        listaCarrito.innerHTML = '';
        let total = 0;

        carrito.forEach(producto => {
            const listItem = document.createElement('li');
            listItem.textContent = `${producto.nombre} - $${producto.precio}`;
            listaCarrito.appendChild(listItem);
            total += producto.precio;
        });

        totalCarrito.textContent = total.toLocaleString(); // Formatear el total como número con separador de miles
    };

    // Manejar clic en los elementos de la lista de productos
    const listaProductos = document.querySelectorAll('#productos ul li');
    listaProductos.forEach(producto => {
        producto.addEventListener('click', () => {
            const nombre = producto.textContent.split(' - ')[0];
            const precio = parseInt(producto.textContent.split(' - $')[1].replace(',', ''));
            agregarAlCarrito(nombre, precio);
        });
    });
});
