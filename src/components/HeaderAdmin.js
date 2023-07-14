import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
  const Navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    Navigate("/");
  };
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-blue-300 py-2 md:px-10 px-6 ">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-2xl mr-4 pt-1 pl-1 pb-1">
            <img
              alt="logo"
              src="/img/1-removebg-preview.png"
              className="max-w-[70px] h-[70px] "
            />
          </span>
          <h1 className="font-sans"> Administrador</h1>
        </div>  
        {/* Ajustar responsive Botón pantallas moviles */}
        <input
          type="submit"
          value="Cerrar Sesión"
          className="bg-indigo-600 text-white font-sans py-2 px-5 rounded md:ml-8 hover:text-gray-400 duration-500"
          onClick={cerrarSesion}
        />
      </div>
    </div>
  );
};

export default HeaderAdmin;
