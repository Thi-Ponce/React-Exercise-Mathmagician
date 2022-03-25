import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './component/Calculator';
import HomePage from './component/HomePage';
import NavBar from './component/Navbar';
import Quote from './component/Quote';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);
export default App;
