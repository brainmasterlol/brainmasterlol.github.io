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
      const modelo = fila.cells[0].textContent;
      const nombre = fila.cells[1].textContent;
      const imei = fila.cells[2].textContent;
      const espacio = fila.cells[3].textContent;
      const color = fila.cells[4].textContent;
      const estado = fila.cells[5].textContent;
    
      const ventaForm = document.createElement("form");
      ventaForm.id = "venta-form";
    
      const clienteLabel = document.createElement("label");
      clienteLabel.for = "cliente";
      clienteLabel.textContent = "Cliente:";
      ventaForm.appendChild(clienteLabel);
    
      const clienteInput = document.createElement("input");
      clienteInput.type = "text";
      clienteInput.id = "cliente";
      clienteInput.name = "cliente";
      clienteInput.required = true;
      ventaForm.appendChild(clienteInput);
    
      const fechaLabel = document.createElement("label");
      fechaLabel.for = "fecha-venta";
      fechaLabel.textContent = "Fecha de venta:";
      ventaForm.appendChild(fechaLabel);
    
      const fechaInput = document.createElement("input");
      fechaInput.type = "date";
      fechaInput.id = "fecha-venta";
      fechaInput.name = "fecha-venta";
      fechaInput.required = true;
      ventaForm.appendChild(fechaInput);
    
      const precioLabel = document.createElement("label");
      precioLabel.for = "precio-venta";
      precioLabel.textContent = "Precio de venta:";
      ventaForm.appendChild(precioLabel);
    
      const precioInput = document.createElement("input");
      precioInput.type = "number";
      precioInput.id = "precio-venta";
      precioInput.name = "precio-venta";
      precioInput.required = true;
      ventaForm.appendChild(precioInput);
    
      const detallesLabel = document.createElement("label");
      detallesLabel.for = "detalles-venta";
      detallesLabel.textContent = "Detalles de venta:";
      ventaForm.appendChild(detallesLabel);
    
      const detallesInput = document.createElement("textarea");
      detallesInput.id = "detalles-venta";
      detallesInput.name = "detalles-venta";
      ventaForm.appendChild(detallesInput);
    
      const submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.textContent = "Aceptar";
      ventaForm.appendChild(submitButton);
    
      fila.cells[10].textContent = "Vendido";
      fila.cells[10].innerHTML = "";
      fila.cells[10].appendChild(document.createTextNode(""));
    
      acciones.appendChild(ventaForm);
      
      ventaForm.addEventListener("submit", function(event) {
        event.preventDefault();
    
        const cliente = clienteInput.value;
        const fechaVenta = fechaInput.value;
        const precioVenta = precioInput.value;
        const detallesVenta = detallesInput.value;
    
        const ventasTabla = document.querySelector("#ventas-tbody");
        const nuevaFila = ventasTabla.insertRow();
        nuevaFila.insertCell().textContent = modelo;
        nuevaFila.insertCell().textContent = nombre;
        nuevaFila.insertCell().textContent = imei;
        nuevaFila.insertCell().textContent = espacio;
        nuevaFila.insertCell().textContent = color;
        nuevaFila.insertCell().textContent = estado;
        nuevaFila.insertCell().textContent = cliente;
        nuevaFila.insertCell().textContent = fechaVenta;
        nuevaFila.insertCell().textContent = precioVenta;
        nuevaFila.insertCell().textContent = detallesVenta;
          const deshacerBoton = document.createElement("button");
          deshacerBoton.textContent = "Deshacer";
          deshacerBoton.classList.add("deshacer-btn");
          const accionesCelda = nuevaFila.insertCell();
          accionesCelda.appendChild(deshacerBoton);

          deshacerBoton.addEventListener("click", function() {
          // Cambiar disponibilidad del teléfono a "Disponible"
          fila.cells[10].textContent = "Disponible";

          // Reactivar el botón "Vender"
          venderBoton.disabled = false;

          // Eliminar el teléfono de la tabla de ventas
          nuevaFila.parentNode.parentNode.deleteRow(nuevaFila.rowIndex);
          });
          fila.cells[10].textContent = "Vendido";
          venderBoton.disabled = true;
          ventaForm.reset();
          ventaForm.style.display = "none";

    });
    
  });
    
  }
  
  // Manejador de evento para agregar teléfono
  document.querySelector("#agregar-telefono").addEventListener("click", function (event) {
    event.preventDefault();
    agregarTelefono();
    limpiarFormInventario();
  });

  

  