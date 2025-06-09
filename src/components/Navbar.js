import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// rfc
export default function Navbar(props) {             
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-secondary btn btn-primary text-white" type="submit">Search</button>
          </form> */}

        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode}type="checkbox" role="switch" id="switchCheckDefault" />
              <label className="form-check-label" htmlFor="switchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'} Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// export default Navbar---------- other way to export;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//   title: "Set title here",
//   aboutText: "About Textutils"
// }

// In modern React (17+), and especially React 18+ and 19, defaultProps no longer works reliably for function components.

// 🔴 defaultProps is officially deprecated for function components.
// ✅ It still works for class components, though

