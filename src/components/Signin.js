import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import avatar from "../img/avatar.png"

export class Signin extends Component {
  render() {
    return (
      
      <div>
        <header>
            <div>
                <div className = "logo">JS BAND STORE / X-course task /</div>                           
            </div>
            <div className = "presentation"></div>  
        </header>
        <div className="sign-in-block">
          <img  className="avatar-image" src={avatar} alt="avatar" />
          <form className="signin-form">
            <input type="text" name="username" placeholder="Input your name, please" /><br/>        
            <Link to="BookList"><div className = "signin-button">Sign in</div></Link>
          </form>
        </div>        
      </div>      
    )
  }
}

export default Signin