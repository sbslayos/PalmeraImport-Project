import React, { useEffect, useState } from 'react'
import crud from './conexiones/Crud';

const Product = () => {

  const [categorias, setCategorias] = useState([]);

  const cargarCategorias = async () =>{
    const response = await crud.GET(`/api/categoria/home`);
    setCategorias(response.categoria);
  }

  

  const [productos, setProductos] = useState([]);

  const cargarProductos = async () =>{
    const response = await crud.GET(`/api/producto/home`);
    setProductos(response.producto1);
  }

 

  useEffect(() => {
    cargarCategorias();
    cargarProductos();
  }, []);




  return (
    <main className="mt-24 bg-slate-50"> {/* Agregamos un margen superior para separar el contenido del header */}
      <div className="relative   py-2 px-4 text-center z-10"> {/* Ajustar el padding vertical y horizontal */}
        <h1 className="text-2xl font-bold text-gray-600 mb-4">Categorías Principales</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center py-4 px-4"> {/* Ajustar el padding vertical y horizontal */}
        {categorias.map(categoria => (
          <div key={categoria._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
            <div className="bg-blue-200 rounded-lg overflow-hidden shadow-lg">
              <img src={categoria.imagen} alt={categoria.nombre} className="h-80 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{categoria.nombre}</h3>
                {/* Aquí puedes agregar más detalles de la categoría si lo deseas */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative   py-2 px-4 text-center z-10"> {/* Ajustar el padding vertical y horizontal */}
        <h1 className="text-2xl font-bold text-gray-600 mb-4">Productos</h1>
      </div>
      <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {productos.map((producto) => (
            <div key={producto._id} className="bg-blue-50 rounded-lg overflow-hidden shadow-lg mb-4">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="h-84 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{producto.nombre}</h3>
                <p className="text-gray-600 mt-2">{producto.descripcion}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-indigo-600 font-bold">${producto.precio}</span>
                  <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded hover:text-gray-400 duration-500">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

  );
}

export default Product;






