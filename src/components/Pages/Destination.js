import React, { useState, useEffect } from 'react';
// import AnimatedCardGroup from '../Animated-Cards/AnimatedCardGroup';
import Box from '@material-ui/core/Box';
import Jumbotron from '../Jumbotron/Jumbotron';
import PackageGroup from '../Packages/PackageGroup';
import {getDestinations} from '../API/api'
import {countryList} from '../API/api'

export default function Destination() {
  const [destinations, setDestinations] = useState([]);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    // const apiUrl = 'http://localhost:8000/api/destinations/';
    getDestinations()
    .then(
        (result) => {
            console.log('result :',result)
          setDestinations(()=>(
            result.destinations
          ))
          setCountries(()=>(
            result.countries
          ))
        },
        (error) => {
          setError(()=>({error}))
        })
  }, []);
  return (
    <div>
      {destinations.map(({id, image, description }) => (
      <Jumbotron
      image = {image}
      key={id}
      title={'Destination'}
      details={description}
    ></Jumbotron>
          ))}
      <Box my={10}>
        <h2>
          Our Destinations
          <i className='im im-location' style={{ fontSize: '40px' }}></i>
        </h2>
      </Box>
      <PackageGroup data={countries} />
    </div>
  );
}
