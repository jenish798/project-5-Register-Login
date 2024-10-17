import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import String from "../utils";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputComp, Button } from "../components/index";

function Login() {
  const {
    emailplaceholder,
    loginHeading,
    login,
    forgotpassword,
    loginHeading2,
    emaillabel,
    passwordlabel,
    loginpageheading,
    loginpageheading2,
  } = String;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const db = getFirestore();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.error("please enter email and password");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = userCredential.user.uid;

      const userDoc = await getDoc(doc(db, "users", userId));

      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.isAdmin) {
          toast.success("Login Successful to Admin Page");
          navigate("/adminpage");
        } else {
          toast.success("Login successful to E-commerce Page");
          navigate("/ecommerce");
        }
      } else {
        setError("User not found.");
        toast.error("user not found");
      }
    } catch (error) {
      console.error("Login Error:", error.code, error.message);
      toast.error("Please check your credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="center">
      <ToastContainer />

      <form
        onSubmit={handleLogin}
        className="login-form bg-white rounded shadow-md"
      >
        <div className="left">
          <h1>{loginpageheading}</h1>
          <p>{loginpageheading2}</p>
        </div>
        <div className="right">
          <h2 className="text-2xl font-bold">{loginHeading}</h2>
          <p>{loginHeading2}</p>
          <InputComp
            label={emaillabel}
            placeholder={emailplaceholder}
            value={email}
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputComp
            label={passwordlabel}
            className="input-comp"
            placeholder={passwordlabel}
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : login}
          </button>

          {error && <p className="mt-4 text-red-500">{error}</p>}
          <a href="/forgot-password" className="forgot-password">
            {forgotpassword}
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
