import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        </div>
        </Router>
  );
}

export default App;
