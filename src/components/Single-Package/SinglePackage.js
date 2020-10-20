import React, { useState, useEffect } from 'react';
// import Box from '@material-ui/core/Box';
import PackageJumbotron from './PackageJumbotron';
import TripOverview from './TripOverview';
import Data from '../Data';
import Itinerary from './Itinerary';
import CostTab from './CostTabs';

export default function SinglePackage() {
  const [jumbotron, setJumbotron] = useState({
    id: '',
    title: '',
  });
  const [data, setData] = useState(Data);
  useEffect(() => {
    setJumbotron((prevState) => ({
      ...prevState,
      id: 1,
      title: 'Annapurna Base Camp Trek',
      details:
        'We have four destinations available for you to visit. Please do check the following Destinations and navigate through each of those destination to view the availabe packages',
    }));
  }, [data]);
  return (
    <div>
      <PackageJumbotron
        id={jumbotron.id}
        title={jumbotron.title}
        details={jumbotron.details}
      ></PackageJumbotron>
      <TripOverview></TripOverview>
      <Itinerary></Itinerary>
      <CostTab></CostTab>
    </div>
  );
}
