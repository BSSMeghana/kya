import React from "react";
import "./CategorySection.css";

const categories = [
  { name: "Fruits", image: "fruit.png" },
  { name: "Vegetables", image: "vegetable.png" },
  { name: "Dairy & Eggs", image: "dairy.png" },
    { name: "Bakery", image: "bakery.png" },
    { name: "Snacks", image: "snack.png" },
   { name: "Baby care", image: "babycare.png" },
  { name: "Beverages", image: "beverage.png" },
  { name: "Meat", image: "meat.png" },
  { name: "Pet food", image: "petfood.png" },
  { name: "Flowers", image: "flower.png" },

];

const CategorySection = () => {
  return (
    <section className="category-section">
      <h2 className="category-title">Shop By Category</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.image} alt={cat.name} className="category-image" />
            <p className="category-name">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
