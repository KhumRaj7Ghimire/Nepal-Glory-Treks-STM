import React from 'react';
import { Link } from 'react-router-dom';
import './AnimatedCard.css';

export default function AnimatedCard(props) {
  return (
    <div
      class='animated-card-container'
      style={{
        backgroundImage: `url(${props.src})`,
      }}
    >
      <div class='animated-card-overlay'>
        <div class='animated-card-items'></div>
        <div class='animated-card-items head'>
          <p>{props.title}</p>
          <hr />
        </div>
        <Link className='animated-card-link' to={props.path}>
          <button
            className='animated-card-items btns'
            buttonStyle='btn--primary'
            buttonSize='btn--small'
          >
            View All Packages
          </button>
        </Link>
      </div>
    </div>
  );
}
