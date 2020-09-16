import SidenavDesktop from '../views/components/sidenav-desktop';

const SidenavDesktopInitiator = {
  init() {
    this._sidenavDesktopContainer = document.querySelector('.sidenav-desktop-container');
    this.render();
  },

  render() {
    this._sidenavDesktopContainer.innerHTML = SidenavDesktop.render();
  },
};

export default SidenavDesktopInitiator;