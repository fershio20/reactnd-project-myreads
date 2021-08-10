import React from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css';
import Bookshelf from "./Bookshelf";
import Search from './Search'

class BooksApp extends React.Component {
    state = {
        books: [],
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then(books=>{
                this.setState(prevState=>({
                    books: books,
                }))
            })
    }

    updateShelf = (newBook, shelf) => {
        BooksAPI.update(newBook, shelf).then(response => {
                newBook['shelf'] = shelf;

                this.setState(prevState=>({
                    books: prevState.books.filter(book => book.id !== newBook.id ).concat(newBook)
                }))
            }
        )
    }



    render() {

        return (
            <div className="app">
                <Route exact path='/search' render={()=>(
                    <Search books={this.state.books} updateShelf={this.updateShelf}/>
                )} />
                <Route exact path='/' render={()=>(
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <Bookshelf shelf={this.state.shelf} onUpdateShelf={this.updateShelf} books={this.state.books}/>
                            </div>
                        </div>
                        <div className="open-search">
                            <Link to='/search'>Add a book</Link>
                        </div>
                    </div>
                )} />

            </div>
        )
    }
}

export default BooksApp
