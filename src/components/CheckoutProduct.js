import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutProduct.css";

export const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [, dispatch] = useStateValue();

  const handleRemove = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={handleRemove}>Remove from basket</button>
      </div>
    </div>
  );
};
