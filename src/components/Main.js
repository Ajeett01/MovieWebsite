import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SideItems from './SideItems';
import axios from 'axios';
import MovieGrid from './Movies';
import data from './data';
import Header from './Header';

const URL =
  'https://api.themoviedb.org/3/movie/11?api_key=85ce1cb0dd35e6eed23e110608a236ae';

const Main = () => {

  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    // Fetch movie data when the component mounts
    getMovieData();
  }, []);

  function getMovieData() {
    axios
      .get(URL)
      .then((res) => {
        setMovieData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }

  console.log(data);
  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Container>
          <Typography style={{marginTop:15,marginBottom:0}} variant="h6">Now Playing Movies</Typography>
        </Container>
        <div style={{ display: 'flex' }}>
          <SideItems />
          <div style={{ marginTop: 40 }}>
            <MovieGrid movies={data} />
          </div>
        </div>
      </Box>
    </>
  );
}

export default Main;
