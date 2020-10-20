import React from 'react';
import '../../App.css';
import Button from '../Button/Button';
import './Carousel.css';

function Carousel() {
  return (
    <div className='carousel-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p style={{textAlign:'center'}}>EXPLORE YOUR DESTINATION</p>
      <div className='carousel-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/destination'
        >
          START NOW <i className='fas fa-play-circle'></i>
        </Button>
      </div>
    </div>
  );
}

export default Carousel;
