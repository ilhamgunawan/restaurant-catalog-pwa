const SidenavDesktop = {
  render() {
    return `
      <div class="sidenav-desktop-wrapper">
        <a href="#/home" class="sidenav-desktop-link" title="Home">
          <span class="material-icons">home</span>
          <span class="sidenav-desktop-link-name">Home</span>
        </a>
        <a href="#/restaurants" class="sidenav-desktop-link" title="Restaurant Catalogue">
          <span class="material-icons">library_books</span>
          <span class="sidenav-desktop-link-name">Résto</span>
        </a>
        <a href="#/favorite" class="sidenav-desktop-link" title="Favorite">
          <span class="material-icons">favorite</span>
          <span class="sidenav-desktop-link-name">Favorite</span>
        </a>
        <a href="https://linkedin.com/in/ilhammrg" class="sidenav-desktop-link" target="_blank" rel="noreferrer" title="About Us">
          <span class="material-icons">insert_link</span>
          <span class="sidenav-desktop-link-name">About Us</span>
        </a>
      </div>
    `;
  },
};

export default SidenavDesktop;