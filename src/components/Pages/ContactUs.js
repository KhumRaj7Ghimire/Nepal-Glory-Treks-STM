import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContactUsForm from '../ContactUsForm/ContactUsForm';
import { Box, Paper } from '@material-ui/core';
import BookingForm from '../Booking-Form/BookingForm';
// import PackageJumbotron from '../Single-Package/PackageJumbotron';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '3rem 1rem',
    '@media (max-width:780px)': {
      padding: '3rem 1rem',
    },
  },
  pageContent: {
    margin: theme.spacing(4),
    padding: theme.spacing(4)
  }
}));

export default function ContactUs() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Box mb={3}>
        <h2>
          LEAVE US A MESSAGE
        </h2>
      </Box>
      <Paper className={classes.pageContent}>
      <ContactUsForm></ContactUsForm>
      <BookingForm></BookingForm>
      </Paper>
    </div>
  );
}
