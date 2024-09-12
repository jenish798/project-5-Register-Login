import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import '../css/login.css'
import String from "../utils"

function Login(){
    const {loginHeading,login,forgotpassword}=String

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) =>{
    e.preventDefault();
    if (email ===''||password ===''){
        setError('Please enter both email and password.');
        return;
    }
    try{
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/ecommerce');
    } catch (error){
        console.error('Login Error:', error.code, error.message);
        alert('Failed to login. Please check your credentials.');

    }
;  }

    return(
        <div className="center">
            <form onSubmit={handleLogin} className=" login-form bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">{loginHeading}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
        >
         {login}
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        <a href="/forgot-password" className="forgot-password">{forgotpassword}</a>
      </form>
        </div>
    )
}
export default Login