import { Button, Card, Col, Form, Row } from "react-bootstrap";

const NewTask = () => {

    return (
        <Card className="d-flex m-2 w-50" bg="secondary">
            <Card.Body>
                <Form className="text-white">
                    <Row className="d-flex">
                        <Col className="d-flex align-items-center justify-content-center" md={3}>
                            <Form.Group className="d-flex" controlId="taskName">
                                <Form.Label className="h5 w-100">Nueva tarea: </Form.Label>
                            </Form.Group>
                        </Col>
                        <Col md={7}>
                            <Form.Control
                                className=""
                                type="text"
                                required
                                placeholder="Ingresar nueva tarea..."
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
  
  export default NewTask;