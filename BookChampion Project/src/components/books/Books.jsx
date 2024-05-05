import { PropTypes } from "prop-types";
import BookItem from "../bookitem/BookItem";
import { useState } from "react";
import BookSearch from "../filter/BookSearch";

const Books = ({ bookArray }) => {

    const [bookTitleMessage, setBookTitleMessage] = useState("");
    const [filteredBookArray,setFilteredBookArray] = useState(bookArray);

    const buldFilteredBookArray = (filterValue) => {
        if (filterValue) {
            let auxiliarFilteredBookArray = bookArray.filter(book => book.bookTitle.toLowerCase().includes(filterValue));
            setFilteredBookArray(auxiliarFilteredBookArray);
        } else {
            setFilteredBookArray(bookArray);
        };
    };

    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <BookSearch 
                    onLinkValue={buldFilteredBookArray}
                />
                <p>{
                    bookTitleMessage
                    ? `Libro seleccionado: ${bookTitleMessage}.`
                    : `Aun no se ha seleccionado ningún libro.`
                    }
                </p>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
                {filteredBookArray.length > 0 
                    ? (
                        filteredBookArray.map(book => {
                            return <BookItem key={book.bookId}
                                id={book.bookId}
                                title={book.bookTitle}
                                author={book.bookAuthor}
                                rating={book.bookRating}
                                pageCount={book.pageCount}
                                imageUrl={book.imageUrl}
                                selectedBookTitle={setBookTitleMessage}
                            />
                        })
                    )
                    : (
                        <p>Ningún libro coincide con la búsqueda seleccionada</p>
                    )
                }
            </div>
        </div>
    );
};

Books.propTypes = {
    bookArray: PropTypes.array,
};

export default Books;