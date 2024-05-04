import { PropTypes } from "prop-types";
import BookItem from "../bookitem/BookItem";
import { useState } from "react";
import BookSearch from "../filter/BookSearch";

const Books = ({ bookArray }) => {

    const [bookTitleMessage, setBookTitleMessage] = useState("");

    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <BookSearch/>
                <p>{
                    bookTitleMessage
                    ? `Libro seleccionado: ${bookTitleMessage}.`
                    : `Aun no se ha seleccionado ningún libro.`
                    }
                </p>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
                {bookArray.map(book => {
                    return <BookItem key={book.bookId}
                        id={book.bookId}
                        title={book.bookTitle}
                        author={book.bookAuthor}
                        rating={book.bookRating}
                        pageCount={book.pageCount}
                        imageUrl={book.imageUrl}
                        selectedBookTitle={setBookTitleMessage}
                    />
                })}
            </div>
        </div>
    );
};

Books.propTypes = {
    bookArray: PropTypes.array
    };

export default Books;