import React from "react";
import logo from "../pic/logo.png";
import "./Navbar.css";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("nav-item");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }, []);

  return (
    <>
      <header className="header">
        <div id="myDIV">
          <nav
            className="navbar navbar-expand-lg navbar-light  fixed-top "
            id="navbar"
          >
            <div className="container">
              <a className="navbar-brand  logo" href="#">
                <img style={{ width: "80px" }} src={logo} alt="" />
                <strong></strong>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse   navlink "
                id="navbarSupportedContent"
              >
                
                <ul className="navbar-nav   mx-auto link uppercase">
                  
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Feature
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Apps
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item active">
                    <a className="nav-link" aria-current="page" href="#Pricing">
                      Pricing
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#Blog">
                      Blog
                    </a>
                  </li>

                  <li>
                  <input type="button" className="signin_btn" value="Sign In" />
                </li>

                <li>
                  <input type="button" className="login_btn" value="Log In" />
                </li>
                </ul>

              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
