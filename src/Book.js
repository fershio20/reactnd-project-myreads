import React, {Component} from "react";


const  categories = [
    {value: 'currentlyReading', label: 'Currently Reading'},
    {value:'wantToRead', label: 'Want to Read'},
    {value:'read', label: 'Read', selected: ''},
    {value:'none', label: 'None'}
];

class Book extends Component{

    handleChange= (event)=>{
        const shelf = event.target.value;

        this.props.onUpdateShelf(this.props.data, shelf)
    }
    render(){
        const {data} = this.props
        return(

                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${data.imageLinks.smallThumbnail })`
                        }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select defaultValue={data.shelf} onChange={this.handleChange}>
                                <option value="move" disabled>Move to...</option>
                                {categories.map((item, index)=> (
                                    <option key={index} value={item.value} > {item.label} </option>)
                                )}
                            </select>
                        </div>

                    </div>
                    <div className="book-title">{data.title} - <strong>{data.shelf}</strong></div>
                    <div className="book-authors">{data.authors[0]}</div>
                </div>

        );
    }
}

export default Book;