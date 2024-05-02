import { PropTypes } from "prop-types";
import BookItem from "../bookitem/BookItem";

const Books = ({ bookArray }) => {

    return (
        <div className="d-flex justify-content-center flex-wrap">
            {bookArray.map(book => {
                return <BookItem key={book.id}
                    id={book.id}
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