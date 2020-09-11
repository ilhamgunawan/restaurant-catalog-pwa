/* eslint-disable no-console */
import 'regenerator-runtime';

import '../styles/styles.scss';
import App from './views/app';

const app = new App({
  menuButton: document.querySelector('.open-nav-button'),
  drawer: document.querySelector('.sidenav-mobile'),
  content: document.querySelector('body'),
});

window.addEventListener('load', () => {
  app.initialAppShell();
});
