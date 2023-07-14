import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const SideBar = () => {
  return (
    <aside className="md:w-76 lg:w-80 px-5 py-2 bg-blue-200 text-center flex justify-center items-center shadow-md">
      <div className="flex justify-center">
        <Link to="/crear-categoria">
          <Button className="w-full text-sm" type="button">
            Crear categoria
          </Button>
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
