import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TestimonialsCard from './TestimonialsCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialsCard.css';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '1rem 6rem 4rem 6rem',
    background:
      'linear-gradient( 360deg, rgb(28, 27, 27) 100%, rgb(26, 23, 23) 100% );',
    '@media (max-width:780px)': {
      padding: '1rem',
    },
  },
}));

function AnimatedCardGroup() {
  const classes = useStyles();
  var settings = {
    // autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 865,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <Box my={5}>
          <h2 style={{ color: 'white' }}>
            What our client say?
            <i
              className='fas fa-fire'
              style={{ fontSize: '40px', marginLeft: '10px' }}
            ></i>
          </h2>
        </Box>
        <Slider {...settings}>
          <TestimonialsCard></TestimonialsCard>
          <TestimonialsCard></TestimonialsCard>
          <TestimonialsCard></TestimonialsCard>
          <TestimonialsCard></TestimonialsCard>
          <TestimonialsCard></TestimonialsCard>
          <TestimonialsCard></TestimonialsCard>
          <TestimonialsCard></TestimonialsCard>
          <TestimonialsCard></TestimonialsCard>
          <TestimonialsCard></TestimonialsCard>
        </Slider>
      </Container>
    </div>
  );
}

export default AnimatedCardGroup;
