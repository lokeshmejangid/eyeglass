import { Grid } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavTop.css';

const Nav = () => {
  return (
    <Grid container spacing={0} className='nav'>
      <NavLink to='/help'>Help</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/cart'>Cart</NavLink>
    </Grid>
  )
}

export default Nav