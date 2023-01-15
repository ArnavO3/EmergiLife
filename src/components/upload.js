import "../components/upload.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import e from "../images/Vector.png";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Sidebar from "./Sidebar";
const fileTypes = ["JPG", "PNG", "PDF"];

const Upload = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <>
      <Sidebar />
      <div className="main">
        <div>
          <div className="upload">
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
            <div className="middle">
              <h1 className="heading-upload">
                UPLOAD YOUR REPORTS/FILES HERE.
              </h1>
              <FileUploader
                handleChange={handleChange}
                multiple={true}
                name="file"
                types={fileTypes}
              />
              <p className="file">
                {file ? `File name: ${file[0].name}` : "No files uploaded yet"}
              </p>
              <div className="button-upload">CLICK HERE TO UPLOAD</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
