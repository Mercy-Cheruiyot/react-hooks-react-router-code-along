import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route,Switch} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
}
  function Login() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
/*
function App() {
  return(
 
  <BrowserRouter>
  <switch>
  <Route path="/">
  <Home />
  </Route>
  <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <switch>
  </BrowserRouter>
  
  );
  
}
*/
ReactDOM.render(
  <BrowserRouter>
  <switch>
  
  <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
  <Home />
  </Route>
     </switch>
  </BrowserRouter>,
 document.getElementById("root")
 );
