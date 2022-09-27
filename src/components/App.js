import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";

function App() {
    return(
   
    <div><NavBar /><switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/SignUp">
                <SignUp />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>

        </switch></div>
   
    
    );
    
  }
  export default App;