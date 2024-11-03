import React, { useState } from "react";

function BuscadorDeProductos() {
  // Lista de productos predefinidos
  const productos = [
    { id: 1, nombre: "Camiseta" },
    { id: 2, nombre: "Pantalones" },
    { id: 3, nombre: "Gorra" },
    { id: 4, nombre: "Zapatos" },
    { id: 5, nombre: "Chaqueta" },
  ];

  // Estado para almacenar la palabra clave de búsqueda
  const [busqueda, setBusqueda] = useState("");

  // Función para manejar el cambio en el campo de búsqueda
  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  // Filtrar productos en función de la palabra clave ingresada
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h2>Buscador de Productos</h2>

      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={handleChange}
      />

      {/* Lista de productos filtrados */}
      <ul>
        {productosFiltrados.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default BuscadorDeProductos;
