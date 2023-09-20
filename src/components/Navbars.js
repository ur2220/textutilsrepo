import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  const  bgChoosegreen = ()=>{
    document.body.style.backgroundColor = '#1cfc03'
    
  }
  const  bgChooseblue = ()=>{
    document.body.style.backgroundColor = '#0320fc'
  }
  const  bgChoosered = ()=>{
    document.body.style.backgroundColor = '#fc033d'
  }
  const  bgChoosesky = ()=>{
    document.body.style.backgroundColor = '#03e3fc'
  }
  const  bgChooseyellow = ()=>{
    document.body.style.backgroundColor = '#fcba03'
  }

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`} >
        <div className="container-fluid">
          <Link className="navbar-brand" to ="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="False"
            aria-label="Toggle navigation" >
          
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to ="/about">
                  about
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to ="/Home" >
                Home
              </Link>
              </li>
              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle"
                  to ="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 Choose mode Here
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link Link className="dropdown-item" to ="/">
                    <button type="button" className="btn btn-primary" onClick={bgChooseblue}>Primary</button>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to ="/">
                    <button type="button" className="btn btn-success" onClick={bgChoosegreen}>Success</button>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to ="/">
                      <button type="button" className="btn btn-danger" onClick={bgChoosered}>Danger</button>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to ="/">
                    <button type="button" className="btn btn-info" onClick={bgChoosesky}>Info</button>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to ="/">
                    <button type="button" className="btn btn-warning" onClick={bgChooseyellow}>Warning</button>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">{/* <a>Disabled</a> */}</li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className="form-check form-switch">
              <input
                className="form-check-input "
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${props.Mode === "light"? "dark" :"light" }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
