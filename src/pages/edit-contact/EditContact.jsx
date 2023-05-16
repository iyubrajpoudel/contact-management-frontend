import React, { useEffect, useState } from 'react'
import Layout from '../../layouts/Layout';
import axios from 'axios';
import imagePlaceholder from "./assets/images/image-placeholder.png";
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/loader/Loader';

// Components

const Label = ({ inputId, children }) => {
    return (
        <label htmlFor={inputId} className='text-lg font-semibold'>{children}</label>
    )
}

const Input = ({ type, name, id, placeholder, changeHandler, value }) => {
    return (
        <input type={type} name={name} id={id} placeholder={placeholder} onChange={changeHandler} value={value} className='border-2 outline-1 outline-purple-800/60 px-4 py-2' />
    )
}
const Button = ({ type, id, children }) => {
    return (
        <button type={type} id={id} className='bg-purple-600 text-white py-2 px-4 hover:bg-purple-800 text-lg font-semibold focus:outline-2 outline-purple-900'>{children}</button>
    )
}

const EditContact = () => {

    //states
    const [contact, setContact] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageSource, setImageSource] = useState(imagePlaceholder);
    const [isLoading, setIsLoading] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);

    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState("");


    // to use useNavigate hook of react-router-dom
    const navigateTo = useNavigate();

    // Get id from params
    const {id} = useParams();

    useEffect(()=>{
         // To get all contactby id
        //  const baseURL = `http://localhost:4444`;
         const baseURL = process.env.REACT_APP_BASE_URL;
         const endPoint = `contact`;
         const URL = `${baseURL}/${endPoint}/${id}`;

         try {
            setIsLoading(true);
            axios.get(URL)
            .then(res=>{
                // console.log(res);
                // console.log(res.data);
                console.log(res.data.data); // This is contact data object.
                setContact(res.data.data);

                //setting individual field value
                /*  Not working 
                setName(contact.name);
                setEmail(contact.email);
                setPhone(contact.phone);
                // setSelectedFile(contact.image);
                setImageSource(contact.image);
                */

                setName(res.data.data.name);
                setEmail(res.data.data.email);
                setPhone(res.data.data.phone);
                // setSelectedFile(res.data.data.image);
                setImageSource(res.data.data.image);

                setIsLoading(false);
            })
            .catch(err=>{
                setIsLoading(false);
                console.log(err);
                console.log(err.response.data.message);
                setHasError(true);
                setError(err.response.data.message)
            })
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }

    // }, [name, email, phone, imageSource])
    },[])


    // form.reset() don't work in react js
    const resetForm = () =>{
        setName("");
        setEmail("");
        setPhone("");
        setSelectedFile("null");
        setImageSource(imagePlaceholder);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Submitted !");
        // console.log(name, email, phone, selectedFile);

        // for sending file to backend we need to create object of FormData
        const formData = new FormData();

        // formData.append("<name>", "<value>");
        // formData.append(key, value);

        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("image", selectedFile);

        // axios.post(<URL>, <Data>);

        // const baseURL = `http://localhost:4444`;
        const baseURL = process.env.REACT_APP_BASE_URL;
        const endPoint = `contact`;
        // const URL = `localhost:4444/contact`;
        const URL = `${baseURL}/${endPoint}/${id}`;

        try {
            // show loader untill data posted
            setIsLoading(true);

            axios.put(URL, formData)
            .then(res => { 
                    console.log(res);
                    resetForm();
                    setIsLoading(false);

                     // Reseting to false once error resolved
                    setHasError(false);

                    // instantly navigate to contacts page on successfull date posting
                    // navigateTo("/contacts");

                        // navigate to contacts page on successfull date posting after 1s
                    // setTimeout(navigateTo("/contacts"), 1000); //this also instantly navigate !! Why ??
                    setTimeout(()=>navigateTo("/contacts"), 1000);

                }
            )
            .catch (err => {
                console.log(err);
                setIsLoading(false);

                // // for displaying error
                setHasError(true);
                setError(err.response.data.message)

            })
        } 
        catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const handleFileChange = (e) =>{
        // storing selected image in 'image' variable
        const image = e.target.files[0];

        // for backend
        setSelectedFile(image);

        // for frontend (image preview)
        setImageSource(URL.createObjectURL(image));
    }

return (
    <>
        <Layout>
            <div className="wrapper">
                <div className="container px-2 py-8 flex flex-col gap-8">
                    <div className='row'>
                        <h2 className='text-3xl font-bold'>Edit Contact</h2>
                    </div>
                    { // for displaying error
                    hasError &&
                    (
                    <div className="row">
                        <p className='text-red-600 text-lg'>Error occured : {error}</p>
                    </div>
                    )
                    }

                    { // for showing loader
                    isLoading?
                    (
                    <div className="row">
                        <Loader/>
                    </div>
                    )
                    :
                    (
                    !hasError 
                    && 
                    (
                    <div className='row p-2'>
                        <div className="form-wrapper md:w-1/2">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="row flex flex-col gap-4">
                                    <div className="row field flex flex-col">
                                        <Label inputId={`nameInput`}>Name</Label>
                                        <Input type={`text`} name={`name`} id={`nameInput`} value={name} changeHandler={(e) => { setName(e.target.value) }} />
                                    </div>
                                    <div className="row field flex flex-col">
                                        <Label inputId={`emailInput`}>Email</Label>
                                        <Input type={`email`} name={`email`} id={`emailInput`} value={email} changeHandler={(e) => { setEmail(e.target.value) }} />
                                    </div>
                                    <div className="row field flex flex-col">
                                        <Label inputId={`phoneInput`}>Phone</Label>
                                        <Input type={`number`} name={`phone`} id={`phoneInput`} value={phone} changeHandler={(e) => { setPhone(e.target.value) }} />
                                    </div>
                                    <div className="row field flex flex-col">
                                        <Label inputId={`imageInput`}>Image</Label>
                                        <input type="file" name='image' id='imageInput' onChange={(e) => handleFileChange(e)} />
                                        <div className="image-preview p-2">
                                            <img src={imageSource} alt="" className='max-w-[200px]'/>
                                        </div>
                                    </div>

                                    <div className="row field flex flex-col">
                                        <Button type={`submit`} id={`updateBtn`}>Update</Button>
                                        {/* <button type='submit' id='addBtn'>Add</button> */}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    )
                    )
                    }
                </div>
            </div>
        </Layout>
    </>
)
}


export default EditContact