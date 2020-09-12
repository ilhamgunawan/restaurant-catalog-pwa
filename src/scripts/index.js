import 'regenerator-runtime';

import '../styles/styles.scss';
import App from './views/app';

const app = new App({
  menuButton: document.querySelector('.open-nav-button'),
  drawer: document.querySelector('.sidenav-mobile'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('load', () => {
  app.renderPage();
});