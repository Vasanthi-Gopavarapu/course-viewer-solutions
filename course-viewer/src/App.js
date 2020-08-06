import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './Home';
import Courses from './Courses';
import About from './About';
import Addcourse from './Addcourse';



function App() {
  return (
    <Router>
      <div >
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink exact to="/"  className="nav-link navigation-li" activeClassName="selected">Home
              </NavLink> 
            </li><li className="nav-link">|</li>
            <li className="nav-item">
              <NavLink to="/courses" className="nav-link navigation-li" activeClassName="selected">Courses</NavLink>
            </li><li className="nav-link">|</li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link navigation-li" activeClassName="selected">About</NavLink> 
            </li>
          </ul>
        </nav>        
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/course">
            <Addcourse />
          </Route>
          <Route path="/course/:slug" >
            <Addcourse />
          </Route>
          <Route path="*">
            <Pagenotfound />
          </Route>
        </Switch> 
        </div>          
   </Router>
   
  );
}


function Pagenotfound() {
  return (
    <div className="container p-5 my-3 bg-light" >
      <h1>Ooops!! Page not found. </h1>
    </div>
  );
}





export default App;
