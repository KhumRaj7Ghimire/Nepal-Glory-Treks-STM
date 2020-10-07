import React from 'react';
import Package from './Package';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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

function AnimatedCardGroup({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <Grid container spacing={5}>
          {data.map(({ id, ...otherProps }) => (
            <Grid key={id} item xs={12} sm={12} md={4} lg={4}>
              <Package src='images/img-1.jpg' {...otherProps}></Package>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default AnimatedCardGroup;
