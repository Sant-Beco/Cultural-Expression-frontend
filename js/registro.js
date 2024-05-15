function validarFormulario() {
    var nombres = document.getElementById('nombres').value.trim();
    var apellidos = document.getElementById('apellidos').value.trim();
    var fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var gmail = document.getElementById('gmail').value.trim();
    var alias = document.getElementById('alias').value.trim();
    var contraseña = document.getElementById('contraseña').value.trim();
    var verificarContraseña = document.getElementById('verificarContraseña').value.trim();

    // Verificar si algún campo está vacío
    if (nombres === '' || apellidos === '' || fechaNacimiento === '' || telefono === '' || gmail === '' || alias === '' || contraseña === '' || verificarContraseña === '') {
        swal("Error", "Todos los campos son obligatorios", "error");
        return; // Detener la ejecución si hay campos vacíos
    }

    // Verificar si la contraseña y la verificación de la contraseña son iguales
    if (contraseña !== verificarContraseña) {
        swal("Error", "La contraseña y la verificación de contraseña no coinciden", "error");
        return; // Detener la ejecución si las contraseñas no coinciden
    }

    // Si se pasa todas las validaciones, mostrar mensaje de éxito y borrar los campos
    swal("Éxito", "Formulario enviado correctamente", "success");
    borrarCampos();
}

function borrarCampos() {
    document.getElementById('nombres').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('fechaNacimiento').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('gmail').value = '';
    document.getElementById('alias').value = '';
    document.getElementById('contraseña').value = '';
    document.getElementById('verificarContraseña').value = '';
}









// function validarFormulario() {
//     let nombre = document.getElementById('nombres').value.trim();
//     let apellido = document.getElementById('apellido').value.trim();
//     let fechaNacimiento = document.getElementById('fecha-nacimiento').value.trim();
//     let telefono = document.getElementById('telefono').value.trim();
//     let email = document.getElementById('gmail').value.trim();
//     let alias = document.getElementById('alias').value.trim();
//     let contrasenia = document.getElementById('contrasenia').value.trim();
//     let verificarContrasenia = document.getElementById('input6').value.trim();

//     if (nombre === '' || apellido === '' || fechaNacimiento === '' || telefono === '' || email === '' || alias === '' || contrasenia === '' || verificarContrasenia === ''){
//         swal("Error", "Todos los campos son obligatorios", "error");
//     } else {
//         swal("Éxito", "Formulario enviado correctamente", "success");
//     }
// }

// function validarFormulario() {
//     let nombre = document.getElementById('nombres').value.trim();
//     let apellido = document.getElementById('apellido').value.trim();
//     let fechaNacimiento = document.getElementById('fecha-nacimiento').value.trim();
//     let telefono = document.getElementById('telefono').value.trim();
//     let email = document.getElementById('gmail').value.trim();
//     let alias = document.getElementById('alias').value.trim();
//     let contrasenia = document.getElementById('contrasenia').value.trim();
//     let verificarContrasenia = document.getElementById('input6').value.trim();

//     // Verificar si algún campo está vacío
//     if (nombre === '' || apellido === '' || fechaNacimiento === '' || telefono === '' || email === '' || alias === '' || contrasenia === '' || verificarContrasenia === ''){
//         swal("Error", "Todos los campos son obligatorios", "error");
//         return; // Detener la ejecución si hay campos vacíos
//     }

//     // Verificar si la contraseña y la confirmación de la contraseña coinciden
//     if (contraseña !== confirmarContraseña) {
//         swal("Error", "La contraseña y la confirmación de contraseña no coinciden", "error");
//         return; // Detener la ejecución si las contraseñas no coinciden
//     }

//     // Si se pasa todas las validaciones, mostrar mensaje de éxito
//     swal("Éxito", "Formulario enviado correctamente", "success");
// }






// (() => {
//   'use strict';

//   // Obtener el botón de "Registrar"
//   const botonRegistrar = document.getElementById('btn_ingresar');

//   // Agregar evento de clic al botón de "Registrar"
//   botonRegistrar.addEventListener('click', event => {
//       event.preventDefault();
//       // Obtener el formulario asociado al botón de "Registrar"
//       const formulario = botonRegistrar.closest('form');

//       // Verificar la validez de cada campo
//       let nombreValido = formulario.querySelector('#nombreinput').value.trim() !== '';
//       let apellidosValida = formulario.querySelector('#apellidosInput').value.trim() !== '';
//       let fechaValida = formulario.querySelector('#fechaNacimiento').value.trim() !== '';
//       let telefonoValida = formulario.querySelector('#telefonoInput').value.trim() !== '';
//       let gmailValida = formulario.querySelector('#gmailInput').value.trim() !== '';
//       let aliasValida = formulario.querySelector('#aliasInput').value.trim() !== '';
//       let contraseniaValida = formulario.querySelector('#ContraseñaInput').value.trim() !== '';
//       let verificarValida = formulario.querySelector('#verificarInput').value.trim() !== '';


