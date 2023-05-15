import React, { useState } from 'react'
import Layout from '../../layouts/Layout';
import axios from 'axios';
import imagePlaceholder from "./assets/images/image-placeholder.png";
import loading from "./assets/images/loading.gif";
import { useNavigate } from 'react-router-dom';


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

/* 
const FileInput = ({ name, id }) => {
    return (
        <input type="file" name={name} id={id} onChange={changeHandler} />
    )
}
*/

const Button = ({ type, id, children }) => {
    return (
        <button type={type} id={id} className='bg-purple-600 text-white py-2 px-4 hover:bg-purple-800 text-lg font-semibold focus:outline-2 outline-purple-900'>{children}</button>
    )
}


const AddContact = () => {

    //states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageSource, setImageSource] = useState(imagePlaceholder);
    const [isLoading, setIsLoading] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);

    // to use useNavigate hook of react-router-dom
    const navigateTo = useNavigate();


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

        const baseURL = `http://localhost:4444`;
        const endPoint = `contact`;
        // const URL = `localhost:4444/contact`;
        const URL = `${baseURL}/${endPoint}`;

        try {
            // show loader untill data posted
            setIsLoading(true);

            axios.post(URL, formData)
            .then(res => { 
                    console.log(res);
                    resetForm();
                    setIsLoading(false);

                    // instantly navigate to contacts page on successfull date posting
                    // navigateTo("/contacts");

                        // navigate to contacts page on successfull date posting after 1s
                    // setTimeout(navigateTo("/contacts"), 1000); //this also instantly navigate !! Why ??
                    setTimeout(()=>navigateTo("/contacts"), 1000);

                }
            )
            .catch (err => {
                // console.log(err);
                setIsLoading(false);
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
                <div className="container px-2 py-8">
                    <div className='row'>
                        <h2 className='text-3xl font-bold'>Add New Contact</h2>
                    </div>
                    { isLoading?
                    (
                        <div className="row px-2 py-20">
                            <div><img src={loading} alt="" className='max-w-[150px]'/></div>
                        </div>
                    )
                    :
                    (
                        <div className='row p-2 mt-6'>
                            <div className="form-wrapper md:w-1/2">
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="row flex flex-col gap-4">
                                        <div className="row field flex flex-col">
                                            <Label inputId={`nameInput`}>Name</Label>
                                            <Input type={`text`} name={`name`} id={`nameInput`} value={name} changeHandler={(e) => { setName(e.target.value) }} />
                                            {/* <label htmlFor="nameInput">Name</label> */}
                                            {/* <input type="text" name="name" id="nameInput" value={name} onChange={(e) => { setPhone(e.target.value) }} /> */}
                                        </div>
                                        <div className="row field flex flex-col">
                                            <Label inputId={`emailInput`}>Email</Label>
                                            <Input type={`email`} name={`email`} id={`emailInput`} value={email} changeHandler={(e) => { setEmail(e.target.value) }} />
                                            {/* <label htmlFor="emailInput">Email</label> */}
                                            {/* <input type="email" name="email" id="emailInput" value={email} onChange={(e) => { setPhone(e.target.value) }} /> */}
                                        </div>
                                        <div className="row field flex flex-col">
                                            <Label inputId={`phoneInput`}>Phone</Label>
                                            <Input type={`number`} name={`phone`} id={`phoneInput`} value={phone} changeHandler={(e) => { setPhone(e.target.value) }} />
                                            {/* <label htmlFor="phoneInput">Phone</label> */}
                                            {/* <input type="number" name="phone" id="phoneInput" value={phone} onChange={(e) => { setPhone(e.target.value) }} /> */}
                                        </div>
                                        <div className="row field flex flex-col">
                                            <Label inputId={`imageInput`}>Image</Label>
                                            <input type="file" name='image' id='imageInput' onChange={(e) => handleFileChange(e)} />
                                            {/* <input type="file" name='image' id='imageInput' onChange={(e) => { setSelectedFile(e.target.files[0]) }} /> */}
                                            {/* <FileInput id={`imageInput`} name={`image`} changeHandler={(e) => { setSelectedFile(e.target.files[0]) }} /> */}

                                            <div className="image-preview p-2">
                                                <img src={imageSource} alt="" className='max-w-[200px]'/>
                                            </div>
                                        </div>

                                        <div className="row field flex flex-col">
                                            <Button type={`submit`} id={`addBtn`}>Add</Button>
                                            {/* <button type='submit' id='addBtn'>Add</button> */}
                                        </div>
                                    </div>
                                </form>
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


export default AddContact