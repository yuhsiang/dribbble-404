import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const Link = styled.a`
  opacity: 0.3;
  img{
    width: 96px;
    height: auto;
  }
`;

const Navigator = () => (
  <NavBar>
    <Link className="logo" href="http://github.com">
      <img src="logo.png" alt="dribbble" width="125" />
    </Link>
    <span>
      <a href="http://github.com">Contact us</a>
    </span>
  </NavBar>
);
export default Navigator;

