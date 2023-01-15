import "../components/patientRecord.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { faUser, faBell, faUserTag } from "@fortawesome/free-solid-svg-icons";
import e from "../images/Vector.png";
import health from "../images/past-records.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";

const PatientRecord = () => {
  const now1 = 93;
  const now2 = 89;
  const now3 = 60;
  const now4 = 80;

  return (
    <>
      <div>
      <Sidebar />
      </div>
      <div className="home">
        <div className="top-home">
          <div className="top-left">
            <img src={e} alt="logo" className="e-icon" />
            <h1>EMERGI-LIFE</h1>
          </div>
          <div className="top-right">
            <FontAwesomeIcon icon={faUser} className="user-icon" />
            <FontAwesomeIcon icon={faBell} className="bell-icon" />
          </div>
        </div>
        <div className="middle-home">
          <div className="heading-patientRecord">
            <h1>PROFILE</h1>
          </div>
          <div className="card-records">
            <div className="card-heading">
              <h2>Patient Record</h2>
            </div>
            <div className="card-top">
              <FontAwesomeIcon icon={faUserTag} className="patient-icon" />
              <div className="aboutPatient">
                <div className="content-patient">
                  <h3>About Patient</h3>
                  <p className="para-patient">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <div className="lower-para">
                    <p>Phone no.: xxxxxxxxxx</p>
                    <p>Email: xyz@abc.com</p>
                    <p>Address: Plot 07, Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lower-card">
              <div className="lower-left">
                <h3 className="past-heading">Past visit history</h3>
                <img src={health} alt="past" className="past-img"></img>
              </div>
              <div className="lower-right">
                <h3 className="past-heading">General Report</h3>
                <div className="general-report">
                  <h6>Heart Rate</h6>
                  <ProgressBar
                    striped
                    label={`${now1}`}
                    variant="success"
                    now={now1}
                    className="prog"
                  />
                  <h6>Blood Pressure</h6>
                  <ProgressBar
                    striped
                    label={`${now2}`}
                    now={now2}
                    variant="info"
                    className="prog"
                  />
                  <h6>Sugar</h6>
                  <ProgressBar
                    striped
                    label={`${now3}`}
                    now={now3}
                    variant="warning"
                    className="prog"
                  />
                  <h6>Haemoglobin</h6>
                  <ProgressBar
                    now={now4}
                    label={`${now4}%`}
                    striped
                    variant="danger"
                    className="prog"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientRecord;
