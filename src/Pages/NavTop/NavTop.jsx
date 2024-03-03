import { Grid } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavTop.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Nav = () => {
  return (
    <Grid container spacing={0} className='nav'>
      <NavLink to='/help'>Help</NavLink>
      <NavLink to='/login'>Sign In</NavLink>
      <NavLink to='/cart'>
        <div className="cart-icon">
          <ShoppingCartIcon />
          <span className="circle">2</span>
        </div>
      </NavLink>
    </Grid>
  )
}

export default Nav