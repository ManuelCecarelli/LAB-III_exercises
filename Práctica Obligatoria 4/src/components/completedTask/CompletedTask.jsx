import PropTypes from "prop-types";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const CompletedTask = ({ taskName, onDeleteTask }) => {

    const onClickHandler = () => {
        onDeleteTask(taskName)
    };

    return (
        <Card className="d-flex m-2 w-100" bg="success">
            <Card.Body>
                <Form className="text-light">
                    <Row className="d-flex">
                        <Col className="d-flex align-items-center" md={8}>
                            <Form.Group>
                                <Form.Label className="h5">{`${taskName} - COMPLETADA -`}</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col className="d-flex justify-content-end" md={4}>
                            <Button variant="danger" onClick={onClickHandler}>
                                ELIMINAR
                            </Button>
                        </Col>
                    </Row>  
                </Form>
            </Card.Body>
        </Card>
    )
}

CompletedTask.propTypes = {
    taskName: PropTypes.string,
    onDeleteTask: PropTypes.func
}

export default CompletedTask;