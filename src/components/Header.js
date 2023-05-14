import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Palmera Import</h2>
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/about">Sobre Nosotros</Link>
    </nav>
    </div>
  );
};

export default Header;
