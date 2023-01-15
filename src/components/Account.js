import React from "react";
import "./account.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import profile from "../images/profile.png";
import Sidebar from "./Sidebar";

function Account() {
  return (
    <div id="acc">
      <Sidebar />
      <img className="prof" alt="profile" src={profile}></img>
      <Container className="info">
        <Row>
          <Col>
            <input
              type="email"
              placeholder="First name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </Col>
          <Col>
            <input
              type="email"
              placeholder="Last name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </Col>
          <Col>
            <input
              type="email"
              placeholder="Mobile Number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              type="email"
              placeholder="Age"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </Col>
          <Col>
            <input
              type="email"
              placeholder="Blood Group"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              type="email"
              placeholder="Gender"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </Col>
          <Col>
            <input
              type="email"
              placeholder="Dob"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              type="email"
              placeholder="Address"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Account;
