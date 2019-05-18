import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
// import initFirebase from "../firebase";

import Login from "./auth/Login";
import Home from "./home";

class AppRouter extends Component {
  constructor() {
    super();
    console.log("애앙 애앙")
    // initFirebase();
  }

  render() {
    console.log("뭐냐고")
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/login/">Login</Link>
              </li>
            </ul>
          </nav>

          <Route path="/login/" component={Login} />
          <Route path="/home" exact component={Home} />
          {/* <Redirect from="/home" to="/login" /> */}
        </div>
      </Router>
    );
  }
}

export default AppRouter;
