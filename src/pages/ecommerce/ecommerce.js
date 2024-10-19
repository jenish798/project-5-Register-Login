import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import String from "../../utils";
import "../../css/product.css";

const Ecommerce = () => {
  const {
    logout,
    productheading,
    ecommerceselect,
    ecommercelist,
    ecommercedashboard,
    ecommercemanage,
    ecommercelayer,
    ecommercepages,
    ecommerceproduct,
    ecommercechart,
    ecommercetables,
  } = String;
  const Navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-content">
          <button onClick={handleLogout} className="logout-button">
            {logout}
          </button>
        </div>
      </nav>

      <div className="section">
        <div className="side">
          <h1>{ecommercelist}</h1>
          <p>{ecommercedashboard}</p>
          <p>{ecommercemanage}</p>
          <ul>
            <li>{ecommercelayer}</li>
            <li>{ecommercepages}</li>
          </ul>
          <p>{ecommerceproduct}</p>
          <ul>
            <li>{ecommercechart}</li>
            <li>{ecommercetables}</li>
          </ul>
        </div>

        <div className="center">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">{productheading}</h2>
            <p>{ecommerceselect}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
