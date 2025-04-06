import React from "react";
import "./NAGsCard.css";

const NAGsCard = ({ 
  name, 
  image, 
  price, 
  mrp, 
  discount, 
  stockStatus, 
  availability, 
  quantityLeft 
}) => {
  // Calculate discounted price (handling both "5%" and 5 format)
  const discountValue = typeof discount === 'string' ? 
    parseFloat(discount.replace('%', '')) : 
    discount;
  const discountedPrice = discountValue ? 
    (price * (1 - discountValue / 100)).toFixed(2) : 
    null;
  
  const isOutOfStock = stockStatus !== "in-stock" || !availability;
  const isLowStock = quantityLeft <= 5 && !isOutOfStock;

  return (
    <div className={`nags-card ${isOutOfStock ? 'out-of-stock' : ''}`}>
      {/* Discount Badge */}
      {discountValue && (
        <div className="discount-badge">
          {discountValue}% OFF
        </div>
      )}

      {/* Product Image with fallback */}
      <div className="image-container">
        <img 
          src={image} 
          alt={name} 
          className="product-image"
          onError={(e) => {
            e.target.src = '/images/placeholder-product.png';
            e.target.className = 'product-image placeholder';
          }}
        />
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        
        <div className="product-meta">
          <span className="product-unit">1 Unit</span>
          {isLowStock && (
            <span className="low-stock-warning">Low Stock</span>
          )}
        </div>

        {/* Pricing Information */}
        <div className="pricing">
          {discountValue ? (
            <>
              <span className="original-price">₹{mrp.toFixed(2)}</span>
              <span className="current-price">₹{discountedPrice}</span>
            </>
          ) : (
            <span className="current-price">₹{price.toFixed(2)}</span>
          )}
        </div>

        {/* Stock Status */}
        <div className={`stock-status ${isOutOfStock ? 'out' : 'in'}`}>
          {isOutOfStock ? (
            'Out of Stock'
          ) : (
            <>
              <span className="stock-indicator"></span>
              {quantityLeft} Available
            </>
          )}
        </div>

        
        
      </div>
    </div>
  );
};

export default NAGsCard;