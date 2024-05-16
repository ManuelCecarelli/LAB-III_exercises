import PropTypes from "prop-types";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const Task = ({ taskName }) => {

    return (
        <Card className="d-flex m-2 w-50" bg="light">
            <Card.Body>
                <Form className="text-dark">
                    <Row className="d-flex">
                        <Col className="d-flex align-items-center" md={8}>
                            <Form.Group controlId="taskName">
                                <Form.Label className="h5">{taskName}</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Button className="mx-2" variant="success">
                                COMPLETADA
                            </Button>
                            <Button variant="danger">
                                ELIMINAR
                            </Button>
                        </Col>
                    </Row>  
                </Form>
            </Card.Body>
        </Card>
    )
}

Task.propTypes = {
    taskName: PropTypes.string
}

export default Task;