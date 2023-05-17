import React, { useEffect, useState } from 'react'
import Layout from '../../layouts/Layout';
import axios from 'axios';
import Loader from '../../components/loader/Loader';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {

    // useEffect(()=>{}, [])

    const [contacts, setContacts] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState("");

    const navigateTo = useNavigate();


    useEffect(() => {
        // console.log("Hello from useEffect!");

        // To get all contacts : GET request on /contact endpoint
        // const baseURL = `http://localhost:4444`;
        const baseURL = process.env.REACT_APP_BASE_URL;
        const endPoint = `contact`;
        const URL = `${baseURL}/${endPoint}`;

        try {
            setIsLoading(true);
            axios.get(URL)
            .then(res => {
                // console.log(res);
                // console.log(res.status);
                // console.log(res.data);
                // console.log(res.data.data); // This gives array of object (each data).
                setContacts(res.data.data);
                setIsLoading(false);

                // Reseting to false once data fetched successfully
                setHasError(false);
            })
            .catch(err => {
                console.log(err);
                console.log(err.response.data.message);
                setIsLoading(false);

                //clearing contacts data on error occured
                setContacts([]);

                // for displaying error
                setHasError(true);
                setError(err.response.data.message)
            })
        } 
        catch (error) {
            console.log(error);
            // console.log(error.response.data.message);
            setIsLoading(false);
        }

    }, [])

    // checking updation of contacts state
    console.log(contacts);
    
/* 
    const displayRow = (contacts) =>{
        return(
            contacts.map(contact => {
                <tr className="bg-white border-b-2 hover:bg-gray-50 cursor-pointer">
                    <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
                        {contact.name}
                    </td>
                    <td className="px-6 py-4">
                        {contact.email}
                    </td>
                    <td className="px-6 py-4">
                        {contact.name}
                    </td>
                    <td className="px-6 py-4">
                    {contact.name}
                        
                    </td>
                    <td className="px-6 py-4 text-right">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
            })
        )
    }
 */

    /*  Not working dont know why ?
    const Button = ({children, bgColor, color}) => {
        return(
            <button className={`bg-${bgColor}-500 text-${color} font-semibold text-lg`}>{children}</button>
        )
    } 
    */
    /*                            
    const Button = ({children, bgColor, color}) => {
        return(
            <button className={`bg-blue-500 text-white p-2 font-semibold text-md`}>{children}</button>
        )
    }
    */
    const ContactRow = ({contact, id}) => {
        return (
            <tr className="bg-white border-b-2 hover:bg-gray-50 cursor-pointer">
                <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
                    {contact.name}
                </td>
                <td className="px-6 py-4">
                    {/* {contact.image} */}
                    <img src={contact.image} alt="" className='max-h-[4rem]' />
                </td>
                <td className="px-6 py-4">
                    {contact.email}
                </td>
                <td className="px-6 py-4">
                    {contact.phone}  
                </td>
                <td className="px-6 py-4">
                    <div className='buttons flex gap-4'>
                        {/* 
                        <Button>View</Button>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                         */}
                        {/* 
                        <button className={`bg-gray-400 text-white px-4 py-2 font-semibold text-md`}>👁️‍🗨️ View</button>
                        <button className={`bg-blue-400 text-white px-4 py-2 font-semibold text-md`}>✏️ Edit</button>
                        <button className={`bg-red-500 text-white px-4 py-2 font-semibold text-md`}>❎ Delete</button> 
                        */}
                        <button onClick={()=>navigateTo(`/view-contact/${id}`)} className={`bg-gray-400 hover:bg-gray-600 text-white px-4 py-2 font-semibold text-md rounded-md`}>👁️‍🗨️</button>
                        <button onClick={()=>navigateTo(`/edit-contact/${id}`)} className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-semibold text-md rounded-md`}>✏️</button>
                        <button onClick={()=>handleDelete(id)} className={`bg-red-500 hover:bg-red-600 text-white px-4 py-2 font-semibold text-md rounded-md`}>❎</button>
                    </div>
                    {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                </td>
            </tr>
        )
    }

    const handleDelete = (id)=>{
        const confirm = window.confirm("Are you sure to delete a data ?");
        if(confirm){
            // const baseURL = `http://localhost:4444`;
            const baseURL = process.env.REACT_APP_BASE_URL;
            const endPoint = `contact`;
            const URL = `${baseURL}/${endPoint}/${id}`;
            try {
                //check auth
                const authObj = JSON.parse(localStorage.getItem("auth"));

                axios.delete(URL, {
                    headers: {
                        Authorization: `Bearer ${authObj?.token}`
                    }
                })
                .then(res => {
                    console.log(res);
                    console.log(res.data.message);
                    window.location.reload();
                    // window.alert(res.data.message);

                    setHasError(false);
                })
                .catch(err =>{
                    setHasError(true);
                    console.log(err);
                    setError(err.response.data.message);
                })
            } catch (error) {
                console.log(error);
            }
        }
    }


    return (
        <>
            <Layout>
                <div className="container py-10 flex flex-col gap-8">
                    <div className='row'>
                        <h2 className='text-3xl font-bold'>All Contacts</h2>
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
                    <div className="row">
                        <div className="table-wrapper">
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500">
                                    <thead className="text-md text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Image
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Phone
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                {/* <span className="sr-only">Edit</span> */}
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contacts?.map(contact => <ContactRow key={contact._id} contact={contact} id={contact._id}/>)}
                                        {/* contacts?.map => do mapping once contacts get value (true value) */}
                                        {/* {displayRow(contacts)} */}
                                        {/* {contacts.map(item => )}
                                        <tr className="bg-white border-b-2 hover:bg-gray-50 cursor-pointer">
                                            <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
                                                Apple MacBook Pro 17"
                                            </td>
                                            <td className="px-6 py-4">
                                                Silver
                                            </td>
                                            <td className="px-6 py-4">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4">
                                                $2999
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    )
                    }
                </div>
            </Layout>
        </>
    )
}

export default Contacts