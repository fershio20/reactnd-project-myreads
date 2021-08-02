import React, {Component} from "react";


const  categories = [
    {
        value: 'currentlyReading',
        label: 'Currently Reading'
    },
    {value:'wantToRead', label: 'Want to Read'},
    {value:'read', label: 'Read', selected: ''},
    {value:'none', label: 'None'}];

class Book extends Component{
    state={
        name: 'To kill a Mockingbird!',
        author: 'Harper Lee-san',
        cover: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
    }

    handleChange= (event)=>{
        const value = event.target.value;
        console.log(value);
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