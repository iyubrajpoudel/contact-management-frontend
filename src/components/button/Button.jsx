import React from 'react'

const Button = ({ type, id, children, onClick, className }) => {
    return (
        <button type={type} id={id} className={`w-full text-white py-2 px-4 text-lg font-semibold focus:outline-2 ${className}`} onClick={onClick}>{children}</button>
    )
}

Button.defaultProps = {
    type: "button",
    id: "",
    onClick: null,
    className: "",
    children: "Click"
}

export default Button