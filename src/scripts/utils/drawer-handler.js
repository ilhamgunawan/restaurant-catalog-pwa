const DrawerHandler = {
  init() {
    this._menuButton = document.querySelector('.open-nav-button');
    this._drawer = document.querySelector('.sidenav-mobile');
    this._menuButton.addEventListener('click', (event) => {
      this.openDrawer(event, this._drawer);
    });

    document.addEventListener('click', (event) => {
      if (event.target !== this._drawer) this.closeDrawer(event, this._drawer);
    });
  },

  openDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerHandler;