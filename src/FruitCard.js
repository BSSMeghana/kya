import React from "react";
import "./FruitCard.css";

const FruitCard = ({ name, image, price, mrp, discount, stockStatus, availability, quantityLeft }) => {
  // Calculate the discounted price if there is a discount
  const discountedPrice = discount ? (price * (1 - parseFloat(discount) / 100)).toFixed(2) : null;

  return (
    <div className="fruit-card">
      {/* Render the discount badge only if there's a discount */}
      {discount && discount !== "" && (
        <div className="discount-badge">
          <span>{discount} OFF</span>
        </div>
      )}

      <img src={image} alt={name} className="fruit-image" />

      <div className="fruit-details">
        <h3 className="fruit-name">{name}</h3>

        <div className="weight-badge">1 Kg</div>

        {/* Show MRP with strikethrough only for discounted fruits */}
        {discount ? (
          <p className="mrp">
            MRP: <span className="strikethrough">₹{mrp}</span>
          </p>
        ) : (
          <p className="mrp">
            MRP: ₹{mrp}
          </p>
        )}
        
        {/* Show the discounted price if there's a discount */}
        {discount ? (
          <p className="price">
            Price: <span className="price-value">₹{discountedPrice}</span>
          </p>
        ) : null}  {/* Don't show the price label if there's no discount */}
        
        <p className={`stock-status ${stockStatus === "in-stock" ? "in-stock" : "out-of-stock"}`}>
          {stockStatus === "in-stock" ? (availability ? `Available: ${quantityLeft} left` : "Out of stock") : "Out of stock"}
        </p>
      </div>
    </div>
  );
};

export default FruitCard;
