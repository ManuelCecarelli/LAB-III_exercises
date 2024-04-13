import { PropTypes } from "prop-types";
import BookItem from "../bookitem/BookItem";

const Books = (props) => {

    return (
        <div className="d-flex justify-content-center flex-wrap">
            <BookItem
                title={props.bookArray[0].bookTitle}
                author={props.bookArray[0].bookAuthor}
                rating={props.bookArray[0].bookRating}
                pageCount={props.bookArray[0].pageCount}
                imageUrl={props.bookArray[0].imageUrl}
            />
            <BookItem
                title={props.bookArray[1].bookTitle}
                author={props.bookArray[1].bookAuthor}
                rating={props.bookArray[1].bookRating}
                pageCount={props.bookArray[1].pageCount}
                imageUrl={props.bookArray[1].imageUrl}
            />
            <BookItem
                title={props.bookArray[2].bookTitle}
                author={props.bookArray[2].bookAuthor}
                rating={props.bookArray[2].bookRating}
                pageCount={props.bookArray[2].pageCount}
                imageUrl={props.bookArray[2].imageUrl}
            />
            <BookItem
                title={props.bookArray[3].bookTitle}
                author={props.bookArray[3].bookAuthor}
                rating={props.bookArray[3].bookRating}
                pageCount={props.bookArray[3].pageCount}
                imageUrl={props.bookArray[3].imageUrl}
            />
        </div>
    );
};

Books.propTypes = {
    bookArray: PropTypes.array
    };

export default Books;