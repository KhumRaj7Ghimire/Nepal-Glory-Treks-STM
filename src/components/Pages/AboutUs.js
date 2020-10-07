import React, { useState } from 'react';
// import Jumbotron from '../Jumbotron/Jumbotron';
import Data from '../Data';
import DestinationCountry from './DestinationCountry';

export default function AboutUs() {
  const [data, setData] = useState(Data);

  return (
    <div>
      {/* <h1>About Us</h1> */}
      <DestinationCountry />
      {/* <DestinationCardsGroup /> */}
      {/* <Jumbotron></Jumbotron> */}
    </div>
  );
}
