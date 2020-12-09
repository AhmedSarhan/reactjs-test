import React from 'react';

import { logDOM } from '@testing-library/react';
import './Header.css';

const header = (props) => {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="Logo-Container">
          <div className="logo-image">
            <img src="logo.png" alt="logo" />
            <i className="status"></i>
          </div>
          <div className="logo-name">
            <h3>McDonald's</h3>
            <p>Al Hamra</p>
          </div>
        </div>
        <div className="cart-container">
          <div className="cart">
            <svg width="22" height="22" viewBox="0 0 60 60">
              <path
                id="Bag"
                d="M48.947,60H11.053A11.064,11.064,0,0,1,0,48.949l4.287-37.9A11.063,11.063,0,0,1,15.337,0H44.663A11.062,11.062,0,0,1,55.711,11.051L60,48.949A11.064,11.064,0,0,1,48.947,60Zm-30-47.434a4.526,4.526,0,0,0-3.873,2.262,4.438,4.438,0,0,0-.036,4.456,17.15,17.15,0,0,0,29.914,0,4.441,4.441,0,0,0-.038-4.458,4.524,4.524,0,0,0-3.871-2.261,4.651,4.651,0,0,0-1.127.141l-1.8.448a33.516,33.516,0,0,1-8.126,1,33.516,33.516,0,0,1-8.126-1l-1.8-.448A4.651,4.651,0,0,0,18.952,12.566Z"
                fill="#45434D"
              ></path>
            </svg>
            <span className="cart-count">{props.cart}</span>
          </div>
          <div className="exc">
            <i className="fas fa-exclamation-circle"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
