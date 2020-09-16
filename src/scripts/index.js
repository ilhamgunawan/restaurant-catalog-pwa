import 'regenerator-runtime';
import '../styles/styles.scss';
import '../styles/styles-768px.scss';
import '../styles/styles-1024px.scss';
import '../styles/styles-1280px.scss';
import '../styles/styles-1440px.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  menuButton: document.querySelector('.open-nav-button'),
  drawer: document.querySelector('.sidenav-mobile'),
  content: document.querySelector('#mainContent'),
  navbarTitle: document.querySelector('.brand-name'),
});

window.addEventListener('load', () => {
  swRegister();
  app.renderPage();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});