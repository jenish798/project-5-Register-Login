import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import String from '../utils';

const ForgotPassword = () =>{

  const {resetPassword}= String
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = async (e)=>{
        e.preventDefault();
        try{
            await sendPasswordResetEmail(auth,email);
            setMessage('check your email for the reset link.')
            setEmail('');
        } catch(error){
            console.log(error.message);
            setMessage('Error sending reset email.')
        }
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleResetPassword} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded"
        >
          {resetPassword}
        </button>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </form>
    </div> 
    )
}

export default ForgotPassword