import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Package.css';

const Package = ({ country_name, image }) => {
  return (
    <div
      className='package-container'
      style={{
        backgroundImage: `url(http://localhost:8000${image})`,
      }}
    >
      <div className='package-overlay'>
        <div className='package-items'></div>
        <div className='package-items head'>
          <h2>{country_name}</h2>
          <hr />
        </div>
        <Link to=
        {
          `/destination/${country_name}`
        }
        >
          <button className='btns1'>View All Packages</button>
        </Link>
      </div>
    </div>
  );
};
export default withRouter(Package);
