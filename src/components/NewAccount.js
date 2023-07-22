import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert';
import crud from './conexiones/Crud';

const NewAccount = () => {

  const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
      nombre:'',
      email:'',
      password:'',
      confirmar: ''
    });

    const {nombre, email, password, confirmar} = usuario;

    const onChange = (e) => {
      setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
      })
    };

    const crearCuenta = async() => {
      
      // if(!usuario.nombre || !usuario.email || !usuario.password || !usuario.confirmar ){
      //   const messageAlert = "Todos los campos son obligatorios."
      //   Swal({
      //     title:'Error',
      //     text: messageAlert,
      //     icon: 'error',
      //       buttons:{
      //         confirm:{
      //           text:'OK',
      //           value: true,
      //           visible: true,
      //           className:'btn btn-danger',
      //           closeModal: true
      //         }}
      //   });
      //  } 

      // Validación de Contraseñas iguales.
if (password !== confirmar) {
  console.log('diferentes');
  // alert("Las contraseñas no coindicen.")
  const messageAlert ="Las contraseñas no coinciden."
  Swal({
    title:'Error',
    text: messageAlert,
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
} else {
  const data = {
    nombre: usuario.nombre,
    email: usuario.email,
    password: usuario.password
  }
  console.log(data);
  const response = await crud.POST(`/api/usuarios`, data);
  const mensaje = response.msg;
  console.log(mensaje);
  console.log(response);
  if(mensaje === "El usuario ya existe"){
    Swal({
      title:'Error',
      text: "El usuario ya existe.",
      icon: 'error',
        buttons:{
          confirm:{
            text:'OK',
            value: true,
            visible: true,
            className:'btn btn-primary',
            closeModal: true
          }}
    });
  }else{
    Swal({
      title:'Registro Exitoso',
      text: "Usuario creado con exito",
      icon: 'success',
        buttons:{
          confirm:{
            text:'OK',
            value: true,
            visible: true,
            className:'btn btn-danger',
            closeModal: true
          }}
    });
  };
  setUsuario({
    nombre:'',
      email:'',
      password:'',
      confirmar: ''
  })
  //redirección a página de Login
  navigate("/login");
}};

    const onSubmit = (e) =>{
      e.preventDefault();
      crearCuenta();
    }

    const validarFormulario = usuario.nombre && usuario.email && usuario.password && usuario.confirmar;
    // if(!validarFormulario){
    //   const messageAlert = "Todos los campos son obligatorios."
    //     Swal({
    //       title:'Error',
    //       text: messageAlert,
    //       icon: 'error',
    //         buttons:{
    //           confirm:{
    //             text:'OK',
    //             value: true,
    //             visible: true,
    //             className:'btn btn-danger',
    //             closeModal: true
    //           }}
    //     });
    // }

  return (
    <main className='container mx-auto mt-24 text-center md:mt-20 p-5 md:flex md:justify-center '>
      <div className='md:w-2/3 lg:w-2/5 ' >
      <h1 className='font-sans text-2xl font-bold text-gray-800 pt-2 '>Formato de Registro</h1>
        <form 
          className='my-10 bg-blue-200 shadow-md rounded-lg p-4' 
          onSubmit={onSubmit}
        >
          <div className='p-2 ' >
          <label className=' text-gray-500 text-1xl'>Nombre</label>
              <input
              id='nombre'
              name='nombre'
              type='nombre' placeholder='Ingresa tu nombre' className='shadow-md border-slate-500 bg-gray-50 rounded-xl w-full p-3 mt-2 mb-2' 
              value={nombre}
              onChange={onChange}
              />
            <label className=' text-gray-500 text-1xl'>Correo electrónico</label>
              <input
              type='email' 
              id='email'
              name='email'
              placeholder='Email registrado' className='shadow-md border-slate-500 bg-gray-50 rounded-xl w-full p-3 mt-2 mb-2' 
              value={email}
              onChange={onChange}
              />
              <label className='text-gray-500 text-1xl '>Nueva Contraseña</label>
              <input
              type='password' 
              id='password'
              name='password'
              placeholder='Contraseña de registro' className='shadow-md border-slate-500 bg-gray-50 rounded-xl w-full p-3 my-2 '
              value={password}
              onChange={onChange} 
              />
              <label className='text-gray-500 text-1xl '>Confirme su contraseña</label>
              <input
              id='confirmar'
              name='confirmar'
              type='password' placeholder='Confirme su contraseña' className='shadow-md border-slate-500 bg-gray-50 rounded-xl w-full p-3 my-2 '
              value={confirmar}
              onChange={onChange} 
              />
              <input type='submit' value={"Finalizar Registro"} 
              disabled={!validarFormulario} // Inhabilita el boton de Envio del formulario si estos estan vacios
              className='bg-indigo-600 w-full shadow-md p-2 mt-7 text-center text-white font-san my-4 rounded-xl hover:text-gray-400 duration-500'
              />
              <Link to={"/login"} className='block text-center text-1xl text-gray-800 hover:text-gray-400'>
                  Regresar
              </Link>
          </div>
        </form>
      </div>
    </main>
  )
}

export default NewAccount;