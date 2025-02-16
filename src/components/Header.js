import logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [BtnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      <div class="auth-btn-container">
        {"  "}
        <button
          class="auth-btn"
          onClick={() => {
            BtnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {BtnName}
        </button>
        {"  "}
      </div>
    </div>
  );
};

export default Header;
