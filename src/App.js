import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import HeroSection from './HeroSection';
import CategorySection from './CategorySection';
import PopularFreshProducts from './PopularFreshProducts';
import FruitStore from './FruitStore';
import FlowerStore from './FlowerStore';  // Import FlowerStore component
import NotificationStack from './NotificationStack';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      
      <Header setPage={setCurrentPage} />
      
      {/* Conditional rendering based on the current page */}
      {currentPage === 'home' && (
        <>
          <HeroSection />
          <NotificationStack />
          <CategorySection />
          <PopularFreshProducts />
        </>
      )}

      {currentPage === 'fruit-store' && <FruitStore />}
      {currentPage === 'flower-store' && <FlowerStore />} {/* FlowerStore is now conditional */}
      
    </div>
  );
}

export default App;
