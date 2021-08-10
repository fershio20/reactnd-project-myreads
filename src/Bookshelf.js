import React, {Component} from 'react';
import Book from './Book';


class Bookshelf extends Component{
    state={
        shelfCategories:[
            {
                type: 'currentlyReading',
                label: 'Currently Reading'
            },
            {
                type: 'read',
                label: 'Read'
            },
            {
                type: 'wantToRead',
                label: 'Want to Read'
            }
        ]
    }
    render(){
        const {books, onUpdateShelf} = this.props
        const data = this.state.shelfCategories;
        return (
            <div>
                {data.map((shelf, index)=>{
                    return(
                        <div className="bookshelf" key={index}>
                            <h2 className="bookshelf-title">{shelf.label}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.map((book, index)=>{
                                        if(book.shelf && (book.shelf === shelf.type)){
                                            return(<Book key={book.id} data={book} id={index} onUpdateShelf={onUpdateShelf}/>)
                                        }else{
                                            return('');
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