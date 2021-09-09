import React from "react";
import { Switch, Route } from "react-router-dom";

import "./css/App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Page">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
