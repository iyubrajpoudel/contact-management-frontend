import React, { useState } from 'react'
import Layout from '../../layouts/Layout'
import TextField from '../../components/form/text-field/TextField'
import Button from '../../components/form/button/Button'

const Login = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const changeHandler = (e) =>{
        // console.log(e);
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]:value})
        // console.log(formData);
    }

    return (
        <>
            <Layout>
            <div className="wrapper">
                    <div className="container min-h-[80vh] flex justify-center items-center">
                        <div className="row flex flex-col gap-8 w-1/2">
                            <div className="row">
                                <h2 className='text-3xl font-semibold text-center'>Login</h2>
                            </div>
                            <div className="row">
                                <div className="form-wrapper">
                                    <form action="">
                                        <div className="row flex flex-col gap-4">
                                            <div className="field">
                                                <TextField label={`Username`} type={`text`} name={`username`} id={`usernameInput`} placeholder={`Username`} value={formData.username} handleChange={(e)=>changeHandler(e)} />
                                            </div>
                                            <div className="field">
                                                <TextField label={`Password`} type={`password`} name={`password`} id={`passwordInput`} placeholder={`**********`} value={formData.password} handleChange={(e)=>changeHandler(e)} />
                                            </div>
                                            <div className="field">
                                                <Button>Login</Button>
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

export default Login