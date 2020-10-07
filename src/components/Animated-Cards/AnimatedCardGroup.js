import React from 'react';
import AnimatedCard from './AnimatedCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0 6rem 8rem 6rem',
    background: '#fff',
    '@media (max-width:780px)': {
      padding: '0 1rem 6rem 1rem',
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
            <Grid key={id} item xs={12} sm={12} md={6} lg={6}>
              <AnimatedCard
                src='images/img-1.jpg'
                {...otherProps}
              ></AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default AnimatedCardGroup;
