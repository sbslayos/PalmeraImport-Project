import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import SideBar from "./SideBar";
import crud from "./conexiones/Crud";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "sweetalert";

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

    swal({
      title: "Estas seguro de eliminar esta categoria",
      text: "Una vez eliminada, no podra ser recuperada",
      icon:"warning",
      buttons: true,
    })
    .then(async(willDelete) => {
      if(willDelete){
        // Llamado a la Api
        const response = await crud.DELETE(`/api/categoria/${idCategoria}`);
        console.log(response.msg);

        swal("Categoria eliminada correctamente",{
          icon:"success",
        });

        //Actualiza el estado para reflejar los cambios solición 1 y solución 2
        // setCategoria(
        //   categoria.filter((categoria) => categoria._id !== idCategoria)
        // );
        cargarCategorias();

      } else {
        swal("Categoria no eliminada",{
          icon:"error",
        });
      }
    });
};

  const actualizarCategoria = async (idCategoria)  =>{
    Navigate(`/actualizar-categoria/${idCategoria}`)
  }

  const crearProductos = async(idCategoria)=>{
    Navigate(`/home-productos/${idCategoria}`);
  } 

  return (
    <>
      <HeaderAdmin />
      <div className="flex flex-col md:flex-row min-h-screen mt-9 ">
        
        <SideBar />
        
        <main className="container mx-auto mt-24 text-center md:mt-20 p-5 md:flex md:justify-center flex-1  ">
          <div className="w-full">
            <h1 className="font-sans text-2xl font-bold text-gray-900 pt-6 md:text-xl">
              Lista de Categorias
            </h1>
            <div className="overflow-x-auto">
              <table className="table-auto w-full rounded-xl ">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Imagen</th>
                    <th className="px-4 py-2">Nombre</th>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Opciones</th>
                  </tr>
                </thead>
                <tbody className="bg-blue-100">
                  {categoria.map((item) => (
                    <tr key={item._id}>
                      <td className="px-4 py-2">
                        <img src={item.imagen} alt={item.nombre} className="w-24 h-24 object-cover rounded-lg" />
                      </td>
                      <td className="px-4 py-2">{item.nombre}</td>
                      <td className="px-4 py-2">{item._id}</td>
                      <td className="px-4 py-2">
                        <div className="flex flex-col md:flex-row md:space-x-2">
                          <button
                            className="bg-indigo-600 text-white font-sans py-2 px-4 rounded hover:text-gray-400 duration-500 text-sm w-full md:w-auto my-1 "
                            onClick={() => actualizarCategoria(item._id)}
                          >
                            Actualizar
                          </button>
                          <button
                            className="bg-indigo-600 text-white font-sans py-2 px-4 rounded hover:text-gray-400 duration-500 text-sm w-full md:w-auto my-1"
                            onClick={(e) => borrarCategoria(e, item._id)}
                          >
                            Eliminar
                          </button>
                          <button
                            className="bg-indigo-600 text-white font-sans py-2 px-4 rounded hover:text-gray-400 duration-500 text-sm w-full md:w-auto my-1"
                            onClick={() => crearProductos(item._id)}
                          >
                            Crear Producto
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
