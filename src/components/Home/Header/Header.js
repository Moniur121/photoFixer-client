import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "firebase/auth";
import firebase from "firebase/app";
import { UserContext } from "../../../App";
function Header() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    fetch("https://fast-reef-04000.herokuapp.com/getAdmin", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAdmin(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [loggedInUser.email]);
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setLoggedInUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <section className="main-header">
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light  ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <span className="fs-2" style={{ fontWeight: "bold" }}>
                <span className="common-color">Photo</span>
                <span
                  className="common-titleColor"
                  style={{ marginLeft: "-1px" }}
                >
                  Fixer
                </span>
              </span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item" style={{ fontWeight: "bold" }}>
                  <Link className="nav-link  fs-5 common-titleColor" to="/home">
                    Home
                  </Link>
                </li>
                <li class="nav-item" style={{ fontWeight: "bold" }}>
                  <a  class="nav-link common-titleColor fs-5" href="#service">
                    Services
                  </a>
                </li>
                <li class="nav-item" style={{ fontWeight: "bold" }}>
                  <a class="nav-link common-titleColor fs-5" href="#about">
                    AboutUs
                  </a>
                </li>
                <li class="nav-item" style={{ fontWeight: "bold" }}>
                  <a class="nav-link common-titleColor fs-5" href="#contact">
                    ContactUs
                  </a>
                </li>
                {loggedInUser.email && (
                  <>
                 {!admin &&(<li class="nav-item" style={{ fontWeight: "bold" }}>
                    <Link
                      to="/dashboard"
                      className="nav-link common-titleColor fs-5"
                    >
                      Dashboard
                    </Link>
                  </li>)}
                  {admin &&(<li class="nav-item" style={{ fontWeight: "bold" }}>
                    <Link
                      to="/admin"
                      className="nav-link   fs-5  common-titleColor "
                    >
                      Admin
                    </Link>
                  </li>)}
                </>
                )}
                {loggedInUser.email ? (
                  <li class="nav-item">
                    <Link to="/LogIn" className="nav-link ">
                      <button
                        className="authentication-btn"
                        onClick={handleLogout}
                      >
                        logOut
                      </button>
                    </Link>
                  </li>
                ) : (
                  <li class="nav-item">
                    <Link to="/LogIn" className="nav-link ">
                      <button className="authentication-btn">logIn</button>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;
