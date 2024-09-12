import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../firebase/firebase";
import {useHistory, Link, useNavigate} from 'react-router-dom'
import { InputComp, Button } from "../components/index";
import String from "../utils";
import "../css/forms.css";

const Register = (name) => {
  const {
    registerheading,
    emaillabel,
    emailplaceholder,
    passwordlabel,
    passwordplaceholder,
    register,
    account,
    login,
  } = String;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();
const auth = getAuth();

  const handleRegister = async (e)=>{
    e.preventDefault();
    if(email ===''|| password ===''){
      setError('please enter both email and password.');
      return;
    }
    try{
      await createUserWithEmailAndPassword(auth, email, password)
      .then((usercredential)=>{
        const user = usercredential.user;
         navigate('/login');
      })
     
    }catch(error){
      console.error('Registration Error:',error.code,error.message);
      setError('failed to register. please check your details.')
    }
  };

  return (
    <div class="center">
      <div className="auth">
        <h1>{registerheading}</h1>
        <form onSubmit={handleRegister} name="registration_form">
          <InputComp
            label={emaillabel}
            className='input-comp'
            placeholder={emailplaceholder}
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputComp
            label={passwordlabel}
            className='input-comp'
            placeholder={passwordplaceholder}
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">{register}</Button>
          {error && <p>{error}</p>}
        </form>
        <span>
         {account}
          <Link to='/login'>{login}</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
