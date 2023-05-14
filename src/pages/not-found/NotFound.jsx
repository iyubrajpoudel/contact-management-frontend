import React from 'react'
import Layout from '../../layouts/Layout'

const NotFound = () => {
    return (
        <>
            <Layout>
                <div className='h-screen flex justify-center items-center'>
                    <h2 className='font-semibold text-3xl text-red-600'>Error 404 : Page Not Found</h2>
                </div>
            </Layout>
        </>
    )
}

export default NotFound