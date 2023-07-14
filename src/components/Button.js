import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-indigo-600 text-white font-sans py-2 px-5 rounded md:ml-8 hover:text-gray-400 duration-500 text-center '>
        {props.children}
    </button>
  )
}

export default Button