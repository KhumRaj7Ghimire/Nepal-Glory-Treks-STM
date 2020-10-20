import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function RatingComponent(props) {
  const [value, setValue] = React.useState(4);

  return (
    <div>
      <Box component='fieldset' borderColor='transparent'>
        <Rating name='read-only' value={value} readOnly />
        <p style={{ textAlign: props.alignValue, fontSize: '1rem' }}>
          (10 reviews)
        </p>
      </Box>
    </div>
  );
}
