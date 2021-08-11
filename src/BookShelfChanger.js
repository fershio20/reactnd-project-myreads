import React from "react";

const  categories = [
    {value: 'currentlyReading', label: 'Currently Reading'},
    {value:'wantToRead', label: 'Want to Read'},
    {value:'read', label: 'Read', selected: ''},
    {value:'none', label: 'None'}]

function BookShelfChanger(props){
    const {data, handleChange} = props;
    
    return(
        <div className="book-shelf-changer">
            <select defaultValue={data.shelf} onChange={handleChange}>
                <option value="move" disabled>Move to...</option>
                {categories.map((item, index)=> (
                    <option key={index} value={item.value} > {item.label} </option>)
                )}
            </select>
        </div>
    );

}

export default BookShelfChanger;