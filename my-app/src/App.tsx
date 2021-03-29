import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import CourseAndCompletion from "./CourseAndCompletion";
import Drawer from "./Drawer";
import { ReactComponent as ProfileSvg } from "./profile.svg";
import ToolHome from "./ToolHome";

function App() {
  return (
    <Router>
        <div className="App-header">
          <div>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              AARDVARC DEPARTMENT TOOLS
            </Link>
          </div>
          <div className="Profile">
            <div>Welcome, Karishma</div>
            <ProfileSvg className="SvgStyle" />
          </div>
        </div>
        <div className="AppBody">
          <Drawer />
          <Route path="/" exact render={(props) => <ToolHome/>} />
          <Route path="/courses_and_completion" render={(props) => <CourseAndCompletion/>} />
        </div>
    </Router>
  );
}

export default App;
