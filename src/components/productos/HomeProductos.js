import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeaderAdmin from "../HeaderAdmin";
import SideBar from "../SideBar";
import crud from "../conexiones/Crud";
import "@fortawesome/fontawesome-free/css/all.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "sweetalert";
import Button from "../Button";
import TarjetaProducto from "./TarjetaProducto";

const HomeProductos = () => {
  const Navigate = useNavigate();

    const { idCategoria } = useParams();

 const [productos, setProductos] = useState([]);
 
 const cargarProductos = async () =>{
    const response = await crud.GET(`/api/producto/${idCategoria}`);
    setProductos(response);
 };

 console.log(productos);

useEffect(() =>{
    cargarProductos();
},[]);


  return (
    <>
      <HeaderAdmin />
      <div className="flex min-h-screen">
        <SideBar />
        <main className="container mx-auto mt-24 text-center md:mt-20 p-5">
          <h1 className="font-sans text-2xl font-bold text-gray-800 md:text-3xl">
            Lista de Productos
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {productos.map((producto) => (
              <TarjetaProducto key={producto._id} producto={producto} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link to={`/crear-producto/${idCategoria}`}>
              <Button>Crear Producto</Button>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomeProductos;