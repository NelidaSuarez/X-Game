const carritoItemsContainer = document.getElementById("carrito-items");
const totalCompraElement = document.getElementById("total-compra");
const vaciarCarritoButton = document.getElementById("vaciar-carrito");
const finalizarCompraButton = document.getElementById("finalizar-compra");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function renderizarCarrito() {
    carritoItemsContainer.innerHTML = "";
    let total = 0;

    if (carrito.length === 0) {
        carritoItemsContainer.innerHTML = "<p>Tu carrito está vacío.</p>";
        totalCompraElement.textContent = "Total: $0";
        return;
    }

    carrito.forEach((producto, index) => {
        const itemHTML = document.createElement("div");
        itemHTML.classList.add("carrito-item", "d-flex", "justify-content-between", "align-items-center", "mb-3");
        itemHTML.innerHTML = `
            <div >
                <h5>${producto.nombre}</h5>
                <p>$${producto.precio}</p>
            </div>
            <div>
            <button class="btn boton-violeta btn-sm" data-index="${index}">Eliminar</button>
            </div>
        `;

        //  eliminar producto
        const eliminarButton = itemHTML.querySelector("button");
        eliminarButton.addEventListener("click", () => eliminarProducto(index));

        carritoItemsContainer.appendChild(itemHTML);
        total += producto.precio;
    });

    totalCompraElement.textContent = `Total: $${total}`;
}


function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito();
}


vaciarCarritoButton.addEventListener("click", () => {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito();
});


finalizarCompraButton.addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de finalizar la compra.");
        return;
    }

    alert("¡Gracias por tu compra! El carrito se vaciará ahora.");
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito();
});


renderizarCarrito();
