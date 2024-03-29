import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import HeaderAdmin from "./HeaderAdmin";
import { useNavigate, useParams } from "react-router-dom";
import crud from "./conexiones/Crud"
import Swal from 'sweetalert';


const ActualizarCategoria = () => {
  const Navigate = useNavigate();

  const {idCategoria} = useParams();
  //console.log(idCategoria);

  const [categoria, setCategoria] = useState({
    nombre:"",
    imagen:"",
  });


  const cargarCategoria = async () =>{
    const response = await crud.GET(`/api/categoria/${idCategoria}`);
    console.log(response.categoria);
    setCategoria(response.categoria);

  }

  useEffect(() =>{
    cargarCategoria();
  },[]);

  //console.log(categoria);

  let {nombre, imagen } = categoria;

  const onChange = (e) =>{
    setCategoria({
      ...categoria,
        [e.target.name]: e.target.value
    })
  };

  const actualizarCategoria = async () =>{
    const data = {
      nombre: categoria.nombre,
      imagen: categoria.imagen,
    };
    const response = await crud.PUT(`/api/categoria/${idCategoria}`, data);
    const mensaje = "La categoria se actualizo correctamente";
    Swal({
      title:'Actualización exitosa',
      text: mensaje,
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
    Navigate("/Admin");
    cargarCategoria();
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    actualizarCategoria();
  }

 

  return (
    <>
      <HeaderAdmin />
      <div className="flex min-h-screen">
        <SideBar />
        <main className="container mx-auto mt-24 text-center md:mt-20 p-5 md:flex md:justify-center ">
          <div>
            <h1 className="font-sans text-2xl font-bold text-gray-800 pt-6 md:text-xl">
              Actualizar Categoria
            </h1>
            <form
              onSubmit={onSubmit}
              className="my-10 bg-blue-200 shadow-md rounded-lg p-4 "
            >
              <div className="">
                <label className=" text-gray-500 text-1xl">
                  Nombre de la Categoria
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
                  Imagen de la Categoria
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
                  value='ACTUALIZAR CATEGORIA'
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

export default ActualizarCategoria
