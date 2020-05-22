import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Patient Manager</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Day Manage</Link>
          </li>
          <li className="navbar-item">
          <Link to="/userAdd" className="nav-link">User Manage</Link>
          </li>
          <li className="navbar-item">
          <Link to="/report" className="nav-link">Report Manager</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}