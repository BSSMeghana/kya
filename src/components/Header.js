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
            <button className="dropdown-item" onClick={() => setPage("HEMs-store")}>
              HEM's Store
            </button>
            <button className="dropdown-item" onClick={() => setPage("NAGs-store")}>
              NAG's Store
            </button>
            <button className="dropdown-item" onClick={() => setPage("MEGs-store")}>
              MEG's Store
            </button>
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
