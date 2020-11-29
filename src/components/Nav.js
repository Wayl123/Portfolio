import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-main navbar-expand-md navbar-light bg-light py-0">
          <NavLink to="/" exact><img src="images/logo.PNG" className="logo" alt=""/></NavLink>
          
          <button className="navbar-toggler p-0" type="button" data-toggle="collapse" data-target="#main_nav"
            aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/" exact className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" exact className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Project" exact className="nav-link">Project</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Contact" exact className="nav-link">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
