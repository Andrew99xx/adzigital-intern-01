import React from 'react'
import './styles/checkout.css'
import Features from '../components/Features'
 import BillingDetails from '../components/BillingDetails'
import OrderSummary from '../components/OrderSummary'
import Breadcrumb from '../components/Breadcrumb'


const Checkout = () => {
  return (
    <div>
      <Breadcrumb pageName={"Checkout"}/>

        <div className="checkout-section">
          <BillingDetails />
          <OrderSummary/>
        </div>
       <Features/>
    </div>
  )
}

export default Checkout