import React from 'react';
import { Link } from 'react-router-dom';
import FooterBottom from './FooterBottom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './Footer.css';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    padding: '3rem 1rem',
    background: 'linear-gradient(360deg,rgb(28, 27, 27) 0%,rgb(26, 23, 23) 0%)',
    '@media (max-width:780px)': {
      padding: '3rem 1rem',
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
                <Link to='/destination'>Nepal</Link>
                <Link to='/destination'>Tibet</Link>
                <Link to='/destination'>Bhutan</Link>
                <Link to='/destination'>Indonesia</Link>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className='footer-content-logo'>
                <h2>We are with</h2>
                <div className='logo'>
                  <img src='./images/embelem.png' alt='Logo' />
                  <img src='./images/tourism-board.png' alt='Logo' />
                  <img src='./images/taan.png' alt='Logo' />
                  <img src='./images/embelem.png' alt='Logo' />
                </div>
                {/* <h3>Nepal Glory Treks Pvt.Ltd.</h3> */}
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className='footer-content-location'>
                <h2>Location</h2>
                <h4>Nepal Glory Treks Pvt.Ltd</h4>
                <h4>
                  <i
                    className='im im-location'
                    style={{ fontSize: '16px' }}
                  ></i>
                  {'                                                   '}
                  Thamel, Kathmandu, Nepal
                </h4>
                <hr></hr>
                <h4 style={{ marginTop: '20px' }}>
                  <i className='im im-phone' style={{ fontSize: '16px' }}></i>
                  {'                                                   '}
                  Phone: +077-9843672056
                </h4>
                <h4>
                  <i className='im im-mail' style={{ fontSize: '16px' }}></i>
                  {'                                                   '}
                  Email: info@nepalglorytrek.com
                </h4>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <FooterBottom></FooterBottom>
    </>
  );
}

export default Footer;
