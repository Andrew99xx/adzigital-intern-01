import React from 'react'
import './styles/cart.css'
import cartb from '../assets/cart-b.png'
import CartHeader from '../components/CartHeader'
import Features from '../components/Features'
const Cart = () => {
  return (
    <div className='cart-section'>

            {/* <div className="cart-section-breadcrumbs">

                <div className="cart-section-breadcrumbs-mid-logo">
                    <div className="cart-section-breadcrumbs-logo">
                        
                    </div>
                    <div className="cart-section-breadcrumbs-title">
                            <h1>Cart</h1>
                            <h1>Home "{'>'}" Cart</h1>

                    </div>

                </div>
                <img src={cartb} alt="" />



            </div> */}
            <CartHeader/>
        <div className="cart-section-wrapper">
            <div className="cart-section-wrapper-left">
                <div className="cart-section-wrapper-left-heading">
                    <p>Product</p>
                    <p>price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
                
            </div>
            <div className="cart-section-wrapper-right">
                <h4>Cart Totals</h4>
                <div className="cart-section-wrapper-right-calculation">
                    <div className="cart-section-wrapper-right-calculation-sub-total">
                        <h6 className='cart-h6'>Subtotal</h6>
                        <p>Rs. 250,000.00</p>
                    </div>
                    
                    <div className="cart-section-wrapper-right-calculation-discount">
                        <h6 className='cart-h6'>Discount</h6>
                        <p>25487965</p>
                    </div>
                    <hr />

                    <div className="cart-section-wrapper-right-calculation-total">
                        <h6 className='cart-h6'>Total</h6>
                        <p>Rs. 250,000.00</p>
                    </div>
                </div>
                <div className="cart-section-wrapper-right-checkout">
                    <button className='cart-checkout-btn'>Check Out</button>
                </div>

            </div>
            

        </div>
            <Features/>
    </div>
  )
}

export default Cart
