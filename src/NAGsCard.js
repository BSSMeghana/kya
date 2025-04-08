import React from "react";
import { useTranslation } from "react-i18next";
import "./NAGsCard.css";

const NAGsCard = ({
  name,
  image,
  price = 0,
  mrp = 0,
  discount = 0,
  stockStatus = "in-stock",
  availability = true,
  quantityLeft = 0
}) => {
  const { t } = useTranslation();

  // Normalize discount
  const discountValue =
    typeof discount === "string"
      ? parseFloat(discount.replace("%", ""))
      : discount;

  const discountedPrice = discountValue
    ? (price * (1 - discountValue / 100)).toFixed(2)
    : price.toFixed(2);

  // Normalize and determine stock logic
  const isOutOfStock = !(stockStatus?.toLowerCase() === "in-stock" && availability);

  const isLowStock = quantityLeft <= 2 && !isOutOfStock;

  return (
    <div className={`nags-card ${isOutOfStock ? "out-of-stock" : ""}`}>
      {discountValue > 0 && (
        <div className="discount-badge">
          {discountValue}% {t("off")}
        </div>
      )}

      <div className="image-container">
        <img
          src={image}
          alt={name}
          className="product-image"
          onError={(e) => {
            e.target.src = "/images/placeholder-product.png";
            e.target.className = "product-image placeholder";
          }}
        />
      </div>

      <div className="product-details">
        <h3 className="product-name">{t(`store.products.${name}`)}</h3>

        <div className="product-meta">
        <span className="product-unit">{`1 ${t("item.unit")}`}</span>
          {isLowStock && (
            <span className="low-stock-warning">{t("item.lowStock")}</span>
          )}
        </div>

        <div className="pricing">
          {discountValue > 0 ? (
            <>
              <span className="original-price">₹{mrp.toFixed(2)}</span>
              <span className="current-price">₹{discountedPrice}</span>
            </>
          ) : (
            <span className="current-price">₹{price.toFixed(2)}</span>
          )}
        </div>

        <div className={`stock-status ${isOutOfStock ? "out" : "in"}`}>
  {isOutOfStock ? (
    t("item.outOfStock") // Displays out of stock message
  ) : (
    <>
      <span className="stock-indicator" /> {/* This could be an icon or visual indicator */}
      {quantityLeft} {t("item.left")} {/* Shows quantity left */}
    </>
  )}


        </div>
      </div>
    </div>
  );
};

export default NAGsCard;
