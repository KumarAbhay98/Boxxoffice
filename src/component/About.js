import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const handleClick=()=>{
    window.history.back()

  }
  return (
    <>
      <div className="about-section">
        <div className="site-header sticky-top py-1">
          <nav className="container d-flex flex-column flex-md-row justify-content-between">
            <Link className="navlink py-2 d-none d-md-inline-block" to="/">
              Home
            </Link>
            <Link className="navlink py-2 d-none d-md-inline-block" to="/Home">
              Tour
            </Link>
            <Link className="navlink py-2 d-none d-md-inline-block" to="/TrendingMovies">
              Movies
            </Link>
            <a className="navlink py-2 d-none d-md-inline-block" href="mailto:Abhaycbr07@gmail.com">
              Contact
            </a>
          </nav>
        </div>
        <div className="about-content  text-center">
          <div className="about-content">
            <h1>Welcome to BoxxOffice</h1>
            <p className="intro-para">
              BoxxOffice is a React web application that provides information about trending movies. We offer a curated list of the latest and most popular movies for movie enthusiasts.
              <br/><br/>
              The application is built using core concepts of React such as React hooks, and react-router-dom for navigation. We have our own API of 30+ movies that provides movie data, which is dynamically fetched and displayed on the website.
              <br/><br/>
              The "More Movies" section has some cool features , you can search movie of your choice and it will show the result for that movie and you can read an overview of that movie by hovering/clciking the movie card. The data of this page is fetched from an API.
              <br/><br/>

              The registration and login pages are designed using "FORMIK" for form handling and "YUP" for validation, ensuring a smooth and secure user experience.
              <br/><br/>
              BoxxOffice is created by Abhay Kumar, a passionate web developer with a love for movies and technology. The goal is to provide a user-friendly and visually appealing platform for movie enthusiasts.
              <br/><br/>
              Thanks! for exploring this website . soon we'll add django backend.

            </p>
            <Link className="btn btn-outline-dark" onClick={handleClick}>
              back
            </Link>
          </div>
          <div className="product-device shadow-sm d-none d-md-block" />
          <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
        </div>
      </div>
    </>
  );
};

export default About;
