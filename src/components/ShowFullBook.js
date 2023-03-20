import React, { Component } from 'react'
import Header from './Header'
import Slider from './Slider'

export class ShowFullBook extends Component {
  //const [this.props.bookbook, setValue] = useState(this.state.fullBook);

  constructor(props) {
    super(props)
    this.state = {
        value: 1,        
    }
  }




  render() {
    return (
      <div>
        <Header />
        <div className="show-full-book">
          <div>
            <img src = {this.props.book.image} alt={this.props.book.title}/>
            <div><span className="atribute">Book name: </span><span className = "atribute-meaning">{this.props.book.title}</span></div>
            <div><span className="atribute">Book author: </span><span className = "atribute-meaning">{this.props.book.author}</span></div>
            <div><span className="atribute">Book short description: </span>{this.props.book.shortDescription}</div>            
          </div>
          <div className = "price-count">
            <div>
              <span className="price">Price:  ${this.props.book.price}</span>
            </div>       
              {/* <Slider value="0" price={this.props.book.price}/>       */}
            <input type="number" id="addToCartInput" name="tentacles" min="0" max="6" defaultValue={this.state.value} onChange = {event => this.setState(({value}) => ({value: event.target.value}))}></input>            
            <div className="total-price">Total price: $ {(this.props.book.price*this.state.value).toFixed(2)}</div>            
            <div className = "add-to-cart-button" onClick={() => this.props.onShowBook(this.props.book)}>Add to cart</div> 
          </div>
        </div>
      </div>
    )
  }
}

export default ShowFullBook