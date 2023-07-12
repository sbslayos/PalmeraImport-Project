import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import crud from './conexiones/Crud';
import Swal from 'sweetalert';

const Login = () => {

  const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
      email:'',
      password:''
    });

const { email, password } = usuario;

const onChange = (e) => {
  setUsuario({
    ...usuario,
    [e.target.name]: e.target.value
  })
};

const ingresarCuenta = async() => {
  const data = {
    email: usuario.email,
    password: usuario.password
  }
  console.log(data);
  const response = await crud.POST('/api/auth', data);
  const mensaje = response.msg;
  //console.log(mensaje);
  //Validación de email inexistente, password incorrecto, redirecionamiento
  if(mensaje === "El usuario no existe"){
    Swal({
      title:'Error',
      text: mensaje,
      icon: 'error',
        buttons:{
          confirm:{
            text:'OK',
            value: true,
            visible: true,
            className:'btn btn-danger',
            closeModal: true
          }}
    });
  }else if(mensaje === "Contraseña Incorrecta"){
    Swal({
      title:'Error',
      text: mensaje,
      icon: 'error',
        buttons:{
          confirm:{
            text:'OK',
            value: true,
            visible: true,
            className:'btn btn-danger',
            closeModal: true
          }}
    });
  } else{
    const jwt = response.token;
    
    //Almacenado en localStorage
    localStorage.setItem('token', jwt);

    navigate("/Admin")
  };



};

const onSubmit = (e) => {
  e.preventDefault();
  ingresarCuenta();
};



  return (
    <main className='container mx-auto mt-24 text-center md:mt-20 p-5 md:flex md:justify-center '>
      <div className='md:w-2/3 lg:w-2/5 ' >
      <h1 className='font-sans text-2xl font-bold text-gray-800 pt-2 '>Inicio de Sesión</h1>
        <form 
        onSubmit={onSubmit}
        className='my-10 bg-blue-200 shadow-md rounded-lg p-4' >
          <div className='p-2 ' >
            <label className=' text-gray-500 text-1xl'>Correo electrónico</label>
              <input
              id='email' value={email} name='email' type='email' onChange={onChange}
              placeholder='Email registrado' className='shadow-md border-slate-500 bg-gray-50 rounded-xl w-full p-3 mt-2 mb-2' 
              />
              <label className='text-gray-500 text-1xl '>Contraseña</label>
              <input
              id='password' name='password' value={password} type='password' onChange={onChange}
              placeholder='Contraseña de registro' className='shadow-md border-slate-500 bg-gray-50 rounded-xl w-full p-3 mt-2 ' 
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