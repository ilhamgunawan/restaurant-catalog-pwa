import DrawerHandler from '../utils/drawer-handler';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor({ menuButton, drawer, content, navbarTitle }) {
    this._menuButton = menuButton;
    this._drawer = drawer;
    this._content = content;
    this._navbarTitle = navbarTitle;
    this.initialAppShell();
  }

  initialAppShell() {
    DrawerHandler.init({
      menuButton: this._menuButton,
      drawer: this._drawer,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const pageTitle = `Cari Résto / ${url.replace('/', '')}`;
    this._navbarTitle.innerHTML = pageTitle;
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;