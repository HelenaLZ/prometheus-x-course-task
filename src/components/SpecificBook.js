import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SpecificBook extends Component {



  render() {
    return (
      <div className = "book">
        <img src = {this.props.book.image} alt={this.props.book.title} />
        <div><span className="atribute">Book name: </span><span className = "atribute-meaning">{this.props.book.title}</span></div>
        <div><span className="atribute">Book author: </span><span className = "atribute-meaning">{this.props.book.author}</span></div>
		<div><span className="atribute">Book short description: </span>{this.props.book.shortDescription}</div>		
		<div><span className="price">Price:  ${this.props.book.price}</span></div>
        {/* <Link to={this.props.book.id.toString()}><div className = "view-button" onClick={() => this.props.onShowBook()}>View</div></Link>  */}
        
        <Link to={this.props.book.id.toString()}><div className = "view-button" onClick={() => this.props.onShowBook(this.props.book)}>View</div></Link> 
    </div>
   
    )
  }
}

export default SpecificBook