import { PropTypes } from "prop-types";
import { Card, Button } from "react-bootstrap";
import FiveStars from "../fiveStars/FiveStars";

const BookItem = ({ id, title, author, rating, pageCount, imageUrl, selectedBookTitle }) => {

    const onClickButtonHandler = () => {
        selectedBookTitle(title);
    }
    
    return (
        <Card className="mx-3 mb-4" style={{width: "22rem"}}>
            <Card.Img
                height={400}
                variant="top"
                src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{author}</Card.Subtitle>
                <div>Id: {id}</div>
                {rating.length
                    ? <FiveStars scoreArray={rating}/>
                    : <div>Puntaje: No se ha especificado</div>
                }
                <p>{pageCount} páginas</p>
                <Button onClick={onClickButtonHandler}>Seleccionar libro</Button>
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
    imageUrl: PropTypes.string,
    selectedBookTitle: PropTypes.func
};

export default BookItem;
