import React from "react";
import "./CategorySection.css";
import { useTranslation } from 'react-i18next';

const CategorySection = () => {
  const { t } = useTranslation();

  const categories = [
    { name: t("categories.fruits"), image: "fruit.png" },
    { name: t("categories.vegetables"), image: "vegetable.png" },
    { name: t("categories.dairyEggs"), image: "dairy.png" },
    { name: t("categories.bakery"), image: "bakery.png" },
    { name: t("categories.snacks"), image: "snack.png" },
    { name: t("categories.babyCare"), image: "babycare.png" },
    { name: t("categories.beverages"), image: "beverage.png" },
    { name: t("categories.meat"), image: "meat.png" },
    { name: t("categories.petFood"), image: "petfood.png" },
    { name: t("categories.flowers"), image: "flower.png" },
  ];

  return (
    <section className="category-section">
      <h2 className="category-title">{t("shopByCategory")}</h2>
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
