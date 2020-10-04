import React from 'react';
import AnimatedCardGroup from '../Animated-Cards/AnimatedCardGroup';
// import DestinationCardsGroup from '../Destination-Cards/DestinationCardsGroup';
import Box from '@material-ui/core/Box';
import Jumbotron from '../Jumbotron/Jumbotron';
// import Typography from '@material-ui/core/Typography';

export default function Destination() {
  return (
    <div>
      <Jumbotron></Jumbotron>
      <Box my={10}>
        <h2>
          Our Destinations
          <i class='im im-location' style={{ fontSize: '40px' }}></i>
        </h2>
      </Box>
      {/* <h1>Destinations</h1> */}
      <AnimatedCardGroup></AnimatedCardGroup>
      {/* <DestinationCardsGroup></DestinationCardsGroup> */}
    </div>
  );
}
