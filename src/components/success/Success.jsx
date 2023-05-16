import React from 'react'

const Success = ({children}) => {
  return (
    <div className="row">
        <p className='text-2xl font-semibold text-green-700'>{children}</p>
    </div>
  )
}

export default Success