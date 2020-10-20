import React from 'react';
import DestinationCards from './DestinationCards';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0 4rem',
    background: '#fff',
    '@media (max-width:780px)': {
      // eslint-disable-line no-useless-computed-key
      padding: '0 1rem',
    },
  },
}));

function DestinationCardsGroup(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <DestinationCards
              image={props.image}
              text='Explore the hidden waterfall deep inside the Nepal Jungle'
              label='Adventure'
              path='/'
            ></DestinationCards>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <DestinationCards
              image={props.image}
              text='Explore the hidden waterfall deep inside the Nepal Jungle'
              label='Adventure'
              path='/'
            ></DestinationCards>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <DestinationCards
              image={props.image}
              text='Explore the hidden waterfall deep inside the Nepal Jungle'
              label='Adventure'
              path='/'
            ></DestinationCards>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <DestinationCards
              image={props.image}
              text='Explore the hidden waterfall deep inside the Nepal Jungle'
              label='Adventure'
              path='/'
            ></DestinationCards>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <DestinationCards
              image={props.image}
              text='Explore the hidden waterfall deep inside the Nepal Jungle'
              label='Adventure'
              path='/'
            ></DestinationCards>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <DestinationCards
              image={props.image}
              text='Explore the hidden waterfall deep inside the Nepal Jungle'
              label='Adventure'
              path='/'
            ></DestinationCards>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default DestinationCardsGroup;
