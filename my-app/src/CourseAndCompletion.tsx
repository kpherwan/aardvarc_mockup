import React from "react";
import "./App.css";

function CourseAndCompletion() {
  return (
    <div className="PageContent">
      <div className="PageTitle">Courses and Completion Status</div>
      <div className="PageBody">
        <label>Semester</label>
        <select name="semester" id="semester">
          <option value="spring21">Spring 2021</option>
          <option value="summer21">Summer 2021</option>
          <option value="fall21">Fall 2021</option>
        </select>
      </div>
    </div>
  );
}

export default CourseAndCompletion;
