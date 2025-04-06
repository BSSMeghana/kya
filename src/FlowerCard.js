import React from "react";
import "./FlowerCard.css";

const FlowerCard = ({ name, image, price, mrp, discount, stockStatus, availability, quantityLeft }) => {
  // Calculate the discounted price if there is a discount
  const discountedPrice = discount ? (price * (1 - parseFloat(discount) / 100)).toFixed(2) : null;

  return (
    <div className="flower-card">
      {/* Render the discount badge only if there's a valid discount */}
      {discount && !isNaN(parseFloat(discount)) && (
        <div className="discount-badge">
          <span>{discount} OFF</span>
        </div>
      )}

      <img src={image} alt={name} className="flower-image" />

      <div className="flower-details">
        <h3 className="flower-name">{name}</h3>

        {/* Show MRP with strikethrough if there's a discount */}
        <p className="mrp">
          MRP: {discount ? <span className="strikethrough">₹{mrp}</span> : `₹${mrp}`}
        </p>

        {/* Show the discounted price if there's a discount */}
        {discount ? (
          <p className="price">
            Price: <span className="price-value">₹{discountedPrice}</span>
          </p>
        ) : (
          // If there's no discount, show the regular price
          <p className="price">
            Price: ₹{price}
          </p>
        )}

        <p className={`stock-status ${stockStatus === "in-stock" ? "in-stock" : "out-of-stock"}`}>
          {stockStatus === "in-stock" && availability
            ? `Available: ${quantityLeft} left`
            : "Out of stock"}
        </p>
      </div>
    </div>
  );
};

export default FlowerCard;
