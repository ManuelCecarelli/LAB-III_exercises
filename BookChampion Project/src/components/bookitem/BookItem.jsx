import { PropTypes } from "prop-types";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";

const BookItem = ({ id, title, author, rating, pageCount, imageUrl }) => {
    const [bookTitle,setBookTitle] = useState(title);

    const clickHandler = () => {
        setBookTitle("Actualizado");
    };

    return (
        <Card className="mx-3" style={{width: "22rem"}}>
            <Card.Img
                height={400}
                variant="top"
                src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
            />
            <Card.Body>
                <Card.Title>{bookTitle}</Card.Title>
                <Card.Subtitle>{author}</Card.Subtitle>
                <div>Id: {id}</div>
                <div>{rating?.length} estrellas</div>
                <p>{pageCount} páginas</p>
                <Button onClick={clickHandler}>Actualizar título</Button>
            </Card.Body>
        </Card>
    );
};

BookItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    pageCount: PropTypes.number,
    rating: PropTypes.array,
    imageUrl: PropTypes.string
    };

export default BookItem;
