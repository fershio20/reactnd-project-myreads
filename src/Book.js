import React, {Component} from "react";
import BookShelfChanger from "./BookShelfChanger";


/*const  typeShelf = [
    {value: 'currentlyReading', label: 'Currently Reading'},
    {value:'wantToRead', label: 'Want to Read'},
    {value:'read', label: 'Read', selected: ''},
    {value:'none', label: 'None'}
];*/

class Book extends Component{

    handleChange= (event)=>{
        const shelf = event.target.value;
        console.log(shelf);
        this.props.onUpdateShelf(this.props.data, shelf)
    }

    render(){
        const {data} = this.props;

        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128, height: 193,
                            backgroundImage: `url(${data.imageLinks ? data.imageLinks.smallThumbnail : ''})`
                        }}>
                        </div>
                        <BookShelfChanger data={data} handleChange={this.handleChange}/>

                        {/*<div className="book-shelf-changer">
                            <select defaultValue={data.shelf} onChange={this.handleChange}>
                                <option value="move" disabled>Move to...</option>
                                {categories.map((item, index)=> (
                                    <option key={index} value={item.value} > {item.label} </option>)
                                )}
                            </select>
                        </div>*/}
                    </div>
                    <div className="book-title" title={data.title}>
                        {data.title.length  > 25 ? data.title.substring(0, 25) + '...' : data.title}
                    </div>
                    <div className="book-authors">{data.authors ? data.authors.join(', ') :""}</div>
                </div>
            </li>
        );
    }
}

export default Book;