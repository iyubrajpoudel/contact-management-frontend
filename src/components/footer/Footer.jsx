import React from 'react'

const Footer = () => {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <>
            <div className="wrapper min-h-[10vh] bg-purple-900 text-white flex">
                <div className="container flex h-full justify-center items-center my-auto">
                    <div className="row">
                        <p className='text-lg'>Copyright © {currentYear} Yubraj Poudel. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer