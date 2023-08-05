import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import ScrollToTop from './GoUpBtn';

const APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);             // State to hold trending movies
  const [search, setSearch] = useState("");            // State to hold search input value
  const [searchResults, setSearchResults] = useState([]);  // State to hold search results

  useEffect(() => {
    // Initially get trending movies
    getMovies(APIURL);
  }, []);

  // Fetch movies from the provided URL
  async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData.results);
  }

  // Set movies to the provided array
  function showMovies(movies) {
    setMovies(movies);
  }

  // Determine CSS class based on movie vote average
  function getClassByRate(vote) {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Handle search button click
  const handleRefreshClick = async (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      const resp = await fetch(SEARCHAPI + search);
      const respData = await resp.json();
      setSearchResults(respData.results);
    } else {
      getMovies(APIURL);
      setSearchResults([]);
    }
  };

  // Handle Go Back button click
  const handleGoBack = () => {
    // Handle go back button click here (e.g., use React Router to navigate back)
    // For demonstration purposes, we'll just use window.history to go back
    window.history.back();
  };

  return (
    <div className="trending-movie-cards">
      <header className="trending-header">
        <p className="trending-movies">Trending Movies</p>
        <button className="back-button" onClick={handleGoBack}>
          Go Back
        </button>
      </header>
      <div className="search-form">
        <form onSubmit={handleRefreshClick} className="form">
          <input
            type="text"
            id="search"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
            className="search"
          />
          <button type="submit" className="refresh-button">
            Search
          </button>
        </form>
      </div>
      <div className="trending-content">
        {search.trim() !== "" ? (
          // Render search results if search input is not empty
          searchResults.map((movie) => {
            // Destructure movie properties
            const { id, poster_path, title, vote_average, overview } = movie;

            return (
              <div key={id} className="trending-moviee">
                <img src={IMGPATH + poster_path} alt={title} />
                <div className="trending-movie-info">
                  <h3>{title}</h3>
                  <span className={getClassByRate(vote_average)}>
                    {vote_average}
                  </span>
                </div>
                <div className="trending-overview">
                  <h3>Overview:</h3>
                  {overview}
                </div>
              </div>
            );
          })
        ) : (
          // Render trending movies if search input is empty
          movies.map((movie) => {
            // Destructure movie properties
            const { id, poster_path, title, vote_average, overview } = movie;

            return (
              <div key={id} className="trending-moviee">
                <img src={IMGPATH + poster_path} alt={title} />
                <div className="trending-movie-info">
                  <h3>{title}</h3>
                  <span className={getClassByRate(vote_average)}>
                    {vote_average}
                  </span>
                </div>
                <div className="trending-overview">
                  <h3>Overview:</h3>
                  {overview}
                </div>
              </div>
            );
          })
        )}
      </div>
      <Footer />
      <ScrollToTop/>
    </div>
  );
};

export default TrendingMovies;


