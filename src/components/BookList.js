import React, { Component } from 'react'
import SpecificBook from './SpecificBook'
import Header from './Header'

export class BookList extends Component {
  render() {
    return (
      <div><Header /><br/>
      <main>
        
       {this.props.books.map(el =>(
           <SpecificBook onShowBook = {this.props.onShowBook} key = {el.id} book = {el} />
        ))}
      </main>
      </div>
    )
  }
}

export default BookList