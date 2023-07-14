import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import HeaderAdmin from "./HeaderAdmin";
import { useNavigate } from "react-router-dom";
import crud from "./conexiones/Crud"

const Categoria = () => {
  const Navigate = useNavigate();

  const [categoria, setCategoria] = useState({
    nombre: '',
  });
  
  const { nombre } = categoria;

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        Navigate("/login");
      }
    };
    autenticarUsuario();
  }, [Navigate]);

  const onChange = (e) => {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    })
  };

  const crearCategoria = async () => {
    const data = {
      nombre: categoria.nombre,
    };
    //console.log(data);
    const response = await crud.POST('/api/categoria', data);
    const mensaje = response.msg;
    console.log(mensaje);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    crearCategoria();
  };

  return (
    <>
      <HeaderAdmin />
      <div className="flex min-h-screen">
        <SideBar />
        <main className="container mx-auto mt-24 text-center md:mt-20 p-5 md:flex md:justify-center ">
          <div>
            <h1 className="font-sans text-2xl font-bold text-gray-800 pt-6 md:text-xl">
              Crear Categorias
            </h1>
            <form
              onSubmit={onSubmit}
              className="my-10 bg-blue-200 shadow-md rounded-lg p-4 "
            >
              <div className="">
                <label className=" text-gray-500 text-1xl">
                  Anexo Categoria
                </label>
                <input
                  type="nombre"
                  id="nombre"
                  name="nombre"
                  onChange={onChange}
                  placeholder="Nombre Categoria "
                  className="shadow-md border-slate-500 bg-gray-50 rounded-xl w-full p-3 mt-3 mb-3"
                />
                <input
                // value='AGREGAR CATEGORIA'
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

export default Categoria;
