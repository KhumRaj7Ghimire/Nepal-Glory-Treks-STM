import React, {useState, useEffect} from 'react';
import '../../App.css';
import Carousel from '../Carousel/Carousel';
import DestinationCardsGroup from '../Destination-Cards/DestinationCardsGroup';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TestimonialsCardGroup from '../Testimonials/TestimonialsCardGroup';
import { getReviews } from '../API/api';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '3rem 0 0 0',
    background: '#fff',
  },
}));

function Home() {
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const apiUrl = 'http://localhost:8000/api/testimonials/';
    getReviews(apiUrl)
    .then(
        (result) => {
            console.log('result :',result)
          setReviews(()=>(
            result
          ))
        },
        (error) => {
          setError(()=>({error}))
        })
  }, []);
  console.log("State :", reviews)

  return (
    <>
      <Carousel />
      <div className={classes.root}>
        <Box mb={10}>
          <h2>
            Popular Packages
            <i
              className='fas fa-fire'
              style={{ fontSize: '40px', marginLeft: '10px' }}
            ></i>
          </h2>
        </Box>
        <Box mb={10}>
          <DestinationCardsGroup />
        </Box>
        <TestimonialsCardGroup data={reviews}></TestimonialsCardGroup>
      </div>
    </>
  );
}

export default Home;
