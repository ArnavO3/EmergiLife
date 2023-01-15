import React from "react";
import "./record.css";
import Table from "react-bootstrap/Table";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

function Records() {
  return (
    <div id="rec" className="bg">
      <Sidebar />
      <div className="bg2">
        <Table className="record_border" hover>
          <thead>
            <tr>
              <th>
                <h3 className="heading-rec">
                  <b>Patient Records</b>
                </h3>
              </th>
              <th colSpan={4}>
                Search By <input placeholder="Patient Name"></input>
              </th>
              <th>
                <button className="add_new" style={{ background: "#CA79C6" }}>
                  <a href="perecord">
                    <NavLink to="/viewFiles" className="routeBtn">
                      Add Patient
                    </NavLink>
                  </a>
                </button>
              </th>
            </tr>
          </thead>
          <thead style={{ background: "#EDF4FC" }}>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Patient</th>
              <th>Treatment</th>
              <th>Patient Files</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>22/01/2022</td>
              <td className="name">Otto Mark</td>
              <td>Checkup</td>
              <td>file.jpg</td>
            </tr>
            <tr>
              <td>2</td>
              <td>15/05/2022</td>
              <td className="name">Jay Thornton</td>
              <td>Heart Surgery</td>
              <td>File.jpg</td>
            </tr>
            <tr>
              <td>3</td>
              <td>17/08/2021</td>
              <td className="name">Fok Ray</td>
              <td>ByPass Surgery</td>
              <td>File.png</td>
            </tr>
            <tr>
              <td>4</td>
              <td>20/05/2023</td>
              <td className="name">Suzan Bet</td>
              <td>Open Heart Surgery</td>
              <td>File1.jpeg</td>
            </tr>
            <tr>
              <td>5</td>
              <td>1/02/2022</td>
              <td className="name">Katty</td>
              <td>Surgery</td>
              <td>file.doc</td>
            </tr>
            <tr>
              <td>6</td>
              <td>18/04/2018</td>
              <td className="name">Carl</td>
              <td>Checkup</td>
              <td>file.png</td>
            </tr>
            <tr>
              <td>7</td>
              <td>20/08/2015</td>
              <td className="name">Xavier Granger</td>
              <td>Checkup</td>
              <td>file.doc</td>
            </tr>
            <tr>
              <td>8</td>
              <td>01/06/2020</td>
              <td className="name">Alice Paul</td>
              <td>Surgery</td>
              <td>File.png</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Records;
