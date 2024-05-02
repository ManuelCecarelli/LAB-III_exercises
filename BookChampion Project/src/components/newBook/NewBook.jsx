import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

const NewBook = ({ onBookDataSaved }) => {
    const [title, setTitle] = useState("");
    const changeTitleHandler = (event) => {
        setTitle(event.target.value);
    };

    const [author, setAuthor] = useState("");
    const changeAuthorHandler = (event) => {
        setAuthor(event.target.value);
    };

    const [score, setScore] = useState("");
    const changeScoreHandler = (event) => {
        setScore(event.target.value);
    };

    const [pageCount, setPageCount] = useState("");
    const changePageCounteHandler = (event) => {
        setPageCount(event.target.value);
    };

    const [imgUrl, setImgUrl] = useState("");
    const changeImgUrlHandler = (event) => {
        setImgUrl(event.target.value);
    };

    const submitBookHandler = (event) => {
        event.preventDefault();
        const newBook = {
            title,
            author,
            score: score !== ""
                ? Array(parseInt(score,10)).fill("*")
                : Array(0),
            pageCount: parseInt(pageCount, 10),
            imgUrl
        };
        onBookDataSaved(newBook);
        setTitle("");
        setAuthor("");
        setScore("");
        setPageCount("");
        setImgUrl("");
    };

    return (
        <Card className="m-4 w-50" bg="success">
            <Card.Body>
                <Form className="text-white" onSubmit={submitBookHandler}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookTitle">
                                <Form.Label>Título</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    placeholder="Ingresar título"
                                    value={title}
                                    onChange={changeTitleHandler}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookAuthor">
                                <Form.Label>Autor</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar autor"
                                    value={author}
                                    onChange={changeAuthorHandler}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookRating">
                                <Form.Label>Puntuación</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresar cantidad de estrellas"
                                    max={5}
                                    min={0}
                                    value={score}
                                    onChange={changeScoreHandler}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookPageCount">
                                <Form.Label>Cantidad de páginas</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresar cantidad de páginas"
                                    min={1}
                                    value={pageCount}
                                    onChange={changePageCounteHandler}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Form.Group className="mb-3" controlId="bookImageUrl">
                            <Form.Label>URL de imagen</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresar url de imagen"
                                value={imgUrl}
                                onChange={changeImgUrlHandler}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-end">
                        <Col md={3} className="d-flex justify-content-end">
                            <Button
                                variant="primary"
                                type="submit"
                            >
                                Agregar lectura
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};


export default NewBook;