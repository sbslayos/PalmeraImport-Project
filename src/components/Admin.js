import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import SideBar from "./SideBar";

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

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    Navigate("/");
  };

  return (
    <>
    
      <HeaderAdmin cerrarSesion={cerrarSesion} />
      <div className="flex min-h-screen">
      <SideBar/>
      <main className="container mx-auto mt-24 text-center md:mt-20 p-5 md:flex md:justify-center ">
        {/* <div className="md:w-2/3 lg:w-2/5 "> */}
          <h1 className="font-sans text-2xl font-bold text-gray-800 pt-6 md:text-xl">
            Lista de Categorias
          </h1>
        {/* </div> */}
      </main>
      </div>
    </>
  );
};

export default Admin;

//className='container mx-auto mt-24 text-center md:mt-20 p-5 md:flex md:justify-center//
//className='md:w-2/3 lg:w-2/5 '
