import React from "react";
import { useTranslation } from "react-i18next";
import MEGsCard from "./MEGsCard";
import "./MEGsStore.css";

const MEGsStore = () => {
  const { t } = useTranslation();


  const categories = {

    "Fresh Flowers": {
    "Popular Flowers": [
      { name: "Red Roses", image: "redrose.png", price: 50, mrp: 70, discount: "5%", stockStatus: "outOfStock", availability: false, quantityLeft: 20 },
      { name: "White Roses", image: "whiterose.png", price: 60, mrp: 80, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 10 },
      { name: "Pink Roses", image: "pinkrose.png", price: 55, mrp: 75, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 15 },
      { name: "Yellow Roses", image: "yellowrose.png", price: 45, mrp: 65, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 12 },
      { name: "Tulip", image: "tulip.png", price: 90, mrp: 110, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 15 },
      { name: "Jasmine", image: "jasmine.png", price: 55, mrp: 70, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 25 },
      { name: "Hibiscus", image: "hibiscus.png", price: 70, mrp: 85, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 10 },
      { name: "Chrysanthemum", image: "chrysanthemum.png", price: 85, mrp: 100, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 18 },
      { name: "Marigold", image: "marigold.png", price: 40, mrp: 50, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
      { name: "Lotus", image: "lotus.png", price: 120, mrp: 150, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 5 },
      { name: "Sannajaji", image: "sannajaji.png", price: 30, mrp: 40, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 50 }
    ],
    "Exotics Flowers": [
      { name: "Lilly", image: "lilly.png", price: 75, mrp: 90, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 12 },
      { name: "Orchid", image: "orchid.png", price: 120, mrp: 150, discount: "15%", stockStatus: "in-stock", availability: true, quantityLeft: 5 },
      { name: "Daisy", image: "daisy.png", price: 40, mrp: 50, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
      { name: "Lavender", image: "lavender.png", price: 100, mrp: 120, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 20 },
      { name: "Sunflower", image: "sunflower.png", price: 65, mrp: 80, discount: "10%", stockStatus: "in-stock", availability: true, quantityLeft: 8 }
    ]
  },
  
  "Baby Care": {
    "Baby products": [
      { name: "Baby Shampoo", image: "babyshampoo.png", price: 100, mrp: 120, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
      { name: "Baby Powder", image: "babypowder.png", price: 80, mrp: 100, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 25 },
      { name: "Baby Wipes", image: "babywipes.png", price: 50, mrp: 60, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 40 },
      { name: "Baby Oil", image: "babyoil.png", price: 70, mrp: 90, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 20 },
      { name: "Baby Soap", image: "babysoap.png", price: 40, mrp: 50, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 60 },
      { name: "Baby Diapers", image: "babydiapers.png", price: 300, mrp: 350, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 10 },
      { name: "Baby Cream", image: "babycream.png", price: 120, mrp: 150, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 15 },
      { name: "Baby Lotion", image: "babylotion.png", price: 150, mrp: 180, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 20 }
    ],

  },

  
  "Fresh Fruits": {
    "Popular Fruits": [
      { name: "Mango", image: "mango.png", price: 100, mrp: 120, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 15 },
      { name: "Pineapple", image: "pineapple.png", price: 70, mrp: 90, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 20 },
      { name: "Grapes", image: "grapes.png", price: 80, mrp: 100, discount: "5%", stockStatus: "in-stock", availability: true, quantityLeft: 25 },
      { name: "Orange", image: "orange.png", price: 50, mrp: 60, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
      { name: "Apple", image: "apple.png", price: 80, mrp: 100, discount: "10%", stockStatus: "in-stock", availability: true, quantityLeft: 30 },
      { name: "Banana", image: "banana.png", price: 40, mrp: 50, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 25 },
      { name: "Watermelon", image: "watermelon.png", price: 60, mrp: 70, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 20 }
    ]
  },

"Vegetables": {
    "Fresh Vegetables": [
      { name: "Spinach", image: "spinach.png", price: 30, mrp: 40, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 50 },
      { name: "Tomato", image: "tomato.png", price: 20, mrp: 25, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 70 },
      { name: "Onion", image: "onion.png", price: 15, mrp: 20, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 80 },
      { name: "Cabbage", image: "cabbage.png", price: 25, mrp: 30, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 60 },
      { name: "Cauliflower", image: "cauliflower.png", price: 35, mrp: 40, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 45 },
      { name: "Broccoli", image: "broccoli.png", price: 50, mrp: 60, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
      { name: "Carrot", image: "carrot.png", price: 25, mrp: 30, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 40 },
      { name: "Potato", image: "potato.png", price: 20, mrp: 25, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 60 },
      { name: "Cucumber", image: "cucumber.png", price: 30, mrp: 35, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 50 },
      { name: "Eggplant", image: "eggplant.png", price: 40, mrp: 50, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 35 },
      { name: "Beans", image: "beans.png", price: 45, mrp: 55, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
      { name: "Peas", image: "peas.png", price: 30, mrp: 40, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 50 },
      { name: "Pumpkin", image: "pumpkin.png", price: 35, mrp: 45, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 40 }
    ]
  },

    "Dairy & Eggs": {
      "Milk Products": [
        { name: "Milk", image: "freshmilk.png", price: 55, mrp: 60, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 18 },
        { name: "Cheese", image: "cheese.png", price: 150, mrp: 180, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 5 },
        { name: "Paneer", image: "paneer.png", price: 120, mrp: 150, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 8 },
        { name: "Curd", image: "curd.png", price: 60, mrp: 70, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 20 },
        { name: "Cream", image: "cream.png", price: 80, mrp: 90, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 15 },
        { name: "Butter Milk", image: "buttermilk.png", price: 50, mrp: 60, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 25 },
        { name: "Ghee", image: "ghee.png", price: 200, mrp: 250, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 10 },
        { name: "Butter", image: "butter.png", price: 100, mrp: 120, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 15 },
      ],
    },
  
  "Grocery": {
    "Snacks & Beverages": [
      { name: "Chips", image: "chips.png", price: 50, mrp: 60, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 100 },
      { name: "Cookies", image: "cookies.png", price: 80, mrp: 100, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 50 },  
      { name: "Chocolate", image: "chocolate.png", price: 100, mrp: 120, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
      { name: "Juice", image: "juice.png", price: 60, mrp: 70, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 80 },
      { name: "Tea", image: "tea.png", price: 40, mrp: 50, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 90 },
      { name: "Coffee", image: "coffee.png", price: 200, mrp: 250, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 20 },
      { name: "Soft Drinks", image: "soft-drinks.png", price: 30, mrp: 40, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 60 },
      { name: "Energy Drinks", image: "energy-drinks.png", price: 150, mrp: 180, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 25 },
      { name: "Mineral Water", image:"mineral-water.png", price : 20 , mrp :25 , discount :null , stockStatus :"in-stock" , availability :true , quantityLeft :100},
      { name: "Soda", image: "soda.png", price: 30, mrp: 35, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 80 },
    ],
  },

  "Household Items": {
    "Personal Care": [
      { name: "Shampoo", image: "shampoo.png", price: 150, mrp: 180, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
      { name: "Toothpaste", image: "toothpaste.png", price: 50, mrp: 60, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 40 },
      { name: "Soap", image: "soap.png", price: 30, mrp: 35, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 80 },
      { name: "Shaving Cream", image: "shavingcream.png", price: 100, mrp: 120, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 20 },
      { name: "Deodorant", image: "deodorant.png", price: 200, mrp: 250, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 10 },
      { name: "Perfume", image: "perfume.png", price: 300, mrp: 350, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 5 },
      { name: "Moisturizer", image: "moisturizer.png", price: 120, mrp: 150, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 15 },
      { name: "Sunscreen", image: "sunscreen.png", price: 150, mrp: 180, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 20 },
      { name: "Face Wash", image: "facewash.png", price: 80, mrp: 100, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
      { name: "Conditioner", image: "conditioner.png", price: 150, mrp: 180, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 }
      ]
  },


};

return (
  <div className="megs-store-page">
    <h1 className="store-title">🛒 {t('store.welcomeM')}</h1>
    <p className="store-subtitle">{t('store.subtitleM')}</p>

    {Object.entries(categories).map(([sectionTitle, categoryGroups]) => (
      <section key={sectionTitle} className="store-section">
        <h2 className="section-title">{t(`store.sections.${sectionTitle}`)}</h2>

        {Object.entries(categoryGroups).map(([category, items]) => (
          <div key={category} className="category-group">
            <h3 className="category-title">
              {t(`store.categories.${category}`, category)}
            </h3>
            <div className="product-grid">
              {items.map((item, index) => (
                <MEGsCard
                  key={`${category}-${index}`}
                  name={t(item.name)}
                  image={item.image}
                  price={item.price}
                  mrp={item.mrp}
                  discount={item.discount}
                  stockStatus={t(`${item.stockStatus}`)}
                  availability={t(`item.${item.availability}`)}
                  quantityLeft={item.quantityLeft}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    ))}
  </div>
);

};

export default MEGsStore;