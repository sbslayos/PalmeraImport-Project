import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white py-4">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800" >
          
      <h2 className="text-red-700" >Palmera Import</h2>
    <nav>
      
      <Link to="/">Inicio</Link>
      <Link to="/about">Sobre Nosotros</Link>
      <Link to="/login">Ingresar</Link>
    </nav>
    </div>
    </div>
    </div>
  );
};

export default Header;
