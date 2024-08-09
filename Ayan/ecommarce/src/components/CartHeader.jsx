import React from 'react';
import './style/CartHeader.css'; // Create this CSS file for styling

import cartblogo from '../assets/cart-b-logo.png'
const CartHeader = () => {
    return (
        <div className="cart-header">
            <div className="cart-overlay">
                <div className="cart-content">
                    <div className="cart-icon">
                        {/* Add your cart icon here if you have one */}
                        <img src={cartblogo} alt="Cart Icon" />
                    </div>
                    <h1 className="cart-title">Cart</h1>
                    <p className="breadcrumb">
                        <span>Home</span> &gt; <span>Cart</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CartHeader;
