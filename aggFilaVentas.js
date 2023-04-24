function agregarFilasVentas(){
    // Buscar el teléfono en la tabla de ventas
    let filaVentaExistente = null;
    const ventasTabla = document.querySelector("#ventas-tbody");
    for (let i = 0; i < ventasTabla.rows.length; i++) {
      const fila = ventasTabla.rows[i];
      if (fila.cells[2].textContent === imei) {
        filaVentaExistente = fila;
        break;
      }
    }

    if (filaVentaExistente) {
      filaVenta.cells[6].textContent = cliente;
      filaVenta.cells[7].textContent = fechaVenta;
      filaVenta.cells[8].textContent = precioVenta;
      filaVenta.cells[9].textContent = detallesVenta;
    } else {
    // Agregar fila a la tabla de ventas
    const ventasTabla = document.querySelector("#ventas-tbody");
    const filaVentaNueva = ventasTabla.insertRow();
    filaVentaNueva.insertCell().textContent = modelo;
    filaVentaNueva.insertCell().textContent = nombre;
    filaVentaNueva.insertCell().textContent = imei;
    filaVentaNueva.insertCell().textContent = espacio;
    filaVentaNueva.insertCell().textContent = color;
    filaVentaNueva.insertCell().textContent = estado;
    filaVentaNueva.insertCell().textContent = cliente;
    filaVentaNueva.insertCell().textContent = fechaVenta;
    filaVentaNueva.insertCell().textContent = precioVenta;
    filaVentaNueva.insertCell().textContent = detallesVenta;
    }
}