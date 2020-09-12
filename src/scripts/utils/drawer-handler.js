const DrawerHandler = {
  init({ menuButton, drawer, content }) {
    menuButton.addEventListener('click', (event) => {
      this.openDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this.closeDrawer(event, drawer);
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