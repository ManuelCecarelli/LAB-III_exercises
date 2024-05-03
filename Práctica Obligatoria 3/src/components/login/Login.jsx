import { Button, Col, Card, Form, Row } from "react-bootstrap";
import { useState } from "react";

const Login = () => {

    const [userNameInput,setUserNameInput] = useState("");

    const onChangeHandler = (event) => {
        setUserNameInput(event.target.value);
        if (userNameInput.includes("o") || userNameInput.includes("O")) {
            alert('Por favor, ¡Nombres de usuario sin la letra o!');
            setUserNameInput("");
        };
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (userNameInput.includes("o") || userNameInput.includes("O") || userNameInput === "") {
            alert('Usuario inválido para registrarse');
            setUserNameInput("");
        } else {
            alert("¡Usuario registrado correctamente!");
            setUserNameInput("");
        }
    };

    return (
        <>
        <Card className="m-4 w-50" bg="success">
            <Card.Body>
                <Form className="text-white" onSubmit={onSubmitHandler}>
                    <Row>
                        <Col md={12}>
                            <Form.Group className="mb-3" controlId="userLogin">
                                <Form.Label>Nombre de Usuario: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingrese su usuario..."
                                        value={userNameInput}
                                        onChange={onChangeHandler}
                                    />
                            </Form.Group>
                        </Col>
                        <Col md={12} className="d-flex justify-content-end">
                            <Button
                                variant="primary"
                                type="submit"
                            >
                                Registrarse
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
        <p className="m-4">{userNameInput}</p>
        </>
        
    )
};

export default Login;