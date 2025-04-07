import React from "react";
import "./PopularFreshProducts.css";
import { useTranslation } from "react-i18next";

const freshProducts = [
  {
    name: "Watermelon",
    image: "watermelon.png",
    weight: "1.5kg - 2.5kg",
    discount: "30%",
    mrp: 150,
    price: 105,
    stockStatus: "in-stock",
    availability: "12 left",
  },
  {
    name: "Cucumber - Seedless",
    image: "cucumber.png",
    weight: "500gm - 700gm",
    discount: "40%",
    mrp: 62,
    price: 37,
    stockStatus: "low-stock",
    availability: "12 left",
  },
  {
    name: "Pear - Packham",
    image: "pear.png",
    weight: "350gm - 400gm",
    discount: "18%",
    mrp: 218,
    price: 179,
    stockStatus: "sold-out",
    availability: "0 left",
  },
  {
    name: "Banana - Regular",
    image: "banana.png",
    weight: "500 Gm",
    discount: "30%",
    mrp: 64,
    price: 45,
    stockStatus: "in-stock",
    availability: "100 left",
  },
];

const PopularFreshProducts = () => {
  const { t } = useTranslation();

  return (
    <section className="popular-fresh-section">
      <h2 className="section-title">{t("freshProducts.title")}</h2>
      <div className="fresh-products-container">
        {freshProducts.map((item, index) => (
          <div className={`product-card-fresh ${item.stockStatus}`} key={index}>
            <span className="discount-badge">{item.discount} {t("freshProducts.off")}</span>
            <img src={item.image} alt={item.name} className="product-img" />
            <div className="weight-tag">{item.weight}</div>
            <p className="product-name">{t(`freshProducts.items.${item.name}`)}</p>

            <div className="stock-status">
              {item.stockStatus === "in-stock" && <span className="status-label in-stock">{t("freshProducts.inStock")}</span>}
              {item.stockStatus === "low-stock" && <span className="status-label low-stock">{t("freshProducts.lowStock")}</span>}
              {item.stockStatus === "sold-out" && <span className="status-label sold-out">{t("freshProducts.soldOut")}</span>}
            </div>

            <div className="availability-info">{item.availability}</div>

            <p className="mrp">{t("freshProducts.mrp")}: <s>Rs {item.mrp}</s></p>
            <p className="price">Rs. {item.price}</p>
            <p className="hurry-text">{t("freshProducts.hurryUp")}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularFreshProducts;
