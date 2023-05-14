import React from 'react'
import Contacts from './pages/Contacts';
import AddContact from './pages/AddContact';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
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