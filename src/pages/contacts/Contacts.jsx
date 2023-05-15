import React, { useEffect, useState } from 'react'
import Layout from '../../layouts/Layout';
import axios from 'axios';
import Loader from '../../components/loader/Loader';

const Contacts = () => {

    // useEffect(()=>{}, [])

    const [contacts, setContacts] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState("");


    useEffect(() => {
        // console.log("Hello from useEffect!");

        // To get all contacts : GET request on /contact endpoint
        const baseURL = `http://localhost:4444`;
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

    const ContactRow = ({contact}) => {
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
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        )
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
                                        {contacts?.map(contact => <ContactRow key={contact._id} contact={contact}/>)}
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