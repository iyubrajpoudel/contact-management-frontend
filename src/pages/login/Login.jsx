import React from 'react'
import Layout from '../../layouts/Layout'
import TextField from '../../components/form/text-field/TextField'
import Button from '../../components/form/button/Button'

const Login = () => {
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
                                                <TextField label={`Email`} type={`email`} name={`email`} id={`emailInput`} placeholder={`someone@gmail.com`} value={``} onChange={``} />
                                            </div>
                                            <div className="field">
                                                <TextField label={`Password`} type={`password`} name={`password`} id={`passwordInput`} placeholder={`*******`} value={``} onChange={``} />
                                            </div>
                                            <div className="field">
                                                <Button>Register</Button>
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