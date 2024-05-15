function validarFormulario() {
  var nombreProducto = document.getElementById('nombre-producto').value;
  var descripcion = document.getElementById('descripcion').value;
  var precio = document.getElementById('precio').value;
  var categoria = document.getElementById('categoria').value;

  if (nombreProducto === '' || descripcion === '' || precio === '' || categoria === '') {
      swal("Error", "Por favor, complete todos los campos.", "error");
  } else {
      // Aquí iría tu lógica para procesar el formulario (enviarlo, almacenarlo, etc.)
      swal("Éxito", "El producto ha sido publicado correctamente.", "success")
          .then(() => {
              // Limpiar los campos del formulario
              document.getElementById('formulario').reset();
          });
  }
}