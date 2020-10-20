import React from 'react';
import './Jumbotron.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  box: {
    width: '83%',
    borderRadius: '10px',
    marginTop: '-100px',
  },
  paper: {
    background: 'rgba(255,255,255)',
    height: '100%',
    borderRadius: '10px',
  },
}));

export default function Jumbotron(props) {
  const classes = useStyles();
  return (
    <div>
      <Box>
        <img
          src= {`http://localhost:8000${props.image}`}
          
          alt='Jumbotron'
          style={{
            position: 'relative',
            height: '55vh',
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -99,
            // backgroundImage: `url(http://localhost:8000${props.image})`,
          }}
        ></img>
      </Box>
      <Box className={classes.box} mx='auto'>
        <Paper className={classes.paper} elevation={10}>
          <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box mx={6} mt={6}>
                <h2 style={{ textAlign: 'justify', textTransform:'uppercase' }}>
                  {props.title}{' '}
                  <hr
                    style={{ width: '60%', border: 'solid 2px #edd224' }}
                  ></hr>
                </h2>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Box m={6}>
                <p style={{ textAlign: 'justify', fontSize: '18px' }}>
                  {props.details}
                </p>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}
