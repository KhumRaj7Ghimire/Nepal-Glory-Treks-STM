import React from 'react';
import './PackageJumbotron.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import RatingComponent from './Rating';

const useStyles = makeStyles((theme) => ({
  box: {
    width: '83%',
    borderRadius: '10px',
    marginTop: '-100px',
    marginBottom: '2rem',
  },
  paper: {
    background: 'rgba(255,255,255)',
    height: '100%',
    borderRadius: '10px',
  },
}));

export default function PackageJumbotron(props) {
  const classes = useStyles();
  return (
    <div>
      <Box>
        <img
          src='./images/img-home.jpg'
          alt='Jumbotron'
          style={{
            position: 'relative',
            height: '55vh',
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -99,
          }}
        ></img>
      </Box>
      <Box className={classes.box} mx='auto'>
        <Paper className={classes.paper} elevation={10}>
          <Grid container className={classes.grid}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box mx={6} mt={3}>
                <h2 style={{ textAlign: 'center' }}>
                  {props.title}
                  <hr
                    style={{
                      width: '15%',
                      border: 'solid 2px #edd224',
                      margin: '2px auto 0 auto',
                    }}
                  ></hr>
                </h2>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box my={3} mx={10}>
                <Grid container>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box mx='auto'>
                      <h4 className='package-icon'>
                        <RatingComponent
                          alignValue={'center'}
                        ></RatingComponent>
                      </h4>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <h4 className='package-icon'>
                      <i className='fas fa-clock'></i> 11 Days
                    </h4>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <h4 className='package-icon'>
                      {/* <i class='fas fa-bus'></i> */}
                      <i className='fas fa-plane-arrival'></i>/
                      <i className='fas fa-plane-departure'></i>Kathmandu Nepal
                    </h4>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}
