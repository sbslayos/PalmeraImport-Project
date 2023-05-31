import React from 'react'

const Footer = () => {


  return (
   
    <footer className="py-5 bg-blue-300 ">
    <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-800 md:space-y-12 divide-opacity-50">
      <div className="grid grid-cols-12">
        <div className="pb-3 col-span-full md:pb-0 md:col-span-6">
          <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
            <div className="flex items-center justify-center w-12 h-12  ">
              <img
              alt="logo"
              src="/img/1-removebg-preview.png"
              className="max-w-[60px] h-[60px] "
              />
              
            </div>
            <span className="self-center text-2xl font-semibold">Palmera Import</span>
          </a>
        </div>
        <div className="col-span-6 text-center md:text-left md:col-span-3">
          <p className="pb-1 text-lg font-medium">Información</p>
          <ul>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:text-gray-400">Sobre nosotros</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:text-gray-400">Promociones</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:text-gray-400">Devoluciones</a>
            </li>
           
          </ul>
        </div>
        <div className="col-span-6 text-center md:text-left md:col-span-3">
          <p className="pb-1 text-lg font-medium">Políticas</p>
          <ul>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:text-gray-400">Privacidad de datos</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:text-gray-400">Politicas de Devoluciones</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:text-gray-400">Politicas de descuentos</a>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="grid justify-center pt-6 lg:justify-between">
        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
          <span>©2023 Todos los derechos reservados</span>
          <a rel="noopener noreferrer" href="#">
            <span>Docente a cargo</span>
          </a>
          <a rel="noopener noreferrer" href="#">
            <span>Oscar Andres Ospina Giraldo</span>
          </a>
        </div>
        <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
          <a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:dark:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="currentColor" className="w-5 h-5">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </a>
          <a rel="noopener noreferrer" href="https://web.facebook.com/people/palmeraimport/100064834850405/?mibextid=ZbWKwL" target='_blank' title="Facebook" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:dark:text-gray-900">
          <svg width="" height="" viewBox="-3 -3.5 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12V13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H12V9.5C12 7.567 13.567 6 15.5 6H16.1C16.6523 6 17.1 6.44772 17.1 7C17.1 7.55228 16.6523 8 16.1 8H15.5C14.6716 8 14 8.67157 14 9.5V11H16.1C16.6523 11 17.1 11.4477 17.1 12C17.1 12.5523 16.6523 13 16.1 13H14V20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6Z" fill="#000000"></path> </g></svg>
          </a>
          <a rel="noopener noreferrer" href="https://www.instagram.com/palmeraimport/?igshid=MzRlODBiNWFlZA==" target='_blank' title="Instagram" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:dark:text-gray-900">
          <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path></g></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Footer

