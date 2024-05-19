const form = document.querySelector('form');
const input = document.querySelector('input[name="nombreUsuario"]');
const listaResultados = document.querySelector('#resultados');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const consulta = input.value.toLowerCase();
  const usuariosFiltrados = [];

  // Lista de usuarios registrados (ejemplo)
  const usuarios = [{ nombre: 'Juan' }, { nombre: 'María' }, { nombre: 'Pedro' }];

  usuarios.forEach((usuario) => {
    if (usuario.nombre.toLowerCase().includes(consulta)) {
      usuariosFiltrados.push(usuario);
    }
  });

  // Mostrar resultados
  listaResultados.innerHTML = '';
  if (usuariosFiltrados.length > 0) {
    usuariosFiltrados.forEach((usuario) => {
      const li = document.createElement('li');
      li.textContent = usuario.nombre;
      listaResultados.appendChild(li);
    });
  } else {
    listaResultados.innerHTML = '<p>No se encontraron resultados</p>';
  }
});
