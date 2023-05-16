import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <>
            <div className="wrapper min-h-[10vh] bg-purple-900 text-white flex items-center">
                <div className="container p-2">
                    <div className="row flex gap-10 items-center">
                        <div className="col">
                            <div className="logo">
                                <Link to={"/"}><p className='font-bold text-lg md:text-2xl'>Contact App 📞</p></Link>
                            </div>
                        </div>
                        <div className="col grow flex justify-between">
                            <div className="menu-wrapper text-sm md:text-lg text-gray-300">
                                <ul className='menus flex flex-col gap-2 md:flex-row md:gap-8'>
                                    <li className='menu'><NavLink to={`/contacts`}>All Contacts</NavLink></li>
                                    <li className='menu'><NavLink to={`/add-contact`}>Add Contact</NavLink></li>
                                </ul>
                            </div>
                            <div className="user-menu-wrapper text-sm md:text-lg text-gray-300">
                                <ul className='menus flex flex-col gap-2 md:flex-row md:gap-8'>
                                    <li className='menu'><NavLink to={`/login`}>Login</NavLink></li>
                                    <li className='menu'><NavLink to={`/register`}>Register</NavLink></li>
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