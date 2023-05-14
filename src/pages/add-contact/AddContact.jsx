import React from 'react'
import Layout from '../../layouts/Layout';


// Components

const Label = ({ inputId, children }) => {
    return (
        <label htmlFor={inputId} className='text-lg font-semibold'>{children}</label>
    )
}

const Input = ({ type, name, id, placeholder }) => {
    return (
        <input type={type} name={name} id={id} placeholder={placeholder} className='border-2 outline-1 outline-purple-800/60 px-4 py-2' />
    )
}

const Button = ({ type, id, children }) => {
    return (
        <button type={type} id={id} className='bg-purple-600 text-white py-2 px-4 hover:bg-purple-800 text-lg font-semibold focus:outline-2 outline-purple-900'>{children}</button>
    )
}


const AddContact = () => {

    return (
        <>
            <Layout>
                <div className="wrapper">
                    <div className="container px-2 py-8">
                        <div className='row'>
                            <h2 className='text-3xl font-bold'>Add New Contact</h2>
                        </div>
                        <div className='row p-2 mt-6'>
                            <div className="form-wrapper w-1/2">
                                <form action="">
                                    <div className="row flex flex-col gap-4">
                                        <div className="row field flex flex-col">
                                            <Label inputId={`nameInput`}>Name</Label>
                                            <Input type={`text`} name={`name`} id={`nameInput`} />
                                            {/* <label htmlFor="nameInput">Name</label> */}
                                            {/* <input type="text" name="name" id="nameInput" /> */}
                                        </div>
                                        <div className="row field flex flex-col">
                                            <Label inputId={`emailInput`}>Email</Label>
                                            <Input type={`email`} name={`email`} id={`emailInput`} />
                                            {/* <label htmlFor="emailInput">Email</label> */}
                                            {/* <input type="email" name="email" id="emailInput" /> */}
                                        </div>
                                        <div className="row field flex flex-col">
                                            <Label inputId={`phoneInput`}>Phone</Label>
                                            <Input type={`number`} name={`phone`} id={`phoneInput`} />
                                            {/* <label htmlFor="phoneInput">Phone</label> */}
                                            {/* <input type="number" name="phone" id="phoneInput" /> */}
                                        </div>
                                        <div className="row field flex flex-col">
                                            <Button type={`submit`} id={`addBtn`}>Add</Button>
                                            {/* <button type='submit' id='addBtn'>Add</button> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default AddContact