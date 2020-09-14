const DrawerHandler = {
  init({ menuButton, drawer }) {
    menuButton.addEventListener('click', (event) => {
      this.openDrawer(event, drawer);
    });

    document.addEventListener('click', (event) => {
      if (event.target !== drawer) this.closeDrawer(event, drawer);
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