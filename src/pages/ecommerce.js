import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import String from '../utils';
import '../css/product.css'

const Ecommerce = () =>{
  const {logout,productheading}= String
    const Navigate = useNavigate();

    const handleLogout = async () =>{
        try{
            await signOut(auth);
            Navigate('/');
        }catch(error){
            console.log(error.message);
        }
    };

    return(
      <>
      <nav className="navbar">
      <div className="nav-content">
        <button
          onClick={handleLogout}
          className="logout-button"
        >
          {logout}
        </button>
      </div>
    </nav>
<div className="center">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">{productheading}</h2>
      </div>
    </div>
    </>
    )
}

export default Ecommerce