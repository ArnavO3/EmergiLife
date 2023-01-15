import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import home from "../images/home.png";
import user from "../images/user.png";
import reports from "../images/setting-lines.png";
import logout from "../images/power.png";
import { NavLink } from "react-router-dom";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
function Sidebar() {
  return (
    <>
      <SideNav style={{ backgroundColor: "#F3EFFC" }}>
        <SideNav.Toggle style={{ backgroundColor: "purple" }} />
        <SideNav.Nav>
          <NavItem eventKey="home">
            <NavIcon>
              <NavLink to="/home">
                <img
                  src={home}
                  alt="home"
                  style={{ fontSize: "1.75em" }}
                  className="sidebar-icons"
                />
              </NavLink>
            </NavIcon>
            <NavText style={{ color: "black" }}>
              <NavLink to="/home" className="routeBtn">
                Home
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="home">
            <NavIcon>
              <NavLink to="/account" className="routeBtn">
                <img
                  src={user}
                  alt="user"
                  style={{ fontSize: "1.75em" }}
                  className="sidebar-icons"
                />
              </NavLink>
            </NavIcon>
            <NavText style={{ color: "black" }}>
              <NavLink to="/account" className="routeBtn">
                Account
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="files">
            <NavIcon>
              <img
                src={reports}
                alt="files"
                style={{ fontSize: "1.75em" }}
                className="sidebar-icons"
              />
            </NavIcon>
            <NavText style={{ color: "black" }}>Files</NavText>
            <NavItem eventKey="charts/linechart">
              <NavText style={{ color: "black" }}>
                <NavLink to="/uploadfiles" className="routeBtn">
                  Upload Files
                </NavLink>
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText style={{ color: "black" }}>
                <NavLink to="/viewFiles" className="routeBtn">
                  View Files
                </NavLink>
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/pichart">
              <NavText style={{ color: "black" }}>
                <NavLink to="/patientRecord" className="routeBtn">
                  Patient Records
                </NavLink>
              </NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="logoutt">
            <NavIcon>
              <NavLink to="/login" className="routeBtn">
                <img
                  src={logout}
                  alt="logout"
                  style={{ fontSize: "1.75em" }}
                  className="sidebar-icons"
                />
              </NavLink>
            </NavIcon>
            <NavText style={{ color: "black" }}>
              <NavLink to="/login" className="routeBtn">
                Logout
              </NavLink>
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </>
  );
}

export default Sidebar;
