import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Package.css';

const Package = ({ id, title, src, match, history }) => {
  return (
    <div
      key={id}
      className='package-container'
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div className='package-overlay'>
        <div className='package-items'></div>
        <div className='package-items head'>
          <p>{title}</p>
          <hr />
        </div>
        <Link to={`${match.path}`}>
          <button className='btns'>View All Packages</button>
        </Link>
      </div>
    </div>
  );
};
export default withRouter(Package);
