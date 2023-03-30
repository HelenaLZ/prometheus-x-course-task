import React, { Component } from 'react'

export class Orders extends Component {
  render() {
    return (
      <div className="book">
        <img src = {this.props.book.image} alt={this.props.book.title} />
        <div><span className="atribute">Book name: </span><span className = "atribute-meaning">{this.props.book.title}</span></div>
        <div><span className="atribute">Book author: </span><span className = "atribute-meaning">{this.props.book.author}</span></div>        				
		<div><span className="price">Price:  ${this.props.book.price}</span></div>
    <div><span className="atribute">Quantity: </span><span className = "atribute-meaning">{this.props.book.value}</span></div>
      </div>
    )
  }
}

export default Orders