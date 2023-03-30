import React from 'react'
import cart from "../img/cart.svg"
import Header from './Header'
import Orders from './Orders'

const showOrders = (props) => {
  return (<div>
    <div className = "purchase-button">Purchase</div>  
     {props.orders.map(el => (
            <Orders key={el.id} book={el}/>
          ))}    
  </div>)
}


const showNothing = () => {
 return (<div className="purchase-complete-screen">
    <img src={cart} alt="cart" className="cart-button" />
    <div>Cart empty...</div> 
  </div>)
}

export default function PurchaseCompleteScreen(props) {   

  return (
    <div>
      <Header />     
            
        {props.orders.length > 0 ?
        showOrders(props) : showNothing()}        
    </div>
  )
}