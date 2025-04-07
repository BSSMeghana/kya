import React from "react";
import "./Header.css";
import { useTranslation } from 'react-i18next';

const Header = ({ setPage }) => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language_selected', lng);
  };

  return (
    <header className="Header">
      <div className="header-section logo-container">
        <img
          src="logo.png"
          alt="FreshNGo"
          className="logo"
          onClick={() => setPage("home")}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="header-section search-container">
        <input
          type="text"
          placeholder="Type to search..."
          className="search-input"
        />
      </div>

      <nav className="header-section nav-menu">
        <button className="nav-link" onClick={() => setPage("home")}>
          {t('home')}
        </button>

        <div className="dropdown">
          <button className="nav-link">{t('stores')} ▼</button>
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={() => setPage("HEMs-store")}>{t('HEMs Store')}</button>
            <button className="dropdown-item" onClick={() => setPage("NAGs-store")}>{t('NAGs Store')}</button>
            <button className="dropdown-item" onClick={() => setPage("MEGs-store")}>{t('MEGs Store')}</button>
          </div>
        </div>

        <div className="dropdown">
          <button className="nav-link">{t('account')} ▼</button>
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={() => setPage("EmployLogin")}>{t('Employee Login')}</button>
          </div>
        </div>

        <div className="dropdown">
          <button className="nav-link">{t('Change Language')} ▼</button>
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={() => handleLanguageChange('en')}>English</button>
            <button className="dropdown-item" onClick={() => handleLanguageChange('te')}>తెలుగు</button>
            <button className="dropdown-item" onClick={() => handleLanguageChange('hi')}>हिंदी</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
