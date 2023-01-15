import React, { useState } from "react";
import "./login.css";
import "./Login.js";
import { auth } from "./firebase-config";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";

function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div id="/" className="bg">
      <div className="bg_box">
        <div className="circle_white">
          <h3>Welcome to EmergiLife!</h3>
          <Form className="name">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                className="input_field"
                required
                placeholder="Enter name"
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                className="input_field"
                required
                placeholder="Enter email"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              />
              <Form.Text className="text-muted t">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
                required
                type="password"
                className="input_field"
                placeholder="Password"
              />
            </Form.Group>
            <Button
              onClick={register}
              className="button"
              size="lg"
              type="submit"
            >
              SignUp
            </Button>
            <Button className="button" size="lg" type="submit">
              <NavLink to="/login">Login</NavLink>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
