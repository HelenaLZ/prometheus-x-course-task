import React, { useState } from 'react'
import cart from "../img/cart.svg"
import avatar from "../img/avatar.png"
import { Link } from 'react-router-dom';


export default function Header() {  

  return (
    <header>
            <div>
                <div className = "logo">JS BAND STORE / X-course task / Olena Zaiets</div> 
                <nav>                                     
                 {/* <Link to="cart"><div><img src={cart} alt="cart" className="cart-button" onClick={() => setCartOpen(cartOpen = !cartOpen)}/></div></Link> */}
                 {/* {cartOpen && (
                  <div className = "shop-cart"></div>
                 )} */}
                 <Link to="/cart"><img src={cart} alt="cart" className="cart-button" /></Link>
                  <Link to = "/"><div className = "signout-button">Sign Out</div></Link>
                  <div><img src={avatar} alt="avatar-logo" /></div>
                  <div className = "username">Username</div>
                </nav>               
            </div>
            <div className = "presentation"></div>  
    </header>
  )
}
