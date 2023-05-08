import React, { Component } from 'react';
import Header from './Header';



export class ShowFullBook extends Component {
  //const [this.props.bookbook, setValue] = useState(this.state.fullBook);

  constructor(props) {
    super(props)
    this.state = {
        value: 1,  
        totalPrice: this.props.book.price,          
    }
  
  this.myRef = React.createRef();
  
}

const 

inputHandler = () => {
    let regexp = /^([1-3]?[\d]|4[0-2])$/;
    let regexpzero = /^0$/;
    let carrentValue = this.myRef.current.value;
    
     if ( (regexp.test(carrentValue))=== false || (regexpzero.test(carrentValue))=== true )  {
  
     console.log(regexp.test(carrentValue));
     //alert ("Input from 1 to 42");
     this.myRef.current.value=1;
     }
    
    else {
        this.setState({
          'value' : carrentValue
        });
    }
  };


  render() { 
    
    return (
      <div>
        <Header />
        <a href = "#/BookList">Back</a>
        <div className="show-full-book">
          <div>
            {/* BookID: {BookID} */}
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
            <input type="number" id="addToCartInput" name="tentacles" min="1" max="42" ref = {this.myRef} defaultValue={this.state.value} onChange = {this.inputHandler}></input>            
            <div className="total-price">Total price: $ {(this.props.book.price*this.state.value).toFixed(2)}</div>            
            <div className = "add-to-cart-button" onClick={() => {this.props.onAdd(this.props.book); this.props.book.value=this.state.value}}>Add to cart</div> 
          </div>
        </div>
        {/* {console.log(this.props.book)} */}
      </div>
    )

  }
}

export default ShowFullBook




// export default function ShowFullBook(props) {
//   let {BookID} = useParams();
//   return (
   
//             <div>
//               <Header />
//               <a href = "BookList#/BookList">Return back</a>
//               <a href = "BookList"></a>
//               <div className="show-full-book">
//                 <div>
//                    BookID: {BookID} 
//                   <img src = {props.book.image} alt={props.book.title}/>
//                   <div><span className="atribute">Book name: </span><span className = "atribute-meaning">{props.book.title}</span></div>
//                   <div><span className="atribute">Book author: </span><span className = "atribute-meaning">{props.book.author}</span></div>
//                   <div><span className="atribute">Book short description: </span>{props.book.shortDescription}</div>            
//                 </div>
//                 <div className = "price-count">
//                   <div>
//                     <span className="price">Price:  ${props.book.price}</span>
//                   </div>       
//                     {/* <Slider value="0" price={this.props.book.price}/>       */}
//                   <input type="number" id="addToCartInput" name="tentacles" min="0" max="42" defaultValue={value} onChange = {event => this.setState(({value}) => ({value: event.target.value} ))}></input>             
//                   <div className="total-price">Total price: $ {(props.book.price*state.value).toFixed(2)}</div>             
//                    <div className = "add-to-cart-button" onClick={() => {props.onAdd(props.book); props.book.value=state.value}}>Add to cart</div> 
//                 </div>
//               </div>
//               {console.log(props.book)}
//             </div>
//           )
  
// }
