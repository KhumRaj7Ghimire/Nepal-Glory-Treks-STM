import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    padding: '3rem 1rem',
    background: '#fff',
    '@media (max-width:780px)': {
      padding: '3rem 1rem',
    },
  },
}));

export default function ContactUs() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Contact Us</h1>
    </div>
  );
}
