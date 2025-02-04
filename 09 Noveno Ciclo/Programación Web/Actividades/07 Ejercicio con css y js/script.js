function agregarAlCarrito(productId, nombreProducto, productDescription) {
    const listId = "selected-" + productId;
    if (!document.getElementById(listId)) {
        const carrito = document.getElementById("carrito");

        const nuevoItem = document.createElement("div");
        nuevoItem.className = "selected-item";
        nuevoItem.id = listId;

        const header = document.createElement("h3");
        header.textContent = nombreProducto;

        const description = document.createElement("p");
        description.textContent = productDescription;

        const cancelButton = document.createElement("button");
        cancelButton.id = "cancel-" + listId;
        cancelButton.className = "cancel_button";
        cancelButton.textContent = "Cancelar";
        cancelButton.onclick = function () {
            const carritoItem = document.getElementById(listId);
            if (carritoItem) {
                carritoItem.remove();
            }
        };

        nuevoItem.appendChild(header);
        nuevoItem.appendChild(description);
        nuevoItem.appendChild(cancelButton);

        carrito.appendChild(nuevoItem);
    }
}

