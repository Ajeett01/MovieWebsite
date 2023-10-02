// MovieDetails.js
import React from 'react';
import { Typography, Paper, Container, Box, Button } from '@mui/material';

const MovieDetails = ({ movie, closeMovieDetails }) => {
  console.log(movie);
  return (
    <Container>
      <Paper elevation={3}>
        <Box p={3}>
          <Button variant="outlined" onClick={closeMovieDetails}>
            Back to Movies
          </Button>
          <div>
            <Typography variant="h4">{movie.title}</Typography>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ maxWidth: 500, height: 500 }}
            />
            <Typography variant="subtitle2">
              Release Date: {movie.release_date}
            </Typography>
            <Typography variant="subtitle2">
              Progress: {movie.vote_average}
            </Typography>
            <Typography variant="body1">{movie.overview}</Typography>
          </div>
        </Box>
      </Paper>
    </Container>
  );
};

export default MovieDetails;
