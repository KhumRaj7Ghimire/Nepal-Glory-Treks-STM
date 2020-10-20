import React from 'react';
import Package from './Package';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0 4rem 8rem 4rem',
    background: '#fff',
    '@media (max-width:780px)': {
      padding: '0 1rem 6rem 1rem',
    },
  },
}));

function PackageGroup({ data }) {
  console.log('Data :', data)
  let index = 0;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <Grid container spacing={5}>
          {data.map((item) => (
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Package key={item.index} country_name ={item.country_name} image={item.image}></Package>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default PackageGroup;
