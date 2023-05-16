import React from 'react'

const Error = ({children}) => {
  return (
    <div className="row">
        <p className='text-xl font-semibold text-red-700'>Error Occured! : {children}</p>
    </div>
  )
}

export default Error