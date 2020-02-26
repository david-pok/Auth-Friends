import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          {/* <li>
            <Link to="/protected">Protected Page</Link>
          </li> */}
        </ul>
        <Switch>
          {/* Protected Route */}
          {/* <PrivateRoute exact path="/protected" component={GasPrices} /> */}
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friends" component={Friends} />
          {/* <Route component={Login} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
