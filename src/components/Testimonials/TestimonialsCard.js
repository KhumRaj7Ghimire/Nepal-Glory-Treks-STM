import React from 'react';
import ReadMore from '../Read-More/ReadMore';
// import { Link } from 'react-router-dom';
import './TestimonialsCard.css';

export default function TestimonialsCard({trekker, trekker_country, image, description}) {
  return (
    <div>
      <div className='testimonial-card item'>
        <blockquote>
          <ReadMore content={description} maximumCount={160}>
            {' '}
          </ReadMore>

          <div className='arrow'></div>
        </blockquote>
        <img
          src={`http://localhost:8000${image}`}
        />
        <div className='author'>
          <h5>
            {trekker} 
          </h5>
          <span style={{color:"#EDD224"}}> {trekker_country}</span>
        </div>
      </div>
    </div>
  );
}
