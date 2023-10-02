import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from '@mui/material';

const MovieCard = ({ movie }) => {
    console.log(movie);
  return (
    <Card>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

const MovieGrid = ({ movies }) => {
    console.log(movies);
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieGrid;
