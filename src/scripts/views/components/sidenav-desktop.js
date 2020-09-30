const SidenavDesktop = {
  render() {
    return `
      <div class="sidenav-desktop-wrapper">
        <span class="sidenav-desktop-title">MENU</span>
        <a href="#/home" class="sidenav-desktop-link" title="Home">
          <span class="material-icons">home</span>
          <span class="sidenav-desktop-link-name">Home</span>
        </a>
        <a href="#/restaurants" class="sidenav-desktop-link" title="Restaurant catalogue">
          <span class="material-icons">local_dining</span>
          <span class="sidenav-desktop-link-name">Résto catalogue</span>
        </a>
        <a href="#/liked-restaurants" class="sidenav-desktop-link" title="Liked restaurant">
          <span class="material-icons">thumb_up</span>
          <span class="sidenav-desktop-link-name">Liked restaurant</span>
        </a>
        <a href="https://linkedin.com/in/ilhammrg" class="sidenav-desktop-link" target="_blank" rel="noreferrer" title="About us">
          <span class="material-icons">insert_link</span>
          <span class="sidenav-desktop-link-name">About us</span>
        </a>
      </div>
    `;
  },
};

export default SidenavDesktop;