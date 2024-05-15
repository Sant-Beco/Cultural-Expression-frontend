function validarCorreo() {
  var email = document.getElementById('email').value.trim();
  if (email === '') {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: "Por favor, completa el campo 'nombre'",
          timer: 10000, // 10 segundos
      });
      return;
  }

  var correosPermitidos = ['santiag@gmail.com', 'sebas@gmail.com', 'kelly@gmail.com', 'frank@gmail.com', 'joseluis.@gmail.com'];
  var correoValido = false;

  for (var i = 0; i < correosPermitidos.length; i++) {
      if (correosPermitidos[i] === email) {
          correoValido = true;
          break;
      }
  }

  if (correoValido) {
      Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'El correo electrónico es válido!',
          timer: 10000, // 10 segundos
          timerProgressBar: true
      });
  } else {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El correo electrónico no es válido!',
          timer: 10000, // 10 segundos
          timerProgressBar: true
      });
  }
}