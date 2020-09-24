import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';

import '../styles/import-font.scss';
import '../styles/styles.scss';
import '../styles/styles-768px.scss';
import '../styles/styles-1024px.scss';
import '../styles/styles-1280px.scss';
import '../styles/styles-1440px.scss';
import App from './views/app';

const app = new App({
  skipLinkContainer: document.querySelector('#skip-link-container'),
  headerContainer: document.querySelector('#header'),
  sidenavDesktopContainer: document.querySelector('#sidenav-desktop'),
  sidenavMobileContainer: document.querySelector('#sidenav-mobile'),
  bottomNavMobileContainer: document.querySelector('#bottom-nav'),
  footerContainer: document.querySelector('#footer'),
  initialLoadingContainer: document.querySelector('#initial-loading'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('load', () => {
  swRegister();
  app.renderPage();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});