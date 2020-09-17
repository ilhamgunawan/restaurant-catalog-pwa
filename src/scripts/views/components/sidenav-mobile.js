const SidenavMobile = {
  render() {
    return `
      <nav class="sidenav-wrapper">
        <a href="#/home" class="sidenav-link" title="Home">
          <span class="material-icons">home</span>
          <span class="sidenav-link-name">Home</span>
        </a>
        <a href="#/restaurants" class="sidenav-link" title="Restaurant Catalogue">
          <span class="material-icons">library_books</span>
          <span class="sidenav-link-name">Résto</span>
        </a>
        <a href="#/favorite" class="sidenav-link" title="Favorite">
          <span class="material-icons">favorite</span>
          <span class="sidenav-link-name">Favorite</span>
        </a>
        <a href="https://linkedin.com/in/ilhammrg" class="sidenav-link" target="_blank" rel="noreferrer" title="About Us">
          <span class="material-icons">insert_link</span>
          <span class="sidenav-link-name">About Us</span>
        </a>
      </nav>
      <footer class="sidenav-footer">
        <span class="footer-text">Copyright &copy; 2020</span>
        <span class="footer-text">Cari Résto</span>
      </footer>
    `;
  },
};

export default SidenavMobile;