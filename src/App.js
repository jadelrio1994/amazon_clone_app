import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <h1>Hello Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Hello Login</h1>
          </Route>
          {/* Default Route */}
          <Route path="/">
            <Header />
            <h1>Hello home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
