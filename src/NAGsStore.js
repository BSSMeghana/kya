import React from "react";
import "./NAGsStore.css";
import NAGsCard from "./NAGsCard";

const categories = { 
  "Fresh Flowers": {
    "Popular Flowers": [
      { name: "Red Roses", image: "redrose.png", price: 50, mrp: 70, discount: "5%", stockStatus: "in-stock", availability: true, quantityLeft: 20 },
      { name: "White Roses", image: "whiterose.png", price: 60, mrp: 80, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 10 },
      { name: "Pink Roses", image: "pinkrose.png", price: 55, mrp: 75, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 15 },
      { name: "Yellow Roses", image: "yellowrose.png", price: 45, mrp: 65, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 12 },
      { name: "Tulip", image: "tulip.png", price: 90, mrp: 110, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 15 },
      { name: "Jasmine", image: "jasmine.png", price: 55, mrp: 70, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 25 },
      { name: "Hibiscus", image: "hibiscus.png", price: 70, mrp: 85, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 10 },
      { name: "Chrysanthemum", image: "chrysanthemum.png", price: 85, mrp: 100, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 18 },
      { name: "Marigold", image: "marigold.png", price: 40, mrp: 50, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
      { name: "Lotus", image: "lotus.png", price: 120, mrp: 150, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 5 },
      { name: "Sannajaji", image: "sannajaji.png", price: 30, mrp: 40, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 50 },
    ],
    "Exotics Flowers": [
      { name: "Lilly", image: "lilly.png", price: 75, mrp: 90, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 12 },
      { name: "Orchid", image: "orchid.png", price: 120, mrp: 150, discount: "15%", stockStatus: "in-stock", availability: true, quantityLeft: 5 },
      { name: "Daisy", image: "daisy.png", price: 40, mrp: 50, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
      { name: "Lavender", image: "lavender.png", price: 100, mrp: 120, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 20 },
      { name: "Sunflower", image: "sunflower.png", price: 65, mrp: 80, discount: "10%", stockStatus: "in-stock", availability: true, quantityLeft: 8 },
    ]
  },
  "Fresh Fruits": {
    "Popular Fruits": [
      { name: "Mango", image: "mango.png", price: 100, mrp: 120, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 15 },
      { name: "Pineapple", image: "pineapple.png", price: 70, mrp: 90, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 20 },
      { name: "Grapes", image: "grapes.png", price: 80, mrp: 100, discount: "5%", stockStatus: "in-stock", availability: true, quantityLeft: 25 },
      { name: "Orange", image: "orange.png", price: 50, mrp: 60, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
      { name: "Apple", image: "apple.png", price: 80, mrp: 100, discount: "10%", stockStatus: "in-stock", availability: true, quantityLeft: 30 },
      { name: "Banana", image: "banana.png", price: 40, mrp: 50, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 25 },
      { name: "Watermelon", image: "watermelon.png", price: 60, mrp: 70, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 20 },
      { name: "Pear", image: "pear.png", price: 90, mrp: 110, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 18 }
   
    ],
    "Exoctic Fruits": [
      { name: "Dragon Fruit", image: "dragonfruit.png", price: 150, mrp: 180, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 10 },
      { name: "Kiwi", image: "kiwi.png", price: 120, mrp: 150, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 12 },
      { name: "Avocado", image: "avocado.png", price: 200, mrp: 250, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 8 },
      { name: "Blueberry", image: "blueberry.png", price: 180, mrp: 220, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 15 },
      { name: "Strawberry", image: "strawberry.png", price: 120, mrp: 150, discount: "15%", stockStatus: "in-stock", availability: true, quantityLeft: 10 },
      { name: "cranberry", image: "cranberry.png", price: 150, mrp: 180, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 8 }
    ]
  },
  "Dairy & Eggs": {
    "Milk Products": [
      { name: " Fresh Milk", image: "freshmilk.png", price: 55, mrp: 60, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 18 },
      { name: "Almond Milk", image: "almondmilk.png", price: 90, mrp: 100, discount: "5%", stockStatus: "in-stock", availability: true, quantityLeft: 12 },
      { name: "Soy Milk", image: "soymilk.png", price: 80, mrp: 90, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 15 },
      { name: "Coconut Milk", image: "coconutmilk.png", price: 100, mrp: 120, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 10 },
      { name: "Cheese", image: "cheese.png", price: 150, mrp: 180, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 5 },
      { name: "Paneer", image: "paneer.png", price: 120, mrp: 150, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 8 },
      { name: "Curd", image: "curd.png", price: 60, mrp: 70, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 20 },
      { name: "Cream", image: "cream.png", price: 80, mrp: 90, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 15 },
      { name: "Butter Milk", image: "buttermilk.png", price: 50, mrp: 60, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 25 },
      { name: "Ghee", image: "ghee.png", price: 200, mrp: 250, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 10 },
      { name: "Butter", image: "butter.png", price: 100, mrp: 120, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 15 },
      { name: "Yogurt", image: "yogurt.png", price: 70, mrp: 80, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 20 },

    ],
    "Eggs & Meat": [
      { name: "Chicken Eggs", image: "chickeneggs.png", price: 50, mrp: 60, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
      { name: "Fish", image: "fish.png", price: 200, mrp: 250, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 10 },
      { name: "Chicken", image: "chicken.png", price: 150, mrp: 180, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 8 },
      { name: "Beef", image: "beef.png", price: 300, mrp: 350, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 5 },
      { name: "Pork", image: "pork.png", price: 250, mrp: 280, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 10 }
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
    { name: "Pumpkin", image: "pumpkin.png", price: 35, mrp: 45, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 40 },
  ]
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
      { name: "Soda", image: "soda.png", price: 30, mrp: 35, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 80 }
    ],
  },
  "Ready to eat": {
    "Breads & Rolls": [
      { name: "Bread", image: "white-bread.png", price: 20, mrp: 25, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 100 },
      { name: "Croissant", image: "croissant.png", price: 15, mrp: 20, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 40 },
      { name: "Chocolate Cake", image: "chocolatecake.png", price: 200, mrp: 250, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 10 },
      { name: "Apple Pie", image: "applepie.png", price: 150, mrp: 180, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 5 },
      { name: "Sandwich", image: "sandwich.png", price: 50, mrp: 60, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
      { name: "Pancakes", image: "pancakes.png", price: 100, mrp: 120, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 15 },
      { name: "Waffles", image: "waffles.png", price: 80, mrp: 100, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 20 },
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
  "Household Items": {
    "Cleaning Supplies": [
      { name: "Dish Soap", image: "dishsoap.png", price: 30, mrp: 35, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 80 },
      { name: "Laundry Detergent", image: "laundrydetergent.png", price: 200, mrp: 220, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 50 },
      { name: "All Purpose Cleaner", image: "cleaner.png", price: 150, mrp: 180, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 }, 
      { name: "Bathroom Cleaner", image: "bathroomcleaner.png", price: 60, mrp: 70, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 25 },
      { name: "Trash Bags", image: "trashbags.png", price: 50, mrp: 60, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 100 },
      { name: "Sponges", image: "sponges.png", price: 20, mrp: 25, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 90 },
      { name: "Broom", image: "broom.png", price: 40, mrp: 50, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 60 },
      { name: "Mop", image: "mop.png", price: 80, mrp: 100, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 40 },

    ],
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
      { name: "Body Lotion", image: "bodylotion.png", price: 100, mrp: 120, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 25 },
      { name: "Lip Balm", image: "lipbalm.png", price: 50, mrp: 60, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 40 },
      { name: "Hand Wash", image: "handwash.png", price: 30, mrp: 35, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 80 },
      { name: "Conditioner", image: "conditioner.png", price: 150, mrp: 180, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 30 },
      { name: "Face Cream", image: "facecream.png", price: 100, mrp: 120, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 20 },
      { name: "Eye Cream", image: "eyecream.png", price: 200, mrp: 250, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 10 },
      { name: "Nail Polish", image: "nailpolish.png", price: 80, mrp: 100, discount: null, stockStatus: "in-stock", availability: true, quantityLeft: 40 },
    ]
  }
};

const NAGsStore = () => {
  return (
    <div className="nags-store-page">
      <h1 className="store-title">🛒 Welcome to NAG's Grocery</h1>
      <p className="store-subtitle">Fresh Products, Everyday Discounts!</p>

      {Object.entries(categories).map(([sectionTitle, categoryGroups]) => (
        <section key={sectionTitle} className="store-section">
          <h2 className="section-title">{sectionTitle}</h2>
          {Object.entries(categoryGroups).map(([category, items]) => (
            <div key={category} className="category-group">
              <h3 className="category-title">{category}</h3>
              <div className="product-grid">
                {items.map((item, index) => (
                  <NAGsCard 
                    key={`${category}-${index}`} 
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    mrp={item.mrp}
                    discount={item.discount}
                    stockStatus={item.stockStatus}
                    availability={item.availability}
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

export default NAGsStore;