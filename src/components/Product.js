import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";

export const Product = ({ id, title, price, rating, image }) => {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="ProductImage" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};
