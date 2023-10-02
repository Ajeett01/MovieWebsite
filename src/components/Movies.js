import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MovieDetails from './MovieDetails';

const MovieCard = ({ movie, openMovieDetails }) => {
  // console.log(movie);
  return (
    <Card onClick={() => openMovieDetails(movie)}>
      <CardContent>
        {/* <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}> */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Typography variant="h6">{movie.title}</Typography>
        <Typography variant="subtitle2">
          Release Date: {movie.release_date}
        </Typography>
        <Typography variant="subtitle2">
          Progress: {movie.vote_average}
        </Typography>
        <CircularProgress
          variant="determinate"
          value={movie.vote_average * 10}
          size={40}
        />
        {/* </Link> */}
      </CardContent>
    </Card>
  );
};

const MovieGrid = ({ movies }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const openMovieDetails = (movie) => {
      setSelectedMovie(movie);
    };

    const closeMovieDetails = () => {
      setSelectedMovie(null); // Set selectedMovie to null to go back to the movie grid
    };


    // console.log(movies);
  return (
    <div>
      {selectedMovie ? (
        <div>
          <MovieDetails
            movie={selectedMovie}
            closeMovieDetails={closeMovieDetails}
          />
        </div>
      ) : (
        <Grid container spacing={2}>
          {movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={movie.id}>
              <MovieCard movie={movie} openMovieDetails={openMovieDetails} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default MovieGrid;
