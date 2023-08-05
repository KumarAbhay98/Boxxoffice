import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Header from './component/Landingpage';
import Boxoffice from './component/MovieSection';
import About from './component/About';
import Login from './component/Login';
import Register from './component/Register';
import TrendingMovies from './component/TrendingMovies';
const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Home" element={<Boxoffice />} />
          <Route path="/TrendingMovies" element={<TrendingMovies/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App;

