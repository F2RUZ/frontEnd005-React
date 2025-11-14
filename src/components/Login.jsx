import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const Login = () => {
  const [name, setName] = useState("mor_2314");
  const [passwd, setPasswd] = useState("83r5^_");
  const api = `https://fakestoreapi.com/auth/login`;

  const handleName = (e) => setName(e.target.value);
  const handlePasswd = (e) => setPasswd(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: name,
      password: passwd,
    };

    axios
      .post(api, user)
      .then((res) => {
        if (res.data.token) {
          toast.success("Login successful!");
          console.log("Token:", res.data.token);
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          toast.error("Invalid credentials!");
        } else {
          toast.error("Something went wrong!");
        }
      });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          <Card
            style={{
              width: "350px",
              padding: "20px",
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
            }}
          >
            <Card.Body>
              <Card.Title className="text-center mb-4">Login</Card.Title>
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={name}
                    onChange={handleName}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={passwd}
                    onChange={handlePasswd}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
