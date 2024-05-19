const listaProductos = document.querySelector('#productos');
const inputBusqueda = document.querySelector('#busqueda');

const productos = [
  { nombre: 'juan'},
  { nombre: 'pedro'},
  { nombre: 'suzan'},
  { nombre: 'papo'},
  { nombre: 'wendy'},
];

// Función para filtrar productos
const filtrarProductos = (productos, busqueda) => {
  return productos.filter(producto => producto.nombre.toLowerCase().includes(busqueda.toLowerCase()));
};

// Función para mostrar productos
const mostrarProductos = (productos) => {
  listaProductos.innerHTML = '';
  productos.forEach((producto) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${producto.nombre}</strong>
      <br>
    `;
    listaProductos.appendChild(li);
  });
};

// Agregar evento a la barra de búsqueda
inputBusqueda.addEventListener('keyup', () => {
  const busqueda = inputBusqueda.value;
  const productosFiltrados = filtrarProductos(productos, busqueda);
  mostrarProductos(productosFiltrados);
});

// Mostrar productos al cargar la página
mostrarProductos(productos);