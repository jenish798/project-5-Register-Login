import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { InputComp, Button } from "../components/index";
import String from "../utils";
import "../forms.css";

const Register = (name) => {
  const {
    registerheading,
    emaillabel,
    emailplaceholder,
    passwordlabel,
    passwordplaceholder,
    login,
    confirmpasswordlabel,
    confirmpasswordplaceholder,
  } = String;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();
    setError("");
    if (validatePassword()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res.user);
        })
        .catch((err) => setError(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div class="center">
      <div className="auth">
        <h1>{registerheading}</h1>
        {error && <div className="auth__error">{error}</div>}
        <form onSubmit={register} name="registration_form">
          <InputComp
            label={emaillabel}
            placeholder={emailplaceholder}
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputComp
            label={passwordlabel}
            placeholder={passwordplaceholder}
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <InputComp
            label={confirmpasswordlabel}
            value={confirmPassword}
            placeholder={confirmpasswordplaceholder}
            type="text"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button type="submit" />
        </form>
        <span>
          Already have an account?
          {/* <Link to='/login'>login</Link> */}
        </span>
      </div>
    </div>
  );
};

export default Register;
