import React from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.css';
import Button from '../Button/Button';

export default function CountryCard(props) {
  return (
    <>
      <Link className='card-link' to={props.path}>
        <main class='page-content'>
          <div class='card'>
            <div class='content'>
              <h2 class='title'>{props.titles}</h2>
              <p class='copy'>{props.content}</p>
              <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--small'
              >
                View Packages
              </Button>
              {/* <Button class='btn'>View Packages</Button> */}
            </div>
          </div>
        </main>
      </Link>
    </>
  );
}
