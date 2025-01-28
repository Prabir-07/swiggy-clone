import logo from "../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [BtnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      <div class="auth-btn-container">
        {"  "}
        <button
          class="auth-btn"
          onClick={() => {
            BtnName === "Login" 
            ? setBtnName("Logout") 
            : setBtnName("Login");
          }}
        >
          {BtnName}
        </button>{"  "}
      </div>
    </div>
  );
};

export default Header;
