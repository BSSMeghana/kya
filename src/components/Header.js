import React from "react";
import "./Header.css";

const Header = ({ setPage }) => {
  return (
    <header className="Header">
      {/* Logo Section */}
      <div className="header-section logo-container">
        <img
          src="logo.png"
          alt="FreshNGo"
          className="logo"
          onClick={() => setPage("home")}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* Search Bar Section */}
      <div className="header-section search-container">
        <input
          type="text"
          placeholder="Type to search..."
          className="search-input"
        />
      </div>

      {/* Navigation Section */}
      <nav className="header-section nav-menu">
        <button className="nav-link" onClick={() => setPage("home")}>Home</button>

        <div className="dropdown">
          <button className="nav-link">Stores ▼</button>
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={() => setPage("fruit-store")}>
              Fruit store
            </button>
            <button className="dropdown-item" onClick={() => setPage("flower-store")}>
              Flower store
            </button>
            <button className="dropdown-item">Grocery store</button>
            <button className="dropdown-item">Vegetable store</button>
            <button className="dropdown-item">Petcare store</button>
            <button className="dropdown-item">Babycare store</button>
          </div>
        </div>

        <div className="dropdown">
          <button className="nav-link">Account ▼</button>
          <div className="dropdown-menu">
            <button className="dropdown-item">Login</button>
            <button className="dropdown-item">Register</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
