function validarFormulario() {
  var titulo = document.getElementById("titulo-convo").value;
  var descripcion = document.getElementById("descripcion").value;
  var fechaInicio = document.getElementById("fecha-inicio").value;
  var fechaFin = document.getElementById("fecha-fin").value;
  var lugar = document.getElementById("lugar").value;
  var categoria = document.getElementById("categoria").value;

  if (titulo === "" || descripcion === "" || fechaInicio === "" || fechaFin === "" || lugar === "" || categoria === "") {
      swal("Error", "Por favor, complete todos los campos.", "error");
  } else {
      swal("Éxito", "La publicación ha sido realizada con éxito.", "success").then((value) => {
          // Borrar los campos después de mostrar el mensaje de éxito
          document.getElementById("formulario").reset();
      });
  }
}
