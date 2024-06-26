import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";

const Login = ({ onLogin }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onChangeEmail = (event) => {
    setErrors({ ...errors, email: false });
    const inputEmail = event.target.value;
    setUserEmail(inputEmail);
  };

  const onChangePassword = (event) => {
    setErrors({ ...errors, password: false });
    const inputPassword = event.target.value;
    setUserPassword(inputPassword);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      setErrors({ ...errors, email: true });
      return;
    }

    if (userPassword.length === 0) {
      passwordRef.current.focus();
      setErrors({ ...errors, password: true });
      return;
    }

    // alert(
    //   `El email ingresado es ${userEmail}, y el password ingresado es ${userPassword}`
    // );
    setUserEmail("");
    setUserPassword("");
    onLogin();
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center">
      <Card className="w-40 mt-5 mx-3 p-3 px-5 shadow">
        <Card.Body>
          <Row>
            <h5 className="mb-4">¡Bienvenidos a Books Champion!</h5>
          </Row>
          <Form onSubmit={onSubmitHandler}>
            <FormGroup className="mb-4">
              <Form.Control
                className={
                  errors.email &&
                  "focus-ring focus-ring-danger border border-danger"
                }
                type="email"
                ref={emailRef}
                placeholder="Ingresar email..."
                value={userEmail}
                onChange={onChangeEmail}
              />
              {errors.email ? (
                <p className="mt-1 text-danger">Debe ingresar un email</p>
              ) : (
                ""
              )}
            </FormGroup>
            <FormGroup className="mb-4">
              <Form.Control
                className={
                  errors.password &&
                  "focus-ring focus-ring-danger border border-danger"
                }
                type="password"
                ref={passwordRef}
                placeholder="Ingresar contraseña..."
                value={userPassword}
                onChange={onChangePassword}
              />
              {errors.password ? (
                <p className="mt-1 text-danger">Debe ingresar un password</p>
              ) : (
                ""
              )}
            </FormGroup>
            <Row>
              <Col md={12} className="d-flex justify-content-end">
                <Button variant="secondary" type="submit">
                  Iniciar sesión
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
