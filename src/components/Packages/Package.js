import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../Animated-Cards/AnimatedCard.css';

const Package = ({ id, title, src, match, history }) => {
  return (
    <div
      key={id}
      className='animated-card-container'
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div className='animated-card-overlay'>
        <div className='animated-card-items'></div>
        <div className='animated-card-items head'>
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
