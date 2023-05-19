import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-teal-300 py-0 ">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800" >
        
        <span className="text-3xl text-indigo-600 mr-1 pt-2" >
        <img src="/img/1-removebg-preview.png" className="max-w-[80px] h-[80px] " />
        <h3>Palmera Import</h3>
      </span>
      
      

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
