import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>
           <Link to='/login'>Login</Link> 
          </h2>
          <h2>
           <Link to='/protected'>BubblePage</Link> 
          </h2>
        </header>

        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={BubblePage} />
          <Route component={Login} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
