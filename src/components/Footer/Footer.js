import React from 'react';
import { Link } from 'react-router-dom';
import FooterBottom from './FooterBottom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import './Footer.css';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    padding: '4rem 1rem 0 6rem',
    background: 'grey',
    '@media (max-width:780px)': {
      padding: '2rem 1rem',
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Container maxWidth='xl'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className='footer-content'>
                <h2>Destinations</h2>
                <Link to='/signup'>Nepal</Link>
                <Link to='/'>Tibet</Link>
                <Link to='/'>Bhutan</Link>
                <Link to='/'>Indonesia</Link>
                {/* <Link to='/'>Terms of Service</Link> */}
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className='footer-content'>
                <Link to='/' className='logo'>
                  <img src='./images/logo.png' alt='Logo' />
                </Link>
                <h3>Nepal Glory Treks Pvt.Ltd.</h3>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className='footer-content'>Sponser</div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <FooterBottom></FooterBottom>
    </>
  );
}

export default Footer;
