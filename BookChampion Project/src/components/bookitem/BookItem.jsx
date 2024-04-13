import { PropTypes } from "prop-types";

const BookItem = ({ title, author, rating, pageCount }) => {

    return (
        <>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <div>{rating?.length} estrellas</div>
            <p>{pageCount} páginas</p>
        </>
    );
};

BookItem.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pageCount: PropTypes.number,
    rating: PropTypes.array,
    };

export default BookItem;