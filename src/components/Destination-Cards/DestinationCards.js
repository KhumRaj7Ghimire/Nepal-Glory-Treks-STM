import React from 'react';
import { Link } from 'react-router-dom';
import RatingComponent from '../Single-Package/Rating';
import './DestinationCards.css';

export default function DestinationCards(props) {
  return (
    <Link className='cards__item__link' to={props.path}>
      <figure className='cards__item__pic-wrap' data-category={props.label}>
        <img 
        src= {`http://localhost:8000${props.image}`}
        alt='Travel Images' className='cards__item__img' />
      </figure>
      <div className='cards__item__info'>
        <div className='cards__rating__day'>
          <h5 className='cards__item__text' style={{ textAlign: 'justify' }}>
            <RatingComponent alignValue={'justify'}></RatingComponent>{' '}
          </h5>
          <h5 className='cards__item__text' style={{ textAlign: 'justify' }}>
            <i className='fas fa-clock'></i> 11 Days
          </h5>
        </div>
        <hr style={{ border: '1px ridge #D3D3D3', margin: '10px 0' }} />
        <h5 className='cards__item__text'>{props.text}</h5>
        <hr style={{ border: '1px ridge #D3D3D3', margin: '10px 0' }} />
      </div>
    </Link>
  );
}
