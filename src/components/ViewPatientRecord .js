import React from "react";
import "./User_Form.css";
import "./record.css";
import "./ViewPatientRecord.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sidebar from "./Sidebar";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function ViewPatientRecord() {
  <script>('#inputDate').datepicker({});</script>;
  return (
    <div>
      <Sidebar />
      <div id="perecord" className="bg">
        <div className="bg2">
          <Container>
            <h2 className="above">
              <b>Patient Profile</b>
            </h2>
            <Form>
              <Row>
                <Col sm={10} className="form-label">
                  <Form.Label>About Patient</Form.Label>
                  <input
                    name="about"
                    className="form-control"
                    type="text"
                    placeholder="About the Patient"
                  />
                </Col>
              </Row>
              <Row md={8}>
                <Col md={6} className="form-label">
                  <Form.Label>Email Id</Form.Label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Your email"
                  />
                </Col>
                <Col xs={3} className="form-label">
                  <Form.Label>Mobile Number</Form.Label>
                  <input
                    name="mnumber"
                    className="form-control"
                    type="text"
                    placeholder="Enter Mobile No."
                  />
                </Col>
                <Col xs={3} className="form-label">
                  <Form.Label>Age</Form.Label>
                  <input
                    name="age"
                    className="form-control"
                    type="text"
                    placeholder="Enter Your Age"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={10} className="form-label">
                  <Form.Label>Address</Form.Label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Your Address"
                  />
                </Col>
              </Row>
              <Row md={8}>
                <Col md={6} className="form-label">
                  <Form.Label>Past Visit History</Form.Label>
                  <input
                    type="input"
                    class="form-control"
                    id="inputDate"
                  ></input>
                </Col>
                <Col md={6} className="form-label gh">
                  <label for="customRange1" className="form-label">
                    Heart Beat
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                  ></input>
                  <label for="customRange1" class="form-label">
                    Blood Pressure
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                  ></input>
                  <label for="customRange1" class="form-label">
                    Sugar
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                  ></input>
                  <label for="customRange1" class="form-label">
                    Haemoglobin
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                  ></input>
                </Col>
              </Row>

              <Button className="sub btn-lg ">
                <a href="patient">Submit</a>
              </Button>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default ViewPatientRecord;
