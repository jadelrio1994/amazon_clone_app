import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Hello Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Hello Login</h1>
          </Route>
          {/* Default Route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
