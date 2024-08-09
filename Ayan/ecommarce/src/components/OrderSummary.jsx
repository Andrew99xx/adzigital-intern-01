import React from 'react';
import './style/orderSummary.css';

const OrderSummary = () => {
  return (
    <div className="order-summary">
      <h2 className="order-summary-title">Product</h2>
      <ul className="order-summary-list">
        <li className="order-summary-item">
          <span className="product-name">Asgard sofa × 1</span>
          <span className="product-price">Rs. 250,000.00</span>
        </li>
      </ul>
      <div className="order-summary-total">
        <div className="subtotal">
          <span>Subtotal</span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span className="total-price">Rs. 250,000.00</span>
        </div>
      </div>
      <div className="payment-methods">
        <label>
          <input type="radio" name="paymentMethod" checked />
          Direct Bank Transfer
        </label>
        <p className="payment-description">
          Make your payment directly into our bank account...
        </p>
        <label>
          <input type="radio" name="paymentMethod" />
          Cash on Delivery
        </label>
      </div>
      <button type="submit" className="place-order-button">Place order</button>
    </div>
  );
};

export default OrderSummary;
