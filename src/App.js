import React, { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import DevStory from './components/DevStory';
import Awards from './components/Awards';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<><Header /><Main /><Footer /></>} />
          <Route path="/devstory" element={<><Header /><DevStory /><Footer /></>} />
          <Route path="/awards" element={<><Header /><Awards /><Footer /></>} />
        </Routes>
 
      </div>
    </BrowserRouter>
  );
};

export default App;
