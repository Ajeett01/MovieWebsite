// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main'; // Your main component with the movie grid
import MovieDetails from './components/MovieDetails'; // The new Movie Details component
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/" element={<Main />} />
        {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
