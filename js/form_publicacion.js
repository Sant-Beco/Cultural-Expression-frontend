(() => {
  'use strict';

  // Obtener el botón de "Registrar"
  const botonRegistrar = document.getElementById('btn_ingresar');

  // Agregar evento de clic al botón de "Registrar"
  botonRegistrar.addEventListener('click', event => {
      event.preventDefault();
      // Obtener el formulario asociado al botón de "Registrar"
      const formulario = botonRegistrar.closest('form');

      // Verificar la validez de cada campo
      let aliasValido = formulario.querySelector('#Aliasinput').value.trim() !== '';
      let contraseñaValida = formulario.querySelector('#Contraseñainput').value.trim() !== '';

      // Verificar si ningún campo está lleno
       // Verificar si ningún campo está lleno
       if (!aliasValido && !contraseñaValida) {
          event.preventDefault();
          event.stopPropagation();
          Swal.fire({
              title: "Error",
              text: "Debes llenar los campos del formulario.",
              icon: "error",
              button: "OK",

          });
          return;
      }

      // Verificar cada campo individualmente
      if (!aliasValido) {
          event.preventDefault();
          event.stopPropagation();
          formulario.querySelector('#Aliasinput').classList.add('is-invalid');
          Swal.fire({
              title: "Error",
              text: "Por favor, completa el campo 'titulo'.",
              icon: "error",
              button: "OK",
          });
          return;
      }

      if (!contraseñaValida) {
          event.preventDefault();
          event.stopPropagation();  
          formulario.querySelector('#Contraseñainput').classList.add('is-invalid');
          Swal.fire({
              title: "Error",
              text: "Por favor, completa el campo 'descripcion''.",
              icon: "error",
              button: "OK",
          });
          return;
      }

      // Agregar clase de validación al formulario
      formulario.classList.add('was-validated');

      // Mostrar mensaje de éxito
      Swal.fire({
          title: "Éxito",
          text: "Registro exitoso",
          icon: "success",
          button: "OK",

      });
      formulario.reset();
      inputs.forEach(input => {
          input.classList.remove('is-invalid');
      });
      formulario.classList.remove('was-validated');
  });
})();




//validar por caracteres especiales 
const formulario = document.getElementById('formulario');

const inputs= document.querySelectorAll('#formulario input')


const campos = {
  alias: false,
  contraseña : false
}

const validarFormulario = (e)=>{
  switch (e.target.name){
      case 'alias':
          validarCampo(expresiones.alias, e.target, 'alias')
      
          break
      case 'contraseña':
          validarCampo(expresiones.contraseña, e.target, 'contraseña')
          break
          
  }
}

//funcion para tdoos los campos
const validarCampo = (expresion , input , campo) => {
  if(expresion.test(input.value)){
      document.querySelector(`#grupo_${campo} .error`).classList.remove('error-activo');
      campos[campo] = true;
  } else{
      document.querySelector(`#grupo_${campo} .error`).classList.add('error-activo');
      campos[campo] = false;

  }
}

inputs.forEach((input)=>{
  input.addEventListener('keyup' ,validarFormulario);
  input.addEventListener('blur' ,validarFormulario);
})

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  if( campos.alias && campos.contraseña){
      formulario.reset();
  }
});