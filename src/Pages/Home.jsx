import React from 'react'
import Grid from '@mui/material/Grid'

const Home = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <img src="./assets/img/optical.jpg" alt="optical" className='img' />
      </Grid>
    </Grid>
  )
}

export default Home