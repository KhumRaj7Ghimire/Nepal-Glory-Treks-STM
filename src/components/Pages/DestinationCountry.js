import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Jumbotron from '../Jumbotron/Jumbotron';
import {getDestinations, getCountry} from '../API/api'
import PackageGroup from '../Packages/PackageGroup';
import DestinationCardsGroup from '../Destination-Cards/DestinationCardsGroup'
import { useParams } from 'react-router-dom';

export default function DestinationCountry() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  let params = useParams();
  console.log('param :', params.country_name)
  useEffect(() => {
    const apiUrl = `http://localhost:8000/api/destinations/${params.country_name}/`;
    getCountry(apiUrl)
    .then(
        (result) => {
          console.log('result :',result)
          setCountries(()=>(
            result.country
          ))
        },
        (error) => {
          setError(()=>({error}))
        }
      )
      
  }, []);
  return (
    <div>
      <Jumbotron
      image = {countries.image}
      title={countries.country_name}
      details={countries.description}
    ></Jumbotron>
      <Box my={10}>
        <h2>
          Our Packages
          <i className='im im-location' style={{ fontSize: '40px' }}></i>
        </h2>
      </Box>
      <Box mb={10}>
          <DestinationCardsGroup image = {countries.image}
      />
        </Box>
    </div>
  );
}
