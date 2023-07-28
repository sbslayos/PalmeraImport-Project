import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import HeaderAdmin from "../HeaderAdmin";
import { useNavigate, useParams } from "react-router-dom";
import crud from "../conexiones/Crud"
import Swal from 'sweetalert';


const CrearProductos = () => {
 const Navigate = useNavigate();
 const {idCategoria} = useParams();

  const [producto, setProducto] = useState({
    nombre: '',
    descripcion:'',
    stock:'',
    precio:'',   
    imagen:'',
    categoriaId:'',
  });
  
   const { nombre, descripcion, stock, precio, imagen } = producto;

   const onChange = (e) =>{
    setProducto({
        ...producto,
        [e.target.name]: e.target.value,
    })
   };

   const crearProducto = async () => {

       const data = {
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        stock: producto.stock,
        precio: producto.precio,
        imagen: producto.imagen,
        categoriaId: idCategoria,
       } 
    const response = await crud.POST(`/api/producto`, data);
    const mensaje = response.msg;
    console.log(mensaje); 
    const mensaje1 = "El producto se creo con exito."  
    Swal({
              title:'Producto Creado',
              text: mensaje1,
              icon: 'success',
                buttons:{
                  confirm:{
                    text:'OK',
                    value: true,
                    visible: true,
                    className:'btn btn-danger',
                    closeModal: true
                  }}
            });
        Navigate(`/home-productos/${idCategoria}`);    
   }

const onSubmit = (e) =>{
    e.preventDefault();
    crearProducto();
}

   

  return (
    <>
      <HeaderAdmin />
      <div className="flex min-h-screen">
        <SideBar />
        <main className="container mx-auto mt-24 text-center md:mt-20 p-5 md:flex md:justify-center ">
          <div>
            <h1 className="font-sans text-2xl font-bold text-gray-800 pt-6 md:text-xl">
              Crear Productos
            </h1>
            <form
              onSubmit={onSubmit}
              className="my-10 bg-blue-200 shadow-md rounded-lg p-4 "
            >
              <div className="">
                <label className=" text-gray-500 text-1xl">
                  Nombre del Producto
                </label>
                <input
                  type="nombre"
                  id="nombre"
                  name="nombre"
                  onChange={onChange}
                  value={nombre}
                  placeholder="Nombre "
                  className="shadow-md border-slate-500 bg-gray-50 rounded-xl w-full p-3 mt-3 mb-3"
                />
                <label className=" text-gray-500 text-1xl">
                  Descripción
                </label>
                <input
                  type="text"
                  id="descripcion"
                  name="descripcion"
                  onChange={onChange}
                  value={descripcion}
                  placeholder="Descripción del Producto "
                  className="shadow-md border-slate-500 bg-gray-50 rounded-xl w-full p-3 mt-3 mb-3"
                />
                <label className=" text-gray-500 text-1xl">
                  Existencias
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  onChange={onChange}
                  value={stock}
                  placeholder="Stock del Producto "
                  className="shadow-md border-slate-500 bg-gray-50 rounded-xl w-full p-3 mt-3 mb-3"
                />
                <label className=" text-gray-500 text-1xl">
                  Precio
                </label>
                <input
                  type="number"
                  id="precio"
                  name="precio"
                  onChange={onChange}
                  value={precio}
                  placeholder="Precio del Producto "
                  className="shadow-md border-slate-500 bg-gray-50 rounded-xl w-full p-3 mt-3 mb-3"
                />
                <label className=" text-gray-500 text-1xl">
                  Imagen del Producto
                </label>
                <input
                  type="text"
                  id="imagen"
                  name="imagen"
                  onChange={onChange}
                  value={imagen}
                  placeholder="Imagen"
                  className="shadow-md border-slate-500 bg-gray-50 rounded-xl w-full p-3 mt-3 mb-3"
                />
                <input
                value='AGREGAR PRODUCTO'
                  type="submit"
                  className="bg-indigo-600 w-full shadow-md p-2 text-center text-white font-sans my-4 rounded-xl hover:text-gray-400 duration-500"
                />
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default CrearProductos
