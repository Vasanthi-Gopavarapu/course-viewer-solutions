import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';


function Home() {
    return (
        <div className="container p-5 my-3 bg-light">
                    <h1>PluralSight Administration</h1>
                    <p>React, Redux, and React Router for ultra-responsive web apps. </p>
                    <NavLink to="/about" className="text-primary"
                                activeClassName="text-danger">
                        <button type="button" className="btn btn-primary btn-lg">
                            Learn more
                        </button>
                    </NavLink>
                    
                </div>
    );
}

export default Home;