import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Admin = () => {

const Navigate = useNavigate();

    useEffect (()=>{
        const autenticarUsuario = async () =>{
         const token = localStorage.getItem('token') 
         //console.log(token);  
         if(!token){
            Navigate("/login");
         }
        }
        autenticarUsuario();
    },[]); // [] se ejecuta solo 1 vez

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        Navigate("/");
    }

  return (
    <main className='container mx-auto mt-24 text-center md:mt-20 p-5 md:flex md:justify-center '> 
    <div className='md:w-2/3 lg:w-2/5 '>
    <h1 className='font-sans text-2xl font-bold text-gray-600 pt-6 '>Administrador.</h1>
    <input
    type='submit'
    value="Cerrar Sesión"
    className='bg-indigo-600 text-white font-sans py-2 px-5 rounded md:ml-8 hover:text-gray-400 duration-500'
    onClick={cerrarSesion}
    />
    </div>
  </main>
  )
}

export default Admin

//className='container mx-auto mt-24 text-center md:mt-20 p-5 md:flex md:justify-center// 
//className='md:w-2/3 lg:w-2/5 '