const HeaderNavActiveHandler = {
  toggleActiveNav(activeNavPosition) {
    this._resetActiveNav();
    const activeHeaderNav = document.querySelector(`.topnav-link:nth-child(${activeNavPosition})`);
    const activeBottomNav = document.querySelector(`.bottom-nav-button:nth-child(${activeNavPosition})`);
    activeHeaderNav.classList.toggle('active-nav');
    activeBottomNav.classList.toggle('active-nav');
  },

  _resetActiveNav() {
    const headerNavLinks = Array.from(document.querySelectorAll('.topnav-link'));
    headerNavLinks.forEach((navLink) => {
      navLink.classList.remove('active-nav');
    });

    const bottomNavButtons = Array.from(document.querySelectorAll('.bottom-nav-button'));
    bottomNavButtons.forEach((navButton) => {
      navButton.classList.remove('active-nav');
    });
  },
};

export default HeaderNavActiveHandler;