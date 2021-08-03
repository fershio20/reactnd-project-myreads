import React, {Component} from 'react';
import Book from './Book';


class Bookshelf extends Component{
    render(){
        const {shelf, books, onUpdateShelf} = this.props
        return (
            <div>
                {shelf.map((shelf, index)=>{
                    return(
                        <div className="bookshelf" key={index}>
                            <h2 className="bookshelf-title">{shelf}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.map((book, index)=>{
                                        if(book.shelf && (book.shelf === shelf)){
                                            return(
                                                <li key={book.id}>
                                                    <Book data={book} id={index} onUpdateShelf={onUpdateShelf}/>
                                                </li>
                                            )
                                        }
                                    })}
                                </ol>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export  default  Bookshelf;