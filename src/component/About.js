import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (

    <>
      <div className="about-section">
        <div className="site-header sticky-top py-1">
          <nav className="container d-flex flex-column flex-md-row justify-content-between">
            <Link className="navlink py-2 d-none d-md-inline-block" to="/">
              Home
            </Link>
            <Link className="navlink py-2 d-none d-md-inline-block" to="/home">
              Tour
            </Link>
            <Link className="navlink py-2 d-none d-md-inline-block" to="/home">
              Movies
            </Link>
            <a className="navlink py-2 d-none d-md-inline-block" href="mailto:Abhaycbr07@gmail.com">
              Contact
            </a>
          </nav>
        </div>
        <div className="about position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">
          <div className="aboutcontent col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal" style={{
              background: "none",
            }}>Welcome to BoxxOffice</h1>
            <p >
              This is a React-web-application having a landing page, Movie-section, Registration, Login and About page. I created my own API having data related to movies along with that I used core concepts of React like: React-hooks, UseState and a bit of react-bootstrap. I created Registration and Login Page with "FORMIK"and used "YUP"(A library by JQuense) for Validation.
              <br></br>
              <br></br>
              <h2>Made by: Abhay Kumar</h2>
            </p>
            <Link className="btn btn-outline-dark" to="/home" style={{
              color: "red"
            }}>
              Explore
            </Link>
          </div>
          <div className="product-device shadow-sm d-none d-md-block" />
          <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
        </div>
      </div>
    </>
  )
}
export default About;
