import { PropTypes } from "prop-types";
import BookItem from "../bookitem/BookItem";
import { useState } from "react";
import BookSearch from "../filter/BookSearch";
import EliminarLibro from "../eliminarLibro/EliminarLibro";

const Books = ({ bookArray }) => {
  const [filteredBookArray, setFilteredBookArray] = useState(bookArray);
  const [modalShow, setModalShow] = useState(false);

  const buldFilteredBookArray = (filterValue) => {
    if (filterValue) {
      let auxiliarFilteredBookArray = bookArray.filter((book) =>
        book.bookTitle.toLowerCase().includes(filterValue)
      );
      setFilteredBookArray(auxiliarFilteredBookArray);
    } else {
      setFilteredBookArray(bookArray);
    }
  };

  const modalShowHandler = () => {
    if (modalShow) {
      setModalShow(false);
    } else {
      setModalShow(true);
    }
  };

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <BookSearch onLinkValue={buldFilteredBookArray} />
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        {filteredBookArray.length > 0 ? (
          filteredBookArray.map((book) => {
            return (
              <BookItem
                key={book.bookId}
                id={book.bookId}
                title={book.bookTitle}
                author={book.bookAuthor}
                rating={book.bookRating}
                summary={book.summary}
                pageCount={book.pageCount}
                imageUrl={book.imageUrl}
                onModalShowHandler={modalShowHandler}
              />
            );
          })
        ) : (
          <p>Ningún libro coincide con la búsqueda seleccionada</p>
        )}
      </div>
      <EliminarLibro show={modalShow} onModalShowHandler={modalShowHandler} />
    </div>
  );
};

Books.propTypes = {
  bookArray: PropTypes.array,
};

export default Books;
