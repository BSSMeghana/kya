import React, { useState, useEffect } from 'react';
import './App.css';
import './i18n'; // Load translations
import { useTranslation } from 'react-i18next';

import Header from './components/Header';
import HeroSection from './HeroSection';
import PopularFreshProducts from './PopularFreshProducts';
import HEMsStore from './HEMsStore';
import NotificationStack from './NotificationStack';
import NAGsStore from './NAGsStore';
import MEGsStore from './MEGsStore';
import EmployLogin from './EmployLogin';
import Dashboard from './Dashboard';

function App() {
  const { t, i18n } = useTranslation();
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const langSet = localStorage.getItem('language_selected');
    if (!langSet) {
      setShowLanguagePopup(true);
    }
  }, []);

  const handleLanguageSelect = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language_selected', lng);
    setShowLanguagePopup(false);
  };

  return (
    <div className="App">
      {showLanguagePopup && (
        <div className="language-popup">
          <div className="language-box">
            <h2>{t('selectLanguage')}</h2>
            <button onClick={() => handleLanguageSelect('en')}>English</button>
            <button onClick={() => handleLanguageSelect('te')}>తెలుగు</button>
            <button onClick={() => handleLanguageSelect('hi')}>हिंदी</button>
          </div>
        </div>
      )}

      {!showLanguagePopup && (
        <>
          <Header setPage={setCurrentPage} />
          {currentPage === 'home' && (
            <>
              <HeroSection />
              <NotificationStack />
              <PopularFreshProducts />
            </>
          )}
          {currentPage === 'HEMs-store' && <HEMsStore />}
          {currentPage === 'NAGs-store' && <NAGsStore />}
          {currentPage === 'MEGs-store' && <MEGsStore />}
          {currentPage === 'EmployLogin' && <EmployLogin setCurrentPage={setCurrentPage} />}
          {currentPage === 'Dashboard' && <Dashboard setCurrentPage={setCurrentPage} />}


        </>
      )}
    </div>
  );
}

export default App;
