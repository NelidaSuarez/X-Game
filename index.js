const marioBros = document.querySelector("#mario-bros");


window.addEventListener("scroll", ()=>{
    let scroll = window.scrollY
    marioBros.style.left = scroll * 0.5  + "px";
    marioBros.style.top = scroll * -0.2  + "px";
});

fetch('./data/catalogo.json')
    .then(response => response.json())
    .then(data => {
        const catalogoContainer = document.querySelector('.contenedor-productos');
        data.forEach(producto => {
            catalogoContainer.innerHTML += `
                <div class="card-producto">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.precio}</p>
                    <button class="boton-violeta">${producto.boton}</button>
                </div>`;
        });
    })
    .catch(error => console.error('Error cargando el catálogo:', error));


    