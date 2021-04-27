import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { imageUrl, name, quantity, price } }) => (
  <div className="checkout-item">
    <img src={imageUrl} alt="item" className="image-container" />
    <div className="name">{name}</div>
    <div className="quantity">{quantity}</div>
    <div className="price">{price}</div>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
