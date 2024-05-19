document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencia al formulario y al input de búsqueda
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    // Agregar un evento de escucha al formulario para capturar la entrada del usuario
    searchForm.addEventListener('submit', function (event) {
        // Evitar el comportamiento predeterminado de enviar el formulario
        event.preventDefault();

        // Obtener el valor del input de búsqueda
        const searchTerm = searchInput.value.trim();

        // Aquí deberías realizar la búsqueda correspondiente, por ejemplo, buscar en una lista predefinida de elementos
        const searchResults = buscarEnLista(searchTerm); // Debes definir la función buscarEnLista()

        // Mostrar los resultados en el cuadro correspondiente
        mostrarResultados(searchResults);
    });

    // Función para buscar en una lista predefinida de elementos (debes adaptarla a tus necesidades)
    function buscarEnLista(searchTerm) {
        // Esta es solo una lista de ejemplo, deberías reemplazarla con tus propios datos o cargarla desde algún otro lugar
        const listaEjemplo = ['Ferney Roman', 'Monito Vergara', 'Frank Camilo','Alejandro Galvis','Kelly Gallardo','Santiago','Doña doris','Luis'];

        // Filtrar la lista de acuerdo al término de búsqueda
        const resultadosFiltrados = listaEjemplo.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));

        return resultadosFiltrados;
    }

    // Función para mostrar los resultados en el cuadro correspondiente
    function mostrarResultados(results) {
        const resultsContainer = document.querySelector('.recuadro');

        // Limpiar el contenido anterior en caso de que haya resultados anteriores
        resultsContainer.innerHTML = '';

        // Crear una lista de resultados y agregarla al contenedor
        const ul = document.createElement('ul');
        results.forEach(result => {
            const li = document.createElement('li');
            // Agregar un evento de clic a cada elemento de la lista
            li.addEventListener('click', function() {
                // Redirigir a otra página cuando se haga clic en un resultado
                window.location.href = 'chat_mensaje.html'; // Reemplaza 'tu_pagina_destino.html' con la URL de la página a la que deseas redirigir
            });
            li.textContent = result;
            ul.appendChild(li);
        });
        resultsContainer.appendChild(ul);
    }
});
