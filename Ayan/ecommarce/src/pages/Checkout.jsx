import React from 'react'
import './styles/checkout.css'
import Features from '../components/Features'
import CartHeader from '../components/CartHeader'
import BillingDetails from '../components/BillingDetails'
import OrderSummary from '../components/OrderSummary'
const Checkout = () => {
  return (
    <div>
      <CartHeader/>
      <div className="checkout-section">
      <BillingDetails />
      <OrderSummary/>
      </div>
      <Features/>
       
    </div>
  )
}

export default Checkout