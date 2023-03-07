import React from 'react'
import cart from "../img/cart.svg"
import Header from './Header'





export default function PurchaseCompleteScreen() {
  

  return (
    <div>
    <Header />
    <div className="purchase-complete-screen">
     <div className = "purchase-button">Purchase</div>
        <div>
          <img src={cart} alt="cart" className="cart-button" />
        </div>
          Cart empty...      
      </div>
   </div>
  )
}