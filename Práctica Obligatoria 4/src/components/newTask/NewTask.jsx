import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const NewTask = ({ onAddNewTask }) => {

    const [inputValue, setInputValue] = useState("");

    const onChangeHandler = (event) => {
        let auxiliarInputValue = event.target.value;
        setInputValue(auxiliarInputValue);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (inputValue.trim() == "") {
            alert("No se aceptan espacios vacíos en el input")
            setInputValue("")
        } else {
            onAddNewTask(inputValue)
            setInputValue("")
        }
    };

    return (
        <Card className="d-flex my-5 w-50" bg="secondary">
            <Card.Body>
                <Form className="text-white" onSubmit={onSubmitHandler}>
                    <Row className="d-flex">
                        <Col className="d-flex align-items-center justify-content-center" md={3}>
                            <Form.Group className="d-flex">
                                <Form.Label className="h5 w-100">Nueva tarea: </Form.Label>
                            </Form.Group>
                        </Col>
                        <Col md={7}>
                            <Form.Control
                                type="text"
                                required
                                placeholder="Ingresar nueva tarea..."
                                value={inputValue}
                                onChange={onChangeHandler}
                            />
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <Button type="submit" variant="primary">
                                AGREGAR
                            </Button>
                        </Col>
                    </Row>  
                </Form>
            </Card.Body>
        </Card>
    )
}
  
NewTask.propTypes = {
    onAddNewTask: PropTypes.func
}

export default NewTask;