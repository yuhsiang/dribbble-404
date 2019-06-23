/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import 'sanitize.css/sanitize.css';
import 'font-awesome/css/font-awesome.min.css';

import App from './containers/App';

import { defaultTheme } from './Styled/Settings/theme';

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
      {/* <ConnectedRouter history={history}> */}
      <App />
      {/* </ConnectedRouter> */}
    </ThemeProvider>,
    MOUNT_NODE
  );
};

render();
