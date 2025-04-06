import React, { useMemo } from "react";
import "./FruitStore.css";
import FruitCard from "./FruitCard";

// Categorized fruits
const categorizedFruits = {
  "Common Fruits": [
    "Apple", "Banana", "Orange", "Mango", "Grapes", "Watermelon", "Pineapple",
    "Papaya", "Guava", "Pomegranate", "Pear", "Peach", "Kiwi","Mosambi",
  ],
  "Tropical & Exotic Fruits": [
    "Strawberry", "Cherry", "Dragonfruit", "Lychee", "Jackfruit",
    , "Apricot", "Plum", "Avocado",
  ],
  "Others": ["Tamarind", "Coconut", "Olive", "Cranberry", "Tangerine", "Lemon","Sugarcane"],
};

// All fruits data
const fruits = [
  { name: "Apple", image: "apple.png", price: 100, mrp: 150, discount: null , stockStatus: "in-stock", availability: true, quantityLeft: 20 },
  { name: "Banana", image: "banana.png", price: 50, mrp: 60, discount: "10%", stockStatus: "in-stock", availability: true, quantityLeft: 30 },
  { name: "Mango", image: "mango.png", price: 120, mrp: 150, discount: "25%", stockStatus: "out-of-stock", availability: false, quantityLeft: 0 },
  { name: "Grapes", image: "grapes.png", price: 80, mrp: 100, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 15 },   
  { name: "Watermelon", image: "watermelon.png", price: 60, mrp: 80, discount: "8%", stockStatus: "out-of-stock", availability: true, quantityLeft: 10 },
    { name: "Pineapple", image: "pineapple.png", price: 90, mrp: 120, discount: "15%", stockStatus: "in-stock", availability: true, quantityLeft: 5 },
    { name: "Papaya", image: "papaya.png", price: 70, mrp: 90, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 25 },
    { name: "Guava", image: "guava.png", price: 40, mrp: 50, discount: "10%", stockStatus: "in-stock", availability: true, quantityLeft: 12 },
    { name: "Pomegranate", image: "pomegranate.png", price: 150, mrp: 200, discount: "10%", stockStatus: "in-stock", availability: true, quantityLeft: 8 },
    { name: "Pear", image: "pear.png", price: 80, mrp: 100, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 18 },
    { name: "Peach", image: "peach.png", price: 90, mrp: 120, discount: "5%", stockStatus: "out-of-stock", availability: true, quantityLeft: 7 },  
    { name: "Kiwi", image: "kiwi.png", price: 120, mrp: 150, discount: "7%", stockStatus: "in-stock", availability: true, quantityLeft: 10 },
    { name: "Strawberry", image: "strawberry.png", price: 200, mrp: 250, discount: "8%", stockStatus: "in-stock", availability: true, quantityLeft: 5 },
    { name: "Cherry", image: "cherry.png", price: 250, mrp: 300, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 3 },
    { name: "Dragonfruit", image: "dragonfruit.png", price: 300, mrp: 350, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 2 },
    { name: "Lychee", image: "lychee.png", price: 150, mrp: 200, discount: "5%", stockStatus: "in-stock", availability: true, quantityLeft: 8 },
    { name: "Jackfruit", image: "jackfruit.png", price: 400, mrp: 450, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 1 },
    { name: "Tamarind", image: "tamarind.png", price: 60, mrp: 80, discount: "2%", stockStatus: "out-of-stock", availability: true, quantityLeft: 20 },
    { name: "Apricot", image: "apricot.png", price: 120, mrp: 150, discount: null , stockStatus: "in-stock", availability: true, quantityLeft: 15 },
    { name: "Plum", image: "plum.png", price: 80, mrp: 100, discount: "5%", stockStatus: "in-stock", availability: true, quantityLeft: 12 },
    { name: "Avocado", image: "avocado.png", price: 200, mrp: 250, discount: "9%", stockStatus: "in-stock", availability: true, quantityLeft: 5 },
    { name: "Coconut", image: "coconut.png", price: 50, mrp: 60, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
    { name: "Olive", image: "olive.png", price: 100, mrp: 120, discount: "10%", stockStatus: "out-of-stock", availability: true, quantityLeft: 20 },
    { name: "Cranberry", image: "cranberry.png", price: 150, mrp: 200, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 8 },
    { name: "Tangerine", image: "tangerine.png", price: 70, mrp: 90, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 25 },  
    { name: "Lemon", image: "lemon.png", price: 40, mrp: 50, discount: "2%", stockStatus: "in-stock", availability: true, quantityLeft: 12 },  
    { name: "Mosambi", image: "mosambi.png", price: 60, mrp: 80, discount: "5%", stockStatus: "in-stock", availability: true, quantityLeft: 15 },
    { name: "Sugarcane", image: "sugarcane.png", price: 50, mrp: 60, discount: "8%", stockStatus: "out-of-stock", availability: true, quantityLeft: 30 },
];

const FruitStore = () => {
  // UseMemo for optimization (avoiding re-filtering on every render)
  const categorizedFruitsList = useMemo(() => {
    return Object.entries(categorizedFruits).map(([category, names]) => {
      const sectionFruits = fruits.filter((fruit) => names.includes(fruit.name));
      return { category, sectionFruits };
    });
  }, []);

  return (
    <div className="fruit-store-page">
      <h1 className="page-title">Fruit Store</h1>
      <h2 className="page-subtitle">Fresh Fruits Available</h2>
      <p className="page-description">Your Daily Dose of Freshness Starts Here</p>

      {categorizedFruitsList.map(({ category, sectionFruits }) => (
        <FruitSection key={category} title={category} fruitList={sectionFruits} />
      ))}
    </div>
  );
};

// Helper to render a section
const FruitSection = ({ title, fruitList }) => (
  <div className="fruit-section">
    <h3 className="fruit-section-title">{title}</h3>
    <div className="fruit-grid">
      {fruitList.map((fruit, index) => (
        <FruitCard key={index} {...fruit} />
      ))}
    </div>
  </div>
);

export default FruitStore;
