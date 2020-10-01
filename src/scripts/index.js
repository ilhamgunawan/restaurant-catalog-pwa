import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/styles.scss';
import '../styles/styles-768px.scss';
import '../styles/styles-1024px.scss';
import '../styles/styles-1280px.scss';
import '../styles/styles-1440px.scss';
import '../styles/styles-1600px.scss';
import App from './views/app';

import swRegister from './utils/sw-register';

const app = new App({
  skipLinkContainer: document.querySelector('#skip-link-container'),
  headerContainer: document.querySelector('#header'),
  sidenavContainer: document.querySelector('.sidenav-container'),
  bottomNavMobileContainer: document.querySelector('#bottom-nav'),
  footerContainer: document.querySelector('#footer'),
  initialLoadingContainer: document.querySelector('#initial-loading'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  swRegister();
});