import React from 'react'

const Button = ({ type, id, children }) => {
    return (
        <button type={type} id={id} className='bg-purple-600 w-full text-white py-2 px-4 hover:bg-purple-800 text-lg font-semibold focus:outline-2 outline-purple-900'>{children}</button>
    )
}

export default Button