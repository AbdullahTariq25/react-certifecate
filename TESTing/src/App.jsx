import React, { useEffect, useState } from 'react';
import './App.css'

import Page1 from './pages/Home';
import CertificateDetail from './pages/certifecatedetail';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';



function App() {


  return (
    <>
      
      
      <Navbar/>

      <Routes>
    <Route path="/Home" element={<Page1 />} />
    <Route path="/" element={<Page1 />} />
    
    <Route path="/certificate/:id" element={<CertificateDetail />}/> 
    <Route path="/Favourites" element={<Favorites  />} />
    <Route path="/*" element={<Page1 />} />
      </Routes>
    



    </>
  )
}

export default App
