import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import HeroSection from './HeroSection';
import CategorySection from './CategorySection';
import PopularFreshProducts from './PopularFreshProducts';
import HEMsStore from './HEMsStore'; // ✅ fixed path
import NotificationStack from './NotificationStack';
import NAGsStore from './NAGsStore.js';
import MEGsStore from './MEGsStore';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <Header setPage={setCurrentPage} />

      {currentPage === 'home' && (
        <>
          <HeroSection />
          <NotificationStack />
          <CategorySection />
          <PopularFreshProducts />
        </>
      )}

      {currentPage === 'HEMs-store' && <HEMsStore />}
      {currentPage === 'NAGs-store' && <NAGsStore />}
      {currentPage === 'MEGs-store' && <MEGsStore />}

      {/* Add more pages as needed */}
    </div>
  );
}

export default App;
