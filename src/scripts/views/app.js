/* eslint-disable no-underscore-dangle */

import DrawerHandler from '../utils/sidenav-handler';

class App {
  constructor({ menuButton, drawer, content }) {
    this._menuButton = menuButton;
    this._drawer = drawer;
    this._content = content;
  }

  initialAppShell() {
    DrawerHandler.init({
      menuButton: this._menuButton,
      drawer: this._drawer,
      content: this._content,
    });
  }
}

export default App;
