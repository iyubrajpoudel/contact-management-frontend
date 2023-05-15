import React, { useEffect, useState } from 'react'
import Layout from '../../layouts/Layout';
import axios from 'axios';

const Contacts = () => {

    // useEffect(()=>{}, [])

    const [contacts, setContacts] = useState([]);

    useEffect(()=>{
        console.log("Hello!");

        // To get all contacts : GET request on /contact endpoint
        const baseURL = `http://localhost:4444`;
        const endPoint = `contact`;
        const URL = `${baseURL}/${endPoint}`;

        axios.get(URL)
        .then(res => {
            // console.log(res);
            // console.log(res.status);
            // console.log(res.data);
            console.log(res.data.data); // This gives array of object (each data).
            setContacts(res.data.data);

        })
        .catch(err => {
            console.log(err);
        })


    }, [])

    return (
        <>
            <Layout>
                <div className="container">
                    <div>
                        <h2 className='text-3xl font-bold'>All Contacts</h2>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Contacts