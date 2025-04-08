
import React from "react";
import { useTranslation } from "react-i18next";
import './NewsFV.css';


const NewsFV = () => {
  const { t } = useTranslation();

  // Today's date
  const date = "2025-04-08";

  // Prices defined here directly
  const prices = {
    // Vegetables
    tomato: 28,
    onion: 22,
    carrot: 35,
    spinach: 10,
    potato: 25,
    cucumber: 18,
    cabbage: 20,
    cauliflower: 32,
    eggplant: 27,
    beans: 40,
    peas: 50,
    pumpkin: 24,
    broccoli: 45,

    // Fruits
    apple: 120,
    banana: 40,
    orange: 55,
    mango: 80,
    grapes: 90,
    watermelon: 25,
    papaya: 35,
    dragonfruit: 150,
kiwi: 130,
avocado: 160,
blueberry: 200,
strawberry: 180,
cranberry: 190,
  };

  const vegetables = [
    "tomato", "onion", "carrot", "spinach", "potato", "cucumber",
    "cabbage", "cauliflower", "eggplant", "beans", "peas", "pumpkin", "broccoli"
  ];

  const fruits = [
    "apple", "banana", "orange", "mango", "grapes", "watermelon", "papaya", "dragonfruit", "kiwi", "avocado", "blueberry", "strawberry", "cranberry"
  ];

  return (
    <div className="news-container">
      <h2 className="news-title">
        🏷️ {t("todaysMarketRates")} — {date}
      </h2>
  
      <div className="news-sections">
        {/* Vegetables */}
        <div>
          <h3 className="section-title">{t("vegetables")}</h3>
          <ul className="rate-list">
            {vegetables.map((id) => (
              <li key={id} className="rate-item">
                <span>{t(id)}</span>
                <span>₹{prices[id]} / kg</span>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Fruits */}
        <div>
          <h3 className="section-title">{t("fruits")}</h3>
          <ul className="rate-list">
            {fruits.map((id) => (
              <li key={id} className="rate-item">
                <span>{t(id)}</span>
                <span>₹{prices[id]} / kg</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}  

export default NewsFV;

