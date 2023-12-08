import React from "react";
import "../CSS/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Little Lemon Restaurant</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bookingForm">Reservations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
