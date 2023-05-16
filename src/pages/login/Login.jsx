import React, { useState } from 'react'
import Layout from '../../layouts/Layout'
import TextField from '../../components/form/text-field/TextField'
import Button from '../../components/form/button/Button'
import axios from 'axios'
import Loader from './../../components/loader/Loader';

const Login = () => {

    const [isLoading, setIsLoading] = useState(false);

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

    const submitHandler = (e) =>{
        e.preventDefault();

        // posting to backend
        const baseURL = process.env.REACT_APP_BASE_URL;
        const URL = `${baseURL}/user/login`
        try {
            setIsLoading(true);
            axios.post(URL, formData)
            .then(res => {
                setIsLoading(false);
                console.log(res);
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err);
            })
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    return (
        <>
            <Layout>
            <div className="wrapper">
                    <div className="container min-h-[80vh] flex justify-center items-center">
                        {isLoading?
                            (
                                <div className="row">
                                    <Loader />
                                </div>
                            )
                            :
                            (
                                <div className="row flex flex-col gap-8 w-1/2">
                                    <div className="row">
                                        <h2 className='text-3xl font-semibold text-center'>Login</h2>
                                    </div>
                                    <div className="row">
                                        <div className="form-wrapper">
                                            <form action="" onSubmit={(e)=>submitHandler(e)}>
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
                            )
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Login