import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import SideItems from './SideItems';

const Main = () => {
  return (
    <Box>
      <Container>
        <Typography>Now Playing Movies</Typography>
      </Container>
      <SideItems/>
    </Box>
  );
}

export default Main