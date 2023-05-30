import React from 'react'

const Footer = () => {

  return (
   
    <footer className="py-6 bg-blue-300 ">
    <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-800 md:space-y-12 divide-opacity-50">
      <div className="grid grid-cols-12">
        <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
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
          {/* <a rel="noopener noreferrer" href="#">
            <span>Privacy policy</span>
          </a>
          <a rel="noopener noreferrer" href="#">
            <span>Terms of service</span>
            <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path></g></svg>
          </a> */}
        </div>
        <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
          <a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:dark:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </a>
          <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:dark:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
              <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
            </svg>
          </a>
          <a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:dark:text-gray-900">
          <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path></g></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>







  )
}

export default Footer

