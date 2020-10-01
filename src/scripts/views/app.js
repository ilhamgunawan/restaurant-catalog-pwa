import DrawerHandler from '../utils/drawer-handler';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

import SkipLink from './components/skip-link';
import Header from './components/header';
import SideNav from './components/side-nav';
import BottomNavMobile from './components/bottom-nav-mobile';
import Footer from './components/footer';

class App {
  constructor({
    skipLinkContainer,
    headerContainer,
    sidenavContainer,
    sidenavDesktopContainer,
    bottomNavMobileContainer,
    footerContainer,
    content }) {
    this._skipLinkContainer = skipLinkContainer;
    this._headerContainer = headerContainer;
    this._sidenavContainer = sidenavContainer;
    this._sidenavDesktopContainer = sidenavDesktopContainer;
    this._bottomNavMobileContainer = bottomNavMobileContainer;
    this._footerContainer = footerContainer;
    this._content = content;
    this.initialAppShell();
  }

  initialAppShell() {
    this._skipLinkContainer.innerHTML = SkipLink.render();
    this._headerContainer.innerHTML = Header.render();
    this._sidenavContainer.innerHTML = SideNav.render();
    this._bottomNavMobileContainer.innerHTML = BottomNavMobile.render();
    this._footerContainer.innerHTML = Footer.render();
    DrawerHandler.init();
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;