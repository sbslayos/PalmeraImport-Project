import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  let Links = [
    { name: "Inicio", link: "/" },
    { name: "Productos", link: "/product" },
    // {name:"Ingresar",link:"/login"},
    { name: "Carrito", link: "/cart" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-blue-300 py-2 md:px-10 px-6 ">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl  mr-4 pt-1 pl-1 pb-1">
            <img alt="logo"
              src="/img/1-removebg-preview.png"
              className="max-w-[70px] h-[70px] "
            />
          </span>
          <h1 className="font-sans">Prendas Exclusivas</h1>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3x1 absolute right-8 top-9 cursor-pointer md:hidden  "
        >
          <ion-icon
            size="small"
            name={open ? "close-circle-outline" : "menu"}
          ></ion-icon>
        </div>
        <ul
          className={
            `md:flex md:items-center  md:pb-0 pb-6 absolute  md:static bg-blue-300 md:z-auto z-[-1]  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' :'top-[-490px]'}`
            
          }
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 ">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500  "
              >
                {link.name}
              </a>
            </li>
          ))}
            <Link to="/login" >
            <Button type="button" >Ingresar</Button>
            </Link>

        </ul>
      </div>
    </div>
    
  );
};

export default Header;
