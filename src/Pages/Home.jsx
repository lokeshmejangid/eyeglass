import React from 'react'
import Grid from '@mui/material/Grid'
import EyeGlass from '../Component/Carousel/EyeGlass'
import TrendingEyeGlass from '../Component/Carousel/TrendingEyeGlass'
import FriendlyFrames from '../Component/Carousel/FriendlyFrames'

const Home = () => {
  return (
    <Grid container spacing={0} className='home'>
      <Grid item xs={12}>
        <img src="./assets/img/sunglass.png" alt="optical" className='bigImg' />
      </Grid>
      <Grid item xs={12} container spacing={1}>
        <Grid item xs={4}>
          <img src="./assets/img/MenEyeGlasses.png" alt=""  className='img'/>
        </Grid>
        <Grid item xs={4}>
          <img src="./assets/img/kidsImg.png" alt="" className='img' />
        </Grid>
        <Grid item xs={4}>
          <img src="./assets/img/womenlens.png" alt="" className='img' />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className='opticalLens'>Opticals for you</div>
        <EyeGlass />
      </Grid>
      <Grid item xs={12} sx={{ pt: '2em' }}>
        <div className='opticalLens'>Trending Eye Glass</div>
        <TrendingEyeGlass />
      </Grid>
      <Grid item xs={12} sx={{ pt: '2em' }}>
        <div className='opticalLens'>Friendly Frames</div>
        <FriendlyFrames />
      </Grid>
    </Grid>
  )
}

export default Home