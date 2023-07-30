import React from 'react'

const TarjetaProducto = ({ producto, onBorrarProducto }) => {





  return (
    <div className='bg-gray-200 shadow-lg rounded-lg overflow-hidden'>
        <img
        src={producto.imagen}
        alt={producto.nombre}
        className='h-40 w-full object-cover'
        />
        <div className='p-4'>
            <h3 className='text-xl font-bold text-gray-800'>{producto.nombre}</h3>
            <p className='text-gray-600 mt-2'>{producto.descripcion}</p>
            <div className='flex justify-between items-center mt-4' >
                <span className='text-indigo-600 font-bold' >${producto.precio}</span>
                <div>
            <p className='text-gray-600 mt-2 text-left'>Stock: {producto.stock}</p>
            <div>
            <button className='text-sm text-blue-500' >Actualizar</button>
            <button className='text-sm text-red-500 ml-2' onClick={() => onBorrarProducto(producto._id)} >Borrar</button>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
};

export default TarjetaProducto;


//onClick={() => onActualizarProducto(producto._id) } 