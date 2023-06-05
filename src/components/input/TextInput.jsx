import React from 'react'

const TextInput = ({type, name, id, placeholder, value, onChange, className, required}) => {
  return (
    <input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={(e)=>onChange(e)} className={`w-full border-2 outline-1 outline-purple-800/60 px-4 py-2 ${className}`} required={required} />
  )
}

TextInput.defaultProps = {
  type: "text",
  id: "",
  name: "",
  onChange: "",
  className: "",
  required: true,
  value: "",
}

export default TextInput