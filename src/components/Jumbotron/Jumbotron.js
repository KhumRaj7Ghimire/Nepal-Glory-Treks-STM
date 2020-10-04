import React from 'react';
import './Jumbotron.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  box: {
    // height: '200px',
    width: '83%',
    borderRadius: '10px',
    marginTop: '-100px',
  },
  paper: {
    background: 'rgba(255,255,255,0.9)',
    height: '100%',
    borderRadius: '10px',
    // overflow: 'hidden',
  },
}));

export default function Jumbotron() {
  const classes = useStyles();
  return (
    <div>
      <Box>
        <img
          src='./images/img-home.jpg'
          style={{
            position: 'relative',
            height: '50vh',
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -99,
          }}
        ></img>
      </Box>
      <Box className={classes.box} mx='auto'>
        <Paper className={classes.paper} elevation={10}>
          <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box m={6}>
                <h2 style={{ textAlign: 'justify' }}>
                  Destinations{' '}
                  <hr
                    style={{ width: '60%', border: 'solid 2px #edd224' }}
                  ></hr>
                </h2>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Box m={6}>
                <p style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                  est totam ab mollitia voluptatum perferendis, quidem sapiente
                  corrupti esse temporibus, laboriosam, non provident cupiditate
                  qui possimus. Corporis maxime sapiente corrupti cumque quasi
                  voluptates ut quos, fugit, facilis, ducimus soluta eos minus
                  sequi dolorem. Alias, officia similique modi necessitatibus
                  itaque magnam?
                </p>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}
