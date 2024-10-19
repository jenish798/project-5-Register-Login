import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth,db } from "../../firebase/firebase";
import {useHistory, Link, useNavigate} from 'react-router-dom'
import { InputComp, Button } from "../../components/index";
import String from "../../utils";
import "../../sass/register.scss";
import { setDoc,doc } from "firebase/firestore";

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
    registerheading1,
    registerparagraph,
    registeradmin,
  } = String;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
const auth = getAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please enter both email and password.');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        isAdmin:isAdmin,
      });
  
      navigate('/login');
    } catch (error) {
      setError('Failed to register. Please check your details.');
    }
  };

  return (
    <div class="center">
      <div class='first'>
        <h1>{registerheading1}</h1>
        <p>{registerparagraph}</p>
      </div>
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

          
           <div>
            <label>
              <input
                type="checkbox"
                checked={isAdmin}
                onChange={() => setIsAdmin(!isAdmin)}
              />
              {registeradmin}
            </label>
          </div>

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