//       // Verificar si ningún campo está lleno
//        // Verificar si ningún campo está lleno
//        if (!nombreValido && !apellidosValida && !fechaValida && !telefonoValida && !gmailValida && !aliasValida && !contraseniaValida && !verificarValida) {
//           event.preventDefault();
//           event.stopPropagation();
//           Swal.fire({
//               title: "Error",
//               text: "Debes llenar los campos del formulario.",
//               icon: "error",
//               button: "OK",

//           });
//           return;
//       }

//       // Verificar cada campo individualmente
//       if (!nombreValido) {
//           event.preventDefault();
//           event.stopPropagation();
//           formulario.querySelector('#nombreinput').classList.add('is-invalid');
//           Swal.fire({
//               title: "Error",
//               text: "Por favor, completa el campo 'id_categoria'.",
//               icon: "error",
//               button: "OK",
//           });
//           return;
//       }

//       if (!apellidosValida) {
//           event.preventDefault();
//           event.stopPropagation();  
//           formulario.querySelector('#apellidosInput').classList.add('is-invalid');
//           Swal.fire({
//               title: "Error",
//               text: "Por favor, completa el campo nombre categoria'.",
//               icon: "error",
//               button: "OK",
//           });
//           return;
//       }

//       if (!fechaValida) {
//         event.preventDefault();
//         event.stopPropagation();  
//         formulario.querySelector('#fechaNacimiento').classList.add('is-invalid');
//         Swal.fire({
//             title: "Error",
//             text: "Por favor, completa el campo nombre categoria'.",
//             icon: "error",
//             button: "OK",
//         });
//         return;
//     }

//     if (!telefonoValida) {
//         event.preventDefault();
//         event.stopPropagation();  
//         formulario.querySelector('#telefonoInput').classList.add('is-invalid');
//         Swal.fire({
//             title: "Error",
//             text: "Por favor, completa el campo nombre categoria'.",
//             icon: "error",
//             button: "OK",
//         });
//         return;
//     }

//     if (!gmailValida) {
//         event.preventDefault();
//         event.stopPropagation();  
//         formulario.querySelector('#gmailInput').classList.add('is-invalid');
//         Swal.fire({
//             title: "Error",
//             text: "Por favor, completa el campo nombre categoria'.",
//             icon: "error",
//             button: "OK",
//         });
//         return;
//     }

//     if (!aliasValida) {
//         event.preventDefault();
//         event.stopPropagation();  
//         formulario.querySelector('#gmailInput').classList.add('is-invalid');
//         Swal.fire({
//             title: "Error",
//             text: "Por favor, completa el campo nombre categoria'.",
//             icon: "error",
//             button: "OK",
//         });
//         return;
//     }

    





//       // Agregar clase de validación al formulario
//       formulario.classList.add('was-validated');

//       // Mostrar mensaje de éxito
//       Swal.fire({
//           title: "Éxito",
//           text: "Registro exitoso",
//           icon: "success",
//           button: "OK",

//       });
//       formulario.reset();
//       inputs.forEach(input => {
//           input.classList.remove('is-invalid');
//       });
//       formulario.classList.remove('was-validated');
//   });
// })();




// //validar por caracteres especiales 
// const formulario = document.getElementById('formulario');

// const inputs= document.querySelectorAll('#formulario input')


// const campos = {
//   alias: false,
//   contraseña : false
// }

// const validarFormulario = (e)=>{
//   switch (e.target.name){
//       case 'alias':
//           validarCampo(expresiones.alias, e.target, 'alias')
      
//           break
//       case 'contraseña':
//           validarCampo(expresiones.contraseña, e.target, 'contraseña')
//           break
          
//   }
// }

// //funcion para tdoos los campos
// const validarCampo = (expresion , input , campo) => {
//   if(expresion.test(input.value)){
//       document.querySelector(`#grupo_${campo} .error`).classList.remove('error-activo');
//       campos[campo] = true;
//   } else{
//       document.querySelector(`#grupo_${campo} .error`).classList.add('error-activo');
//       campos[campo] = false;

//   }
// }

// inputs.forEach((input)=>{
//   input.addEventListener('keyup' ,validarFormulario);
//   input.addEventListener('blur' ,validarFormulario);
// })

// formulario.addEventListener('submit', (e) => {
//   e.preventDefault();

//   if( campos.alias && campos.contraseña){
//       formulario.reset();
//   }
// });
