import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import React from 'react';


export default function Navbar(props) {
  const navigat=useNavigate();

  const handelClick=()=>{
    navigat('/content');

  }

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg"> 
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white" href="/">
                    {props.title}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
              <button onClick={handelClick}>clickme</button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
