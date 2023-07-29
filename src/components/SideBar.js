import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const SideBar = () => {
  return (
    <aside className="md:w-76 lg:w-80 px-5 py-2 bg-blue-200 text-center shadow-md md: mt-24 flex md:flex-col md:justify-center md:items-center">
      <div className="md:flex md:flex-col md:justify-center md:items-center  ">
        <Link to="/crear-categoria">
          <Button className="w-full text-sm mb-2 md:mb-0 " type="button">
            Crear Categoria
          </Button>
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
