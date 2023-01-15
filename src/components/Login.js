import React, { useState } from "react";
import "./login.css";
import "./User_Form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { auth } from "./firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
function Login() {
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div id="login" className="bg">
      <div className="bg_box">
        <div className="circle_white">
          <h3>Welcome to EmergiLife!</h3>
          <Form className="name">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                className="input_field"
                placeholder="Enter name"
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                onChange={(event) => {
                  setloginEmail(event.target.value);
                }}
                required
                className="input_field"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(event) => {
                  setloginPassword(event.target.value);
                }}
                required
                type="password"
                className="input_field"
                placeholder="Password"
              />
            </Form.Group>
            <Button onClick={login} className="button" size="lg" type="submit">
              <NavLink to="/userform">Login</NavLink>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
