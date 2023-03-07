import React from "react"
import {Route, Routes} from "react-router-dom"
//import Header from "./components/Header"
import Footer from "./components/Footer"
import BookList from "./components/BookList"
//import PurchaseCompleteScreen from "./components/PurchaseCompleteScreen"
//import ErrorPage from "./components/ErrorPage"
import Signin from "./components/Signin"
import ShowFullBook from "./components/ShowFullBook"
import Books from "./misc/BooksData"
import PurchaseCompleteScreen from "./components/PurchaseCompleteScreen"






class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        orders: [],

        books: Books,

        
        fullBook: {}
       
    }

    this.addToOrder = this.addToOrder.bind(this)
    this.onShowBook = this.onShowBook.bind(this)
    
    
  }

  render() {
    return (
      <div className="wrapper">        
        <Routes>        
         <Route path="/" element={<Signin/>} /> 
         <Route path="BookList" element ={<BookList   onShowBook = {this.onShowBook}  books = {this.state.books} />} /> 
         <Route path = "BookList/:BookID" element = {<ShowFullBook book = {this.state.fullBook}/>}/> 
         <Route path="/cart" element={<PurchaseCompleteScreen/>} /> 
        </Routes> 
         {/* <BookList onShowBook = {this.onShowBook} books = {this.state.books} />          
         {this.state.showFullBook && <ShowFullBook book = {this.state.fullBook}/>} */}
        <Footer /> 
        
        
       
      </div> 
    );
  }

   onShowBook(book) {
    this.setState({fullBook: book})
    
   }

   addToOrder(book) {
     this.setState({ orders: [...this.state.orders, book] })
  }

 
}


export default App;
