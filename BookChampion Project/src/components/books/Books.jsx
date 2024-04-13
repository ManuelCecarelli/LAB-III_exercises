import { PropTypes } from "prop-types";
import BookItem from "../bookitem/BookItem";

const Books = (props) => {

    return (
        <div className="d-flex justify-content-center flex-wrap">
            {props.bookArray.map(book => {
                return <BookItem key={props.bookArray.indexOf(book)}
                    title={book.bookTitle}
                    author={book.bookAuthor}
                    rating={book.bookRating}
                    pageCount={book.pageCount}
                    imageUrl={book.imageUrl}
                />
            })}
        </div>
    );
};

Books.propTypes = {
    bookArray: PropTypes.array
    };

export default Books;