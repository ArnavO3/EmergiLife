import React, { useState } from "react";
import axios from "axios";
import "./User_Form.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import e from "../images/Vector.png";


function User_Form() {
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    mnumber: "",
    age: "",
    bgroup: "",
    address: "",
    gender: "",
    dob: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    event.preventDefault();
    const regiser = {
      fname: input.fname,
      lname: input.lname,
      email: input.email,
      mnumber: input.mnumber,
      age: input.age,
      bgroup: input.bgroup,
      address: input.address,
      gender: input.gender,
      dob: input.dob,
    };
    axios.post("http://localhost:3001/create", regiser);
  }
  return (
    <div id="create" className="bg">
      <div className="bg2">
        <Sidebar />
        <img className="EeE" src={e} alt='emergilife' />

        <Container className="user">
          <h4>
            <b>Add User Information</b>
          </h4>
          <Form>
            <Row md={8}>
              <Col className="form-label">
                <Form.Label>First Name</Form.Label>
                <input
                  onChange={handleChange}
                  value={input.fname}
                  name="fname"
                  className="form-control"
                  type="text"
                  placeholder="Enter First Name"
                />
              </Col>
              <Col xs={6} className="form-label">
                <Form.Label>Last Name</Form.Label>
                <input
                  onChange={handleChange}
                  value={input.lname}
                  name="lname"
                  className="form-control"
                  type="text"
                  placeholder="Enter Last Name"
                />
              </Col>
            </Row>
            <Row md={8}>
              <Col md={6} className="form-label">
                <Form.Label>Email Id</Form.Label>
                <input
                  onChange={handleChange}
                  name="email"
                  value={input.email}
                  className="form-control"
                  type="text"
                  placeholder="Enter Your email"
                />
              </Col>
              <Col xs={3} className="form-label">
                <Form.Label>Mobile Number</Form.Label>
                <input
                  onChange={handleChange}
                  value={input.mnumber}
                  name="mnumber"
                  className="form-control"
                  type="text"
                  placeholder="Enter Mobile No."
                />
              </Col>
              <Col xs={3} className="form-label">
                <Form.Label>Age</Form.Label>
                <input
                  onChange={handleChange}
                  value={input.age}
                  name="age"
                  className="form-control"
                  type="text"
                  placeholder="Enter Your Age"
                />
              </Col>
            </Row>
            <Row md={8}>
              <Col md={6} className="form-label">
                <Form.Label>Gender</Form.Label>
                <input
                  onChange={handleChange}
                  value={input.gender}
                  name="gender"
                  className="form-control"
                  type="text"
                  placeholder="Enter your gender"
                />
              </Col>
              <Col xs={3} className="form-label">
                <Form.Label>Blood Group</Form.Label>
                <input
                  onChange={handleChange}
                  name="bgroup"
                  value={input.bgroup}
                  className="form-control"
                  type="text"
                  placeholder="Enter your Blood Group"
                />
              </Col>
              <Col xs={3} className="form-label">
                <Form.Label>Date Of Birth</Form.Label>
                <input
                  onChange={handleChange}
                  name="dob"
                  value={input.dob}
                  className="form-control"
                  type="text"
                  placeholder="Enter DOB"
                />
              </Col>
            </Row>
            <Row>
              <Col md={10} className="form-label">
                <Form.Label>Address</Form.Label>
                <input
                  onChange={handleChange}
                  name="address"
                  value={input.address}
                  className="form-control"
                  type="text"
                  placeholder="Enter Your Address"
                />
              </Col>
            </Row>
            <Row mb-3 className="last-row">
              <label for="formFileSm" class="form-label">
                Profile Picture
              </label>
              <input
                class="form-control form-control-sm"
                id="formFileSm"
                type="file"
              ></input>
            </Row>
            <Button onClick={handleClick} className="sub btn-lg ">
              <a href="home">
                <NavLink to="/home">Submit</NavLink>
              </a>
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default User_Form;
