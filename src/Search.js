import React,{Component} from "react";
import {Link} from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

class Search extends Component{
    state={
        query:'',
        newBooks:[]
    }

    handleSearch = event =>{
        const query = event.target.value;
        BooksAPI.search(query).then(response=>{

            if(!response['error']){
                this.setState(prevState => ({
                    newBooks: response,
                }))
            }else{
                this.setState(prevState => ({
                    newBooks: [],
                }))
            }
        }).catch(error=>{
            this.setState(prevState => ({
                newBooks: [],
            }))
        })
    }



    render(){
        const {newBooks} = this.state;
        const { books } = this.props
        let verifiedBooks =[];
        if(newBooks.length > 0){
            verifiedBooks = newBooks.map(book => {
                books.forEach(bookOnShelf => {
                    // check wether book is already on shelf
                    if (book.id === bookOnShelf.id) {
                        // if yes get the shelf data from BooksOnShelf
                        book.shelf = bookOnShelf.shelf;
                    }
                });
                return book;
            });
        }
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={this.handleSearch}
                            defaultValue={this.state.query}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <p style={{textAlign: 'center',}}>{verifiedBooks.length} book(s) found</p>
                    <ol className="books-grid">
                        {verifiedBooks.length > 0 && (verifiedBooks && (verifiedBooks.map((book, index) => {
                            return(
                                <Book key={book.id} data={book} id={index} onUpdateShelf={this.props.updateShelf}/>
                            )
                        })))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;