document.getElementById('total').textContent = `Total a pagar: $${totalApagar}`;


let totalProductos = 3;  // Total de productos a comprar
for (let index = 1; index <= totalProductos; index++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));
    const subtotal = cantidad * precio;
    totalApagar += subtotal;
}
