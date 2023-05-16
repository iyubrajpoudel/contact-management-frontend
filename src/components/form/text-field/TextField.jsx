import React from 'react'

const TextField = ({ label, type, name, id, placeholder, value, handleChange }) => {
  return (
      <div className="row w-full flex flex-col gap-2">
          <label htmlFor={id} className='font-semibold text-lg'>{label}</label>
          <input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={handleChange} className='w-full border-2 outline-1 outline-purple-800/60 px-4 py-2' />
      </div>
  )
}

export default TextField