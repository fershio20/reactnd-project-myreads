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
            console.log(response);
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
        const newBooks = this.state.newBooks;
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.handleSearch} defaultValue={this.state.query}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <h1>hello - ? {newBooks.length}</h1>
                    <ol className="books-grid">
                        {newBooks.length > 0 && (
                            newBooks && (newBooks.map((book, index) => {
                                return(
                                    <Book key={book.id} data={book} id={index} onUpdateShelf={this.props.updateShelf}/>
                                )
                            }))
                        )}

                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;