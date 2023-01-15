import "../components/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import Calendar from "../images/calendar.png";
import doc from "../images/dr.png";
import file from "../images/healthcare.png";
import e from "../images/Vector.png";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

const Home = () => {
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
          <div className="heading">
            <h1>WE CARE ABOUT YOUR HEALTH.</h1>
          </div>
          <div className="sub-heading">
            <h2>Hi User!</h2>
          </div>
          <div className="button-home">
            <NavLink to="/records" className="routeBtn">
              VIEW HEALTH RECORDS
            </NavLink>
          </div>
        </div>
        <div className="bottom-home">
          <div className="calendar -card ">
            <img src={Calendar} alt="calendar" className="calendar -icon" />
            <div className="card1">
              <div className="card-head">
                <h3 className="cardHead">Date</h3>
              </div>
              <div className="sub-text">Choose what date to check.</div>
            </div>
          </div>
          <div className="doc -card">
            <img src={doc} alt="doctor" className="doctor -icon" />
            <div className="card1">
              <div className="card-head">
                <h3 className="cardHead">Doctor</h3>
              </div>
              <div className="sub-text">About your doctor.</div>
            </div>
          </div>
          <div className="files -card">
            <img src={file} alt="files" className="file -icon" />
            <div className="card1">
              <div className="card-head">
                <h3 className="cardHead">Your files</h3>
              </div>
              <div className="sub-text">Check your files.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
