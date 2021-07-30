import React, {Component} from "react";
import BookShelfChanger from "./BookShelfChanger";


class Book extends Component{
    state={
        name: 'To kill a Mockingbird!',
        author: 'Harper Lee-san',
        cover: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
    }
    render(){
        const {data} = this.props
        return(
            <li key={this.props.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${data.imageLinks.smallThumbnail })`
                        }}>
                        </div>
                        <BookShelfChanger />

                    </div>
                    <div className="book-title">{data.title}</div>
                    <div className="book-authors">{this.state.author}</div>
                </div>
            </li>
        );
    }
}

export default Book;