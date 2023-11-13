import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home"; 
import Signup from "./components/Signup/Signup";
import MySignIn from "./components/Signup/Login";
import UserDashboard from "./components/dashboard/dashboard";
import Profile from "./components/profile/Profile";
import TimeTab from "./components/timetable/Time";
import Attend from "./components/attendance/attend";
import { auth } from "./firebase";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        console.log("fmeklmel",userName)
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/:username/profile" element={<Profile/>}/>
          <Route path="/user/:username/time-table" element={<TimeTab/>}/>
          <Route path="/user/:username/attendence" element={<Attend/>}/>
          <Route path="/user/:username" element={<UserDashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<MySignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
