import React from 'react';
import Box from '@material-ui/core/Box';
import ReadMore from '../Read-More/ReadMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem 6rem',
    background: '#fff',
    '@media (max-width:780px)': {
      padding: '2rem 1.5rem',
    },
  },
}));
export default function TripOverview() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box my={3}>
        <h2>
          Trip Overview
          <i
            className='fas fa-file-alt'
            style={{ fontSize: '40px', margin: '0 8px' }}
          ></i>
        </h2>
      </Box>
      <ReadMore maximumCount={500}></ReadMore>
    </div>
  );
}
