import React from 'react';
import AnimatedCard from './AnimatedCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import img from '../../../public/images/img-1.jpg';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

// const matches = userMediaQuery('(min-width:1024px)');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0 6rem',
    background: '#fff',
    '@media (max-width:780px)': {
      padding: '0 1rem',
    },
  },
}));

function AnimatedCardGroup() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <AnimatedCard
              src='images/img-1.jpg'
              title='Nepal'
              path='/destination'
            ></AnimatedCard>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <AnimatedCard
              src='images/img-3.jpg'
              title='Bhutan'
              path='/destination'
            ></AnimatedCard>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <AnimatedCard
              src='images/img-4.jpg'
              title='Tibet'
              path='/destination'
            ></AnimatedCard>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <AnimatedCard
              src='images/img-2.jpg'
              title='Indonesia'
              path='/destination'
            ></AnimatedCard>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AnimatedCardGroup;
