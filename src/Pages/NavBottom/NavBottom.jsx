import { Grid } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBottom.css'

const NavBottom = () => {
  return (
    <Grid container spacing={0} className='navBottom'>
      <NavLink to='/men'>Men</NavLink>
      <NavLink to='/women'>Women</NavLink>
      <NavLink to='kids'>Kids</NavLink>
      <NavLink to='eyelens'>Eye Lens</NavLink>
      <NavLink to='sunglass'>Sun Glasses</NavLink>
      <NavLink to='contactlens'>Contact Lens</NavLink>
      <NavLink to='contactlens'>Contact Lens</NavLink>
      <NavLink to='contactlens'>Contact Lens</NavLink>
      <NavLink to='contactlens'>Contact Lens</NavLink>
    </Grid>
  )
}

export default NavBottom