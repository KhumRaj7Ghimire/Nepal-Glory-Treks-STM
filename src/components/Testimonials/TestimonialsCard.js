import React from 'react';
// import { Link } from 'react-router-dom';
import './TestimonialsCard.css';

export default function TestimonialsCard(props) {
  return (
    <div>
      <div className='testimonial-card item'>
        <blockquote>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eos
          expedita at enim, reiciendis nemo consectetur illum ducimus qui optio
          voluptatibus? Totam tenetur consequuntur maxime recusandae amet
          excepturi? Dolores, optio.
          <div className='arrow'></div>
        </blockquote>
        <img
          src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg'
          alt='sq-sample3'
        />
        <div className='author'>
          <h5>
            Ram Bahadur Bohara <span> Kathmandu, Nepal</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
