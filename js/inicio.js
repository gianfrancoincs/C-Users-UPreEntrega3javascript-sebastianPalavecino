

const userLoguin = document.getElementById("userLoguin")
const divProductos = document.getElementById("productos")

let productosDisponibles = JSON.parse(localStorage.getItem("productos"))

document.addEventListener("DOMContentLoaded"), () => {
    generarCardsProductos.forEach(productosDisponibles)
}

const generarCardsProductos = (productos) => {

    productos.forEach(producto => {
        let card = document.createElement("div");
        card.className = "producto";
        card.innerHTML = `
        <div class="card">
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.categoria}</p>
          <p class="card-text">${producto.precio}</p>
          <button id="Comprar${producto.id}" class="btn btn-warning">Comprar</button>
        </div>
      </div>`;
      divProductos.appendChild(card);

      const btnComprar = document.getElementById(`comprar${producto.id}`)
      btnComprar.addEventListener("click",() => console.log("funciona"))
    });
};