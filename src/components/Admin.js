import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import SideBar from "./SideBar";
import crud from "./conexiones/Crud";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert";

const Admin = () => {
  const Navigate = useNavigate();

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      //console.log(token);
      if (!token) {
        Navigate("/login");
      }
    };
    autenticarUsuario();
  }, [Navigate]); // [] se ejecuta solo 1 vez

  const [categoria, setCategoria] = useState([]);

  const cargarCategorias = async () => {
    const response = await crud.GET("/api/categoria");
    console.log(response);
    setCategoria(response.categoria);
  };

  useEffect(() => {
    cargarCategorias();
  }, []);

  const borrarCategoria = async (e, idCategoria) => {
    e.preventDefault();
    const response = await crud.DELETE(`/api/categoria/${idCategoria}`);
    console.log(response.msg);
    const messageAlert = "Se borro correctamente la categoria.";
    Swal({
      title: "Proceso Exitoso",
      text: messageAlert,
      icon: "success",
      buttons: {
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "btn btn-danger",
          closeModal: true,
        },
      },
    });
    setCategoria(
      categoria.filter((categoria) => categoria._id !== idCategoria)
    );
  };

  // const actualizarCategoria = async (idCategoria)  =>{

  //   const response = await crud.PUT(`/api/categoria/${idCategoria}`);
  // }



  return (
    <>
      <HeaderAdmin />
      <div className="flex min-h-screen">
        <SideBar />
        <main className="container mx-auto mt-24 text-center md:mt-20 p-5 md:flex md:justify-center ">
          <div>
            <h1 className="font-sans text-2xl font-bold text-gray-800 pt-6 md:text-xl">
              Lista de Categorias
            </h1>
            <table className="font-sans">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>ID</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody className="bg-blue-200">
                {categoria.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <img src={item.imagen} width="150" height="150"></img>
                    </td>
                    <td>{item.nombre}</td>
                    <td>{item._id}</td>
                    <td>
                      <input
                        type="submit"
                        value="Actualizar"
                        className="bg-indigo-600 text-white font-sans   py-2 px-5 rounded md:ml-8  hover:text-gray-400 duration-500"
                        //onClick={actualizarCategoria(item._id)}
                      />
                      <input
                        type="submit"
                        value="Eliminar"
                        className="bg-indigo-600 text-white font-sans py-2 px-5 rounded md:ml-8 hover:text-gray-400 duration-500"
                        onClick={(e) => borrarCategoria(e, item._id)}
                      />
                      <input
                        type="submit"
                        value="Crear Producto"
                        className="bg-indigo-600 text-white font-sans  py-2 px-5 rounded md:ml-8 hover:text-gray-400 duration-500"
                        //onClick={cerrarSesion}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
};

export default Admin;

//className='container mx-auto mt-24 text-center md:mt-20 p-5 md:flex md:justify-center//
//className='md:w-2/3 lg:w-2/5 '
//* <div className="md:w-2/3 lg:w-2/5 "> */
