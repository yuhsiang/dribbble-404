import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import 'sanitize.css/sanitize.css';
import 'font-awesome/css/font-awesome.min.css';

import { defaultTheme } from './Styled/Settings/theme';
import SettingApp from './containers/SettingApp';

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
      <SettingApp />
    </ThemeProvider>,
    MOUNT_NODE
  );
};

render();

// Hot reloadable translation json files
if (module.hot) {
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time

  // Accept Everything For now Because we don't have i18n
  // module.hot.accept();
  module.hot.accept('containers/SettingApp', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}
