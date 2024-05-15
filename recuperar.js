

(() => {
    'use strict';

    // Obtener el botón de "Registrar"
    const botonRegistrar = document.getElementById('id_ingresar');

    // Agregar evento de clic al botón de "Registrar"
    botonRegistrar.addEventListener('click', event => {
        event.preventDefault();
        // Obtener el formulario asociado al botón de "Registrar"
        const formulario = botonRegistrar.closest('form');

        // Verificar la validez de cada campo
        let password1Valido = formulario.querySelector('#passworduno').value.trim() !== '';
        let password2Valida = formulario.querySelector('#passworddos').value.trim() !== '';

        // Verificar si ningún campo está lleno
         // Verificar si ningún campo está lleno
         if (!password1Valido && !password2Valida) {
            event.preventDefault();
            event.stopPropagation();
            Swal.fire({
                title: "Error",
                text: "Debes llenar los campos del formulario.",
                icon: "error",
                button: "OK",
                customClass: {
                    popup: 'my-custom-modal',
                }
                
            });
            return;
        }


        // Verificar cada campo individualmente
        if (!password1Valido) {
            event.preventDefault();
            event.stopPropagation();
            formulario.querySelector('#passworduno').classList.add('is-invalid');
            Swal.fire({
                title: "Error",
                text: "Por favor, completa el campo 'passworduno'.",
                icon: "error",
                button: "OK",
                customClass: {
                    popup: 'my-custom-modal',
                }
            });
            return;
        }

        if (!password2Valida) {
            event.preventDefault();
            event.stopPropagation();
            formulario.querySelector('#passworddos').classList.add('is-invalid');
            Swal.fire({
                title: "Error",
                text: "Por favor, completa el campo 'Contraseña'.",
                icon: "error",
                button: "OK",
                customClass: {
                    popup: 'my-custom-modal',
                }
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
            customClass: {
                popup: 'custom-modal',
            }
        });

        formulario.reset();
        inputs.forEach(input => {
            input.classList.remove('is-invalid');
        });
        formulario.classList.remove('was-validated');
    });
})();




const formulario = document.getElementById('recuperar');

const inputs= document.querySelectorAll('#recuperar input')

const expresiones={
    password1: /^.{8,16}$/,
    password2: /^.{8,16}$/
}

const campos = {
    password1: false
}
const validarFormulario = (e)=>{
    switch (e.target.name){
        case 'password1':
            validarCampo(expresiones.password1, e.target, 'password1');
        
            break
        case 'password2':
            validarpassword();
            break
            
    }
}
const validarCampo = (expresion , input , campo) => {
    if(expresion.test(input.value)){
        document.querySelector(`#grupo_${campo} .error`).classList.remove('error-activo');
        campos[campo] = true;
    } else{
        document.querySelector(`#grupo_${campo} .error`).classList.add('error-activo');
        campos[campo] = false;

    }
}

const validarpassword = () => {
    const inputpassword1 = document.getElementById ('passworduno')
    const inputpassword2  = document.getElementById ('passworddos');

    if (inputpassword1.value !== inputpassword2.value){
        document.querySelector('#grupo_password2 .error').classList.add('error-activo');
        campos['passworduno'] = false;
    }else{
        document.querySelector('#grupo_password2 .error').classList.remove('error-activo');
        campos['passworduno'] = true;
    }
}
inputs.forEach((input)=>{
    input.addEventListener('keyup' ,validarFormulario);
    input.addEventListener('blur' ,validarFormulario);
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if( campos.password1){
        formulario.reset();
    }
});








