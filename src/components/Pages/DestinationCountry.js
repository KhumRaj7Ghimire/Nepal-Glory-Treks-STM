import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Jumbotron from '../Jumbotron/Jumbotron';
import Data from '../Data';
import PackageGroup from '../Packages/PackageGroup';

export default function DestinationCountry() {
  const [jumbotron, setJumbotron] = useState({
    id: '',
    title: '',
    details: '',
  });
  const [data, setData] = useState(Data);
  useEffect(() => {
    setJumbotron((prevState) => ({
      ...prevState,
      id: 1,
      title: 'Nepal',
      details:
        'We have four destinations available for you to visit. Please do check the following Destinations and navigate through each of those destination to view the availabe packages',
    }));
  }, [data]);
  return (
    <div>
      <Jumbotron
        id={jumbotron.id}
        title={jumbotron.title}
        details={jumbotron.details}
      ></Jumbotron>
      <Box my={10}>
        <h2>
          Our Packages
          <i className='im im-location' style={{ fontSize: '40px' }}></i>
        </h2>
      </Box>
      <PackageGroup data={data}></PackageGroup>
    </div>
  );
}
