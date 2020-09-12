import DrawerHandler from '../utils/drawer-handler';
import Home from './pages/home';

class App {
  constructor({ menuButton, drawer, content }) {
    this._menuButton = menuButton;
    this._drawer = drawer;
    this._content = content;
    this.initialAppShell();
  }

  initialAppShell() {
    DrawerHandler.init({
      menuButton: this._menuButton,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    this._content.innerHTML = Home.render();
    Home.afterRender();
  }
}

export default App;