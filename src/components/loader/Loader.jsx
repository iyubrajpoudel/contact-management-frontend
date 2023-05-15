import React from 'react'
import loading from "./assets/images/loading.gif"

const Loader = () => {
    return (
        <>
            <div className="container min-h-[40vh] flex justify-center items-center">
                <div className='row'>
                    <img src={loading} alt="" className='max-w-[150px]' />
                </div>
            </div>
        </>
    )
}

export default Loader