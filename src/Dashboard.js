import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const categoryOptions = {
  Fruits: [
    "Apple", "Banana", "Grapes", "Watermelon", "Pineapple", "Papaya", "Guava", "Pomegranate", "Pear", "Peach",
    "Kiwi", "Strawberry", "Cherry", "Dragonfruit", "Lychee", "Jackfruit", "Tamarind", "Apricot", "Plum",
    "Avocado", "Coconut", "Olive", "Cranberry", "Tangerine", "Lemon", "Mosambi", "Sugarcane"
  ],
  Vegetables: [
    "Carrot", "Onion", "Tomato", "Potato", "Green Chilli", "Cucumber", "Lady Finger", "Capsicum", "Beetroot", "Broccoli",
    "Amla", "Bottle Gourd", "Cauliflower", "Brinjal", "Bitter Gourd", "Pumpkin"
  ],
  Flowers: [
    "Rose", "Marigold", "Jasmine", "Tulip", "Hibiscus", "Lilly", "Orchid", "Lotus", "Daisy", "Sunflower",
    "Lavender", "Chrysanthemum", "sannajaji"
  ]
};

const Dashboard = ({ setCurrentPage }) => {
  const [section, setSection] = useState('');
  const [stockTab, setStockTab] = useState('');
  const [category, setCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');

  useEffect(() => {
    setSection('home'); // Set to home on first mount
  }, []);

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setCategory(selected);
    setSelectedProduct('');
    if (selected !== 'Other') {
      setCustomCategory('');
    }
  };

  const handleTabChange = (tab) => {
    setStockTab(tab);
    setCategory('');
    setCustomCategory('');
    setSelectedProduct('');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-nav">
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => { setSection('stock'); setStockTab(''); }}>Stock Change</button>
        <button onClick={() => { setSection('billing'); setStockTab(''); }}>Billing</button>
      </div>

      <div className="dashboard-content">
        {section === 'home' && <h2>Welcome to the Store Dashboard!</h2>}

        {section === 'stock' && (
          <>
            <div className="stock-tabs">
              <button
                className={stockTab === 'insert' ? 'active' : ''}
                onClick={() => handleTabChange('insert')}
              >
                Insert Product
              </button>
              <button
                className={stockTab === 'update' ? 'active' : ''}
                onClick={() => handleTabChange('update')}
              >
                Update Product
              </button>
            </div>

            {stockTab === 'insert' && (
              <div className="stock-form">
                <h3>Insert New Product</h3>

                <label>Category</label>
                <select value={category} onChange={handleCategoryChange}>
                  <option value="">Select Category</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Fruits">Fruits</option>
                  <option value="Flowers">Flowers</option>
                  <option value="Other">Other</option>
                </select>

                {category === 'Other' && (
                  <>
                    <label>Custom Category</label>
                    <input
                      type="text"
                      placeholder="Enter Custom Category"
                      value={customCategory}
                      onChange={(e) => setCustomCategory(e.target.value)}
                    />
                  </>
                )}

                <input type="text" placeholder="Product Name" />
                <input type="text" placeholder="Product Price" />
                <input type="number" placeholder="Product Quantity" />
                <input type="file" />
                <button>Insert Product</button>
              </div>
            )}

            {stockTab === 'update' && (
              <div className="stock-form">
                <h3>Update Product</h3>

                <label>Category</label>
                <select value={category} onChange={handleCategoryChange}>
                  <option value="">Select Category</option>
                  {Object.keys(categoryOptions).map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>

                {category && (
                  <>
                    <label>Product Name</label>
                    <select
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                    >
                      <option value="">Select Product</option>
                      {categoryOptions[category].map((product) => (
                        <option key={product} value={product}>{product}</option>
                      ))}
                    </select>

                    <input type="number" placeholder="New Quantity" />
                    <input type="text" placeholder="New Price" />
                    <button>Update Product</button>
                  </>
                )}
              </div>
            )}
          </>
        )}

        {section === 'billing' && (
          <div className="billing-placeholder">
            <h3>Billing Section</h3>
            <p>Feature coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
