const marioBros = document.querySelector("#mario-bros");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  marioBros.style.left = scroll * 0.5 + "px";
  marioBros.style.top = scroll * -0.2 + "px";
});

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const contadorCarrito = document.getElementById("contador-carrito");
contadorCarrito.textContent = carrito.length;

fetch("./data/catalogo.json")
  .then((response) => response.json())
  .then((data) => {
    const catalogoContainer = document.querySelector(".contenedor-productos");

    data.forEach((producto) => {
      const productoHTML = document.createElement("div");
      productoHTML.classList.add("card-producto");
      productoHTML.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}<p>
        <p>$${producto.precio}</p>
        <button class="boton-violeta">Agregar al Carrito</button>
      `;

      const boton = productoHTML.querySelector(".boton-violeta");
      boton.addEventListener("click", () => {
        agregarAlCarrito(producto);
      });

      catalogoContainer.appendChild(productoHTML);
    });
  })
  .catch((error) => mostrarGloboNotificacion("Error cargando el catálogo", true));

function agregarAlCarrito(producto) {
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  contadorCarrito.textContent = carrito.length;
  mostrarGloboNotificacion(`Producto "${producto.nombre}" agregado al carrito.`);
}

function mostrarGloboNotificacion(mensaje, error = false) {
  const notificacion = document.createElement("div");
  notificacion.className = `globo-notificacion ${error ? "error" : ""}`;
  notificacion.textContent = mensaje;

  document.body.appendChild(notificacion);

  setTimeout(() => {
    notificacion.remove();
  }, 3000);
}
