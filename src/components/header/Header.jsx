import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="wrapper min-h-[10vh] bg-purple-900 text-white flex items-center">
                <div className="container max-w-[1280px] mx-auto p-2">
                    <div className="row flex gap-8">
                        <div className="col">
                            <div className="logo">
                                <p className='font-bold text-2xl'>Contact App 📞</p>
                            </div>
                        </div>
                        <div className="col grow">
                            <div className="menu-wrapper text-xl">
                                <ul className='menus flex gap-8'>
                                    <li className='menu'><NavLink to={`/contacts`}>All Contacts</NavLink></li>
                                    <li className='menu'><NavLink to={`/add-contact`}>Add Contact</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header