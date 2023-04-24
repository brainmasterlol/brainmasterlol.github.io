// Agregar teléfono a la tabla de inventario
function agregarTelefono() {
    const modelo = document.querySelector("#modelo").value;
    const nombre = document.querySelector("#nombre").value;
    const imei = document.querySelector("#imei").value;
    const espacio = document.querySelector("#espacio").value;
    const color = document.querySelector("#color").value;
    const estado = document.querySelector("#estado").value;
    const proveedor = document.querySelector("#proveedor").value;
    const fecha = document.querySelector("#fecha").value;
    const precio = document.querySelector("#precio").value;
    const detalles = document.querySelector("#detalles").value;


    // Agregar fila a la tabla de inventario
    const inventarioTabla = document.querySelector("#inventario-tbody");
    const fila = inventarioTabla.insertRow();
  
    fila.insertCell().textContent = modelo;
    fila.insertCell().textContent = nombre;
    fila.insertCell().textContent = imei;
    fila.insertCell().textContent = espacio;
    fila.insertCell().textContent = color;
    fila.insertCell().textContent = estado;
    fila.insertCell().textContent = proveedor;
    fila.insertCell().textContent = fecha;
    fila.insertCell().textContent = precio;
    fila.insertCell().textContent = detalles;
    fila.insertCell().textContent = "Disponible";

    const acciones = fila.insertCell();
    const venderBoton = document.createElement("button");
    venderBoton.textContent = "Vender";
    venderBoton.classList.add("vender-btn");
    acciones.appendChild(venderBoton);  


    venderBoton.addEventListener("click", function() {
        const venderForm = document.querySelector("#vender-form");
        venderForm.style.display = "block"; 
        const form = venderForm.querySelector("form");
        form.addEventListener("submit", function(event) {
            event.preventDefault();
    
            const cliente = document.querySelector("#cliente").value;
            const fechaVenta = document.querySelector("#fecha-venta").value;
            const precioVenta = document.querySelector("#precio-venta").value;
            const detallesVenta = document.querySelector("#detalles-venta").value;

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
    const deshacerBoton = document.createElement("button");
            deshacerBoton.textContent = "Deshacer";
            deshacerBoton.classList.add("deshacer-btn");
            const accionesCelda = filaVentaNueva.insertCell();
            accionesCelda.appendChild(deshacerBoton);

            deshacerBoton.addEventListener("click", function() {
            const inventarioTabla = document.querySelector("#inventario-tbody");
            // Eliminar el teléfono de la tabla de ventas
            ventasTabla.deleteRow(filaVentaNueva.rowIndex);

            // Agregar el teléfono a la tabla de inventario
            const filaInventario = inventarioTabla.insertRow();
            filaInventario.insertCell().textContent = modelo;
            filaInventario.insertCell().textContent = nombre;
            filaInventario.insertCell().textContent = imei;
            filaInventario.insertCell().textContent = espacio;
            filaInventario.insertCell().textContent = color;
            filaInventario.insertCell().textContent = estado;
            filaInventario.insertCell().textContent = proveedor;
            filaInventario.insertCell().textContent = fecha;
            filaInventario.insertCell().textContent = precio;
            filaInventario.insertCell().textContent = detalles;
            filaInventario.insertCell().textContent = "Disponible";

            // Reactivar el botón de vender
            venderBoton.disabled = false;
          });
    }
            fila.cells[10].textContent = "Vendido";
            venderBoton.disabled = true;
            document.querySelector("#vender-form").style.display = "none";
            limpiarFormVentas();
        });
    });
    limpiarFormInventario();
  }
  
  // Manejador de evento para agregar teléfono
  document.querySelector("#agregar-telefono").addEventListener("click", function (event) {
    event.preventDefault();
    agregarTelefono();
  });

  

  