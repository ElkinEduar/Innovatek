// Lista de productos
const productos = [
  { id: 1, name: "Procesador Intel Core i5", price: "850,000", description: "4 núcleos, 8 hilos, 3.6 GHz de velocidad.", image: "IMAGES/Product1.jpg" },
  { id: 2, name: "Memoria RAM 8GB DDR4", price: "150,000", description: "Velocidad de 3200 MHz, ideal para multitarea.", image: "IMAGES/Product2.jpg" },
  { id: 3, name: "Disco Duro 1TB", price: "180,000", description: "Suficiente espacio para almacenar tus archivos.", image: "IMAGES/Product3.jpg" },
  { id: 4, name: "Unidad SSD 240GB", price: "130,000", description: "Velocidad y rendimiento en almacenamiento.", image: "IMAGES/Product4.jpg" },
  { id: 5, name: "Tarjeta Gráfica GTX 1660", price: "1,200,000", description: "Gráficos de alta calidad para juegos y diseño.", image: "IMAGES/Product5.jpg" },
  { id: 6, name: "Fuente de Poder 600W", price: "200,000", description: "Suministra energía estable para tu equipo.", image: "IMAGES/Product6.jpg" },
  { id: 7, name: "Placa Madre ATX", price: "350,000", description: "Compatibilidad con Intel y AMD, para expandir tu sistema.", image: "IMAGES/Product7.jpg" },
  { id: 8, name: "Monitor Full HD 24 pulgadas", price: "600,000", description: "Pantalla de alta definición para un mejor rendimiento visual.", image: "IMAGES/Product8.jpg" },
  { id: 9, name: "Teclado Mecánico RGB", price: "180,000", description: "Teclado retroiluminado para una experiencia de juego completa.", image: "IMAGES/Product9.jpg" },
  { id: 10, name: "Mouse Óptico Gamer", price: "80,000", description: "Alta precisión y diseño ergonómico.", image: "IMAGES/Product10.jpg" },
  { id: 11, name: "Caja de Computadora ATX", price: "220,000", description: "Caja espaciosa y con buen flujo de aire.", image: "IMAGES/Product11.jpg" },
  { id: 12, name: "Parlantes de Escritorio", price: "90,000", description: "Sonido de alta calidad en un diseño compacto.", image: "IMAGES/Product12.jpg" },
  { id: 13, name: "Cámara Web Full HD", price: "130,000", description: "Cámara para videollamadas y streaming.", image: "IMAGES/Product13.jpg" },
  { id: 14, name: "Micrófono Condensador", price: "150,000", description: "Para grabaciones de calidad y streaming.", image: "IMAGES/Product14.jpg" },
  { id: 15, name: "Disipador de CPU", price: "100,000", description: "Disipa el calor eficientemente de tu procesador.", image: "IMAGES/Product15.jpg" },
  { id: 16, name: "Adaptador Wi-Fi USB", price: "40,000", description: "Conéctate a internet sin cables.", image: "IMAGES/Product16.jpg" },
  { id: 17, name: "Memoria USB 64GB", price: "50,000", description: "Almacenamiento portátil y rápido.", image: "IMAGES/Product17.jpg" },
  { id: 18, name: "Tarjeta de Sonido Externa", price: "60,000", description: "Mejora el audio de tu computadora.", image: "IMAGES/Product18.jpg" },
  { id: 19, name: "Controlador para Juegos", price: "90,000", description: "Compatible con PC y consolas.", image: "IMAGES/Product19.jpg" },
  { id: 20, name: "Silla Gamer", price: "550,000", description: "Comodidad y soporte ergonómico para largas sesiones.", image: "IMAGES/Product20.jpg" }
];


// Carrito
let carrito = [];

// Renderiza los productos en la página
function renderizarProductos() {
    const productosContainer = document.querySelector("#productos .row");
    productos.forEach(producto => {
        const productoHTML = `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card">
                    <img src="${producto.image}" class="card-img-top" alt="${producto.name}" />
                    <div class="card-body">
                        <h5 class="card-title">${producto.name}</h5>
                        <p class="card-text">${producto.description}</p>
                        <p class="card-text"><strong>$${producto.price.toLocaleString()}</strong></p>
                        <button class="btn btn-success" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        `;
        productosContainer.innerHTML += productoHTML;
    });
}

// Actualizar carrito (mostrar contenido)
function actualizarCarrito() {
  const carritoContainer = document.querySelector("#carrito");
  carritoContainer.innerHTML = ""; // Limpia el carrito antes de volver a agregarlo

  carrito.forEach(producto => {
      const carritoHTML = `
          <li class="list-group-item d-flex justify-content-between align-items-center">
              ${producto.name} - $${producto.price.toLocaleString()}
              <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
          </li>
      `;
      carritoContainer.innerHTML += carritoHTML;
  });
}

// Actualizar el contador del carrito
function actualizarContadorCarrito() {
  const carritoCount = document.querySelector("#carrito-count");
  carritoCount.textContent = carrito.length;  // Actualiza el contador con la cantidad de productos en el carrito
}



// Agregar producto al carrito
function agregarAlCarrito(productId) {
  const producto = productos.find(p => p.id === productId);
  carrito.push(producto); // Agrega el producto al carrito
  alert(`${producto.name} se agregó al carrito.`);
  actualizarCarrito();  // Actualiza la lista de productos en el carrito
  actualizarContadorCarrito();  // Actualiza el contador del carrito
}

// Eliminar producto del carrito
function eliminarDelCarrito(productId) {
  carrito = carrito.filter(producto => producto.id !== productId); // Elimina el producto del carrito
  actualizarCarrito();
  actualizarContadorCarrito();  // Actualiza el contador del carrito
}

// Actualizar carrito (mostrar contenido)
function actualizarCarrito() {
    const carritoContainer = document.querySelector("#carrito");
    carritoContainer.innerHTML = "";

    carrito.forEach(producto => {
        const carritoHTML = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${producto.name} - $${producto.price.toLocaleString()}
                <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
            </li>
        `;
        carritoContainer.innerHTML += carritoHTML;
    });
}


// Inicializa la página
renderizarProductos();

