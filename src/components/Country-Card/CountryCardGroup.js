import React from 'react';
// import DestinationCards from './DestinationCards';
import CountryCard from './CountryCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '4rem',
    background: '#fff',
  },
}));

function CountryCardGroup() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth='lg'>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <CountryCard
              titles='Nepal'
              content='View all the packages available in Nepal'
              path='/destination'
            ></CountryCard>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <CountryCard
              titles='Bhutan'
              content='View all the packages available in Bhutan'
              path='/destination'
            ></CountryCard>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <CountryCard
              titles='Tibet'
              content='View all the packages available in Tibet'
              path='/destination'
            ></CountryCard>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <CountryCard
              titles='Indonesia'
              content='View all the packages available in Indonesia'
              path='/destination'
            ></CountryCard>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CountryCardGroup;
