
// React
import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from 'Styled/Settings/global';
import styled from 'styled-components';
import NavBar from '../App/Navigator';
import Main from './Main';
import Footer from '../App/Footer';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem;
  color: rgba(0,0,0,0.4);
  text-align: center;
  transition: background-color 1s linear;
`;

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <NavBar />
      <Main />
      <Footer />
    </Container>
  </>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

App.defaultProps = {
  location: {
    pathname: '',
  },
};


export default App;
