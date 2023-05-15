import React from 'react'
import Contacts from './pages/contacts/Contacts';
import AddContact from './pages/add-contact/AddContact';
import NotFound from './pages/not-found/NotFound';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/add-contact' element={<AddContact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <Contacts /> */}
      {/* <AddContact /> */}
    </>
  )
}

export default App