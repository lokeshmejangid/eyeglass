import React from 'react'
import './Header.css'
import Grid from '@mui/material/Grid';
import NavTop from '../../Pages/NavTop/NavTop'
import SearchIcon from '@mui/icons-material/Search';
import NavBottom from '../../Pages/NavBottom/NavBottom';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../Utility/color';

const Header = () => {

    const navigate = useNavigate();

    const handleHomePage = () => {
        navigate('./');
    }

    return (
        <Grid container spacing={0} className='header'>
            <Grid item xs={12} container spacing={0} className='headerTop'>
                <Grid item xs={3} onClick={handleHomePage} className='icon'>
                    <img src="./assets/img/logo.png" alt="logo" className='eyelogo' />
                </Grid>
                <Grid item xs={6} className='searchBox'>
                    <div className="input">
                        <input type="text" placeholder='Search' />
                        <SearchIcon className='searchIcon' />
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <NavTop />
                </Grid>
            </Grid>
            <Grid item xs={12} container spacing={0} alignItems={'center'} className='headerBottom'>
                <NavBottom />
            </Grid>
        </Grid>

    )
}

export default Header