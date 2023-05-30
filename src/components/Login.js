import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {




  return (
    <main className='container mx-auto mt-24 text-center md:mt-20 p-5 md:flex md:justify-center '>
      <div className='md:w-2/3 lg:w-2/5 ' >
      <h1 className='font-sans text-2xl font-bold text-gray-800 pt-2 '>Inicio de Sesión</h1>
        <form className='my-10 bg-blue-200 shadow-md rounded-lg p-4' >
          <div className='p-2 ' >
            <label className=' text-gray-500 text-1xl'>Correo electrónico</label>
              <input
              type='email' placeholder='Email registrado' className='shadow-md border-slate-500 bg-gray-50 rounded-xl w-full p-3 mt-2 mb-2' 
              />
              <label className='text-gray-500 text-1xl '>Contraseña</label>
              <input
              type='password' placeholder='Contraseña de registro' className='shadow-md border-slate-500 bg-gray-50 rounded-xl w-full p-3 mt-2 ' 
              />
              <input type='submit' value={"Iniciar Sesión"} className='bg-indigo-600 w-full shadow-md p-2 mt-7 text-center text-white font-san my-4 rounded-xl hover:text-gray-400 duration-500'
              />
              <Link to={"/new-account"} className='block text-center text-1xl text-gray-800 hover:text-gray-400'>
                  Registrarse
              </Link>
          </div>
        </form>
      </div>
    </main>
    
  )
}

export default Login