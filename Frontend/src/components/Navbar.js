import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import "../style.css";

export default function Navbar() {
  return (
    <nav className="navbar fixed-top custom-navbar">
      <div className="container-fluid">
        <div className="left-section">
          <div>
            <img src={logo2} alt="BEAM Logo" className="nav-img" />
          </div>
          <div className="middle">
            <ul className="nav justify-content-center" style={{ fontSize: "1.1rem", gap: "1rem" }}>
              <li className="nav-item shade">
                <Link className="nav-link" to="/Firm">Firm</Link>
              </li>
              <li className="nav-item shade">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item shade">
                <Link className="nav-link" to="/Terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="nav justify-content-end nav-sign">
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Log In</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
