const SidenavMobile = {
  render() {
    return `
      <nav class="sidenav-wrapper">
        <a href="#/home" class="sidenav-link" title="Home">
          <span class="material-icons">home</span>
          <span class="sidenav-link-name">Home</span>
        </a>
        <a href="#/restaurants" class="sidenav-link" title="Restaurant catalogue">
          <span class="material-icons">local_dining</span>
          <span class="sidenav-link-name">Résto catalogue</span>
        </a>
        <a href="#/liked-restaurants" class="sidenav-link" title="Liked restaurant">
          <span class="material-icons">thumb_up</span>
          <span class="sidenav-link-name">Liked restaurant</span>
        </a>
        <a href="https://linkedin.com/in/ilhammrg" class="sidenav-link" target="_blank" rel="noreferrer" title="About us">
          <span class="material-icons">insert_link</span>
          <span class="sidenav-link-name">About us</span>
        </a>
      </nav>
      <footer class="sidenav-footer">
        <span class="footer-text">
          &copy; 2020
          <span class="footer-title">Cari Résto</span>
        </span>
        <a href="https://linkedin.com/in/ilhammrg" class="footer-link" target="_blank" rel="noreferrer" title="About Us">About Us</a>
      </footer>
    `;
  },
};

export default SidenavMobile;