import React from 'react';
// import styled from 'styled-components';

const Footer = () => (
  <footer>
    <form id="search">
      <div className="input input-search">
        <svg className="input-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <circle cx="6.75" cy="6.75" r="5.75" stroke="black" strokeWidth="2"></circle>
            <path d="M11.5 11.5L15.5 15.5" stroke="black" strokeWidth="2"></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="16" height="16" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        <input type="search" name="q" placeholder="Search for design or designers"/>
      </div>
    </form>
  </footer>
);

export default Footer;
