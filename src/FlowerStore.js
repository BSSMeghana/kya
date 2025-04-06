import React from "react";
import "./FlowerStore.css";
import FlowerCard from "./FlowerCard";

// All flowers data
const flowers = [
  { name: "Rose", image: "rose.png", price: 50, mrp: 70, discount: "5%", stockStatus: "in-stock", availability: true, quantityLeft: 20 },
  { name: "Marigold", image: "marigold.png", price: 30, mrp: 40, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
  { name: "Jasmine", image: "jasmine.png", price: 100, mrp: 120, discount: "10%", stockStatus: "in-stock", availability: true, quantityLeft: 10 },
  { name: "Tulip", image: "tulip.png", price: 150, mrp: 180, discount: null, stockStatus: "out-of-stock", availability: false, quantityLeft: 0 },
  { name: "Hibiscus", image: "hibiscus.png", price: 40, mrp: 50, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 15 },
  { name: "Lilly", image: "lilly.png", price: 80, mrp: 100, discount: "5%", stockStatus: "in-stock", availability: true, quantityLeft: 25 },
  { name: "Orchid", image: "orchid.png", price: 200, mrp: 250, discount: "10%", stockStatus: "in-stock", availability: true, quantityLeft: 5 },
  { name: "Lotus", image: "lotus.png", price: 250, mrp: 300, discount: null, stockStatus: "out-of-stock", availability: false, quantityLeft: 0 },
  { name: "Daisy", image: "daisy.png", price: 60, mrp: 80, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 12 },
  { name: "Sunflower", image: "sunflower.png", price: 40, mrp: 50, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
  { name: "Lavender", image: "lavender.png", price: 80, mrp: 100, discount: "5%", stockStatus: "in-stock", availability: true, quantityLeft: 20 },
  { name: "Chrysanthemum", image: "chrysanthemum.png", price: 60, mrp: 80, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 25 },
  { name: "sannajaji", image: "sannajaji.png", price: 100, mrp: 120, discount: "10%", stockStatus: "in-stock", availability: true, quantityLeft: 10 },
];

// Flower Store Component
const FlowerStore = () => {
  return (
    <div className="flower-store-page">
      <h1 className="page-title">Flower Store</h1>
      <h2 className="page-subtitle">Fresh Flowers Available</h2>
      <p className="page-description">Beautiful Blooms for Every Occasion</p>

      <div className="flower-grid">
        {flowers.map((flower, index) => (
          <FlowerCard key={index} {...flower} />
        ))}
      </div>
    </div>
  );
};

export default FlowerStore;
