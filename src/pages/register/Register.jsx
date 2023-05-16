import React from 'react'
import Layout from '../../layouts/Layout'

const TextField = ({ label, type, name, id, placeholder, value, handleChange }) => {
    return (
        <div className="row w-full flex flex-col gap-2">
            <label htmlFor={id} className='font-semibold text-lg'>{label}</label>
            <input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={handleChange} className='w-full border-2 outline-1 outline-purple-800/60 px-4 py-2' />
        </div>
    )
}

const Button = ({ type, id, children }) => {
    return (
        <button type={type} id={id} className='bg-purple-600 w-full text-white py-2 px-4 hover:bg-purple-800 text-lg font-semibold focus:outline-2 outline-purple-900'>{children}</button>
    )
}

const Register = () => {
    return (
        <>
            <Layout>
                <div className="wrapper">
                    <div className="container min-h-[80vh] flex justify-center items-center">
                        <div className="row flex flex-col gap-8 w-1/2">
                            <div className="row">
                                <h2 className='text-3xl font-semibold text-center'>Create an account</h2>
                            </div>
                            <div className="row">
                                <div className="form-wrapper">
                                    <form action="">
                                        <div className="row flex flex-col gap-4">
                                            <div className="field">
                                                <TextField label={`Name`} type={`text`} name={`name`} id={`nameInput`} placeholder={`John Doe`} value={``} onChange={``} />
                                            </div>
                                            <div className="field">
                                                <TextField label={`Username`} type={`text`} name={`username`} id={`usernameInput`} placeholder={`john_doe`} value={``} onChange={``} />
                                            </div>
                                            <div className="field">
                                                <TextField label={`Email`} type={`email`} name={`email`} id={`emailInput`} placeholder={`someone@gmail.com`} value={``} onChange={``} />
                                            </div>
                                            <div className="field">
                                                <TextField label={`Password`} type={`password`} name={`password`} id={`passwordInput`} placeholder={`*******`} value={``} onChange={``} />
                                            </div>
                                            <div className="field">
                                                <Button>Register</Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Register