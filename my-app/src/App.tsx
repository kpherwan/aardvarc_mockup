import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        Fixed header
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/first">First Product</Link>
            </li>
            <li>
              <Link to="/second">Second Product</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact render={(props) => <div>Home content</div>} />
        <Route path="/first" render={(props) => <div>first content</div>} />
      </div>
    </Router>
  );
}

export default App;
