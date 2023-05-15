import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigateTo = useNavigate();

    useEffect(()=>{
        navigateTo("/contacts")
    }, []);
    
  return (
    <>
        Home Page
    </>
  )
}

export default Home