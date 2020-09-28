const HeaderNavActiveHandler = {
  toggleActiveNav(activeNavPosition) {
    this._resetActiveNav();
    const activeHeaderNav = document.querySelector(`.topnav-link:nth-child(${activeNavPosition})`);
    const activeBottomNav = document.querySelector(`.bottom-nav-button:nth-child(${activeNavPosition})`);
    const activeSidenav = document.querySelector(`.sidenav-desktop-link:nth-child(${activeNavPosition + 1})`);
    activeHeaderNav.classList.toggle('active-nav');
    activeBottomNav.classList.toggle('active-nav');
    activeSidenav.classList.toggle('active-nav');
  },

  _resetActiveNav() {
    this._resetHeaderNav();
    this._resetBottomNav();
    this._resetSidenav();
  },

  _resetHeaderNav() {
    const headerNavLinks = Array.from(document.querySelectorAll('.topnav-link'));
    this._removeActiveNavClass(headerNavLinks);
  },

  _resetBottomNav() {
    const bottomNavButtons = Array.from(document.querySelectorAll('.bottom-nav-button'));
    this._removeActiveNavClass(bottomNavButtons);
  },

  _resetSidenav() {
    const sideNavLinks = Array.from(document.querySelectorAll('.sidenav-desktop-link'));
    this._removeActiveNavClass(sideNavLinks);
  },

  _removeActiveNavClass(navLinks) {
    navLinks.forEach((navLink) => {
      navLink.classList.remove('active-nav');
    });
  },
};

export default HeaderNavActiveHandler;