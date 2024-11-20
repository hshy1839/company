import React, { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<><Header /><Main /><Footer /></>} />
          <Route path="/contact" element={<><Contact /><Footer /></>} />
        </Routes>
 
      </div>
    </BrowserRouter>
  );
};

export default App;
