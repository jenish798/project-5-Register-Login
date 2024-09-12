import {useState,useEffect} from 'react';
// import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Register,ForgotPassword,Ecommerce,Login} from './pages';
import './App.css';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/ecommerce" element={<Ecommerce />} />
    </Routes>
  </Router>
    
  );
}

export default App;
