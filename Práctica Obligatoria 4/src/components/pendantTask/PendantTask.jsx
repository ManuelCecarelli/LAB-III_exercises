import PropTypes from "prop-types";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const PendantTask = ({ taskName, onDeleteTask, onCompleteTask }) => {

    const onClickMarcarHandler = () => {
        onCompleteTask(taskName)
    };

    const onClickEliminarHandler = () => {
        onDeleteTask(taskName)
    };

    return (
        <Card className="d-flex m-2 w-100" bg="light">
            <Card.Body>
                <Form className="text-dark">
                    <Row className="d-flex">
                        <Col className="d-flex align-items-center" md={8}>
                            <Form.Group>
                                <Form.Label className="h5">{taskName}</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col className="d-flex justify-content-end" md={4}>
                            <Button className="mx-2" variant="success" onClick={onClickMarcarHandler}>
                                MARCAR
                            </Button>
                            <Button variant="danger" onClick={onClickEliminarHandler}>
                                ELIMINAR
                            </Button>
                        </Col>
                    </Row>  
                </Form>
            </Card.Body>
        </Card>
    )
}

PendantTask.propTypes = {
    taskName: PropTypes.string,
    onDeleteTask: PropTypes.func,
    onCompleteTask: PropTypes.func
}

export default PendantTask;