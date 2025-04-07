import React from "react";
import { useTranslation } from "react-i18next";
import "./HEMsCard.css";

const HEMsCard = ({
  name,
  image,
  price,
  mrp,
  discount,
  stockStatus,
  availability,
  quantityLeft
}) => {
  const { t } = useTranslation();

  const discountValue = typeof discount === "string"
    ? parseFloat(discount.replace("%", ""))
    : discount;

  const discountedPrice = discountValue
    ? (price * (1 - discountValue / 100)).toFixed(2)
    : null;

  const isOutOfStock = stockStatus !== "in-stock" || !availability;
  const isLowStock = quantityLeft <= 5 && !isOutOfStock;

  return (
    <div className={`hems-card ${isOutOfStock ? "out-of-stock" : ""}`}>
      {discountValue && (
        <div className="discount-badge">
          {discountValue}% {t("product.off")}
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
        <h3 className="product-name">{name}</h3>

        <div className="product-meta">
          <span className="product-unit">{t("product.unit")}</span>
          {isLowStock && (
            <span className="low-stock-warning">{t("product.lowStock")}</span>
          )}
        </div>

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

        <div className={`stock-status ${isOutOfStock ? "out" : "in"}`}>
          {isOutOfStock
            ? t("product.outOfStock")
            : <>
                <span className="stock-indicator" />
                {quantityLeft} {t("product.available")}
              </>
          }
        </div>
      </div>
    </div>
  );
};

export default HEMsCard;
