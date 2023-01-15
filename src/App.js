import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import User_Form from "./components/User_Form";
import Home from "./components/home";
import Records from "./components/Records";
import Account from "./components/Account";
import Upload from "./components/upload";
import PatientRecord from "./components/patientRecord";
import ViewPatientRecord from "./components/ViewPatientRecord ";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userform" element={<User_Form />} />
          <Route path="/home" element={<Home />} />
          <Route path="/records" element={<Records />} />
          <Route path="/account" element={<Account />} />
          <Route path="/uploadfiles" element={<Upload />} />
          <Route path="/viewFiles" element={<ViewPatientRecord />} />
          <Route path="/patientRecord" element={<PatientRecord />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
