import React, { useState } from 'react'
import Layout from '../../layouts/Layout'
import TextField from '../../components/form/text-field/TextField'
import Button from '../../components/form/button/Button'
import axios from 'axios'
import Loader from '../../components/loader/Loader'
import Error from './../../components/error/Error';
import Success from './../../components/success/Success';
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../config/backend'

/* 
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
*/


const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        userType: "member"
    });

    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const navigateTo = useNavigate();
    

    const changeHandler = (e) =>{
        // console.log(e.target);
        const key = e.target.name;
        const value = e.target.value;
        // console.log(key, value);

        // setFormData({...formData, key: value}) // key : here key is not a 'key' variable its a general key for object.
        setFormData({...formData, [key]: value}) // [key] : here key is a 'key' variable (dynamic variable [variable]) is used

        // console.log(formData);
    }

    const submitHandler = (e) =>{
        e.preventDefault();

        // const baseURL = process.env.REACT_APP_BASE_URL;
        const baseURL = BASE_URL;
        const URL = `${baseURL}/user/register`
        try {
                // start loader
            setIsLoading(true);

            axios.post(URL, formData)
            .then(res => {
                    // stop loader
                setIsLoading(false);

                // console.log(res);

                // success case
                setSuccess(true);
                setSuccessMessage(res.data.message);

                    // set hasError to false if it was previously true
                setHasError(false);
                resetForm();

                // Navigating after 2sec to login page after successfull registration
                setTimeout(()=>navigateTo("/login"), 2000);
            })
            .catch(err => {
                    // stop loader
                setIsLoading(false);

                // console.log(err);

                // error case
                setHasError(true);
                setError(err.response.data.message);

                    // set success to false if it was previously true
                setSuccess(false);
            })
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    const resetForm = () =>{
        setFormData({
            name: "",
            username: "",
            email: "",
            password: ""
        });
    }

    return (
        <>
            <Layout>
                <div className="wrapper p-2">
                    <div className="container min-h-[80vh] flex justify-center items-center">
                        {
                        isLoading?
                        (
                            <div className="row">
                                <Loader/>
                            </div>
                        )
                        :
                        (
                            <div className="row flex flex-col gap-8 w-full md:w-1/2">
                                <div className="row">
                                    <h2 className='text-3xl font-semibold text-center'>Create an account</h2>
                                </div>
                                {
                                hasError&&
                                (
                                    <div className="row">
                                        <Error>Error : {error}</Error>
                                    </div>
                                )
                                }
                                {
                                success&&
                                (
                                    <div className="row">
                                        <Success>{successMessage}. You can login now.</Success>
                                    </div>
                                )
                                }
                                <div className="row">
                                    <div className="form-wrapper">
                                        <form action="" onSubmit={(e)=>submitHandler(e)}>
                                            <div className="row flex flex-col gap-4">
                                                <div className="field">
                                                    <TextField label={`Name`} type={`text`} name={`name`} id={`nameInput`} placeholder={`John Doe`} value={formData.name} handleChange={changeHandler} required={`required`} />
                                                </div>
                                                <div className="field">
                                                    <TextField label={`Username`} type={`text`} name={`username`} id={`usernameInput`} placeholder={`john_doe`} value={formData.username} handleChange={changeHandler} required={`required`} />
                                                </div>
                                                <div className="field">
                                                    <TextField label={`Email`} type={`email`} name={`email`} id={`emailInput`} placeholder={`someone@gmail.com`} value={formData.email} handleChange={changeHandler} required={`required`} />
                                                </div>
                                                <div className="field">
                                                    <TextField label={`Password`} type={`password`} name={`password`} id={`passwordInput`} placeholder={`*******`} value={formData.password} handleChange={changeHandler} required={`required`} />
                                                </div>
                                                <div className="field">
                                                    <Button>Register</Button>
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

export default Register