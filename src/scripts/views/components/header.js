const Header = {
  render() {
    return `
      <div class="menu-button-container">
        <button class="material-icons menu-button open-nav-button">menu</button>
      </div>
      <div class="brand-container">
        <h1 class="brand-name">Cari Résto / home</h1>
      </div>
      <aside class="topnav-container">
        <a href="#/home" class="topnav-link" title="Home">
          <span class="material-icons">home</span>
        </a>
        <a href="#/restaurants" class="topnav-link" title="Restaurant Catalogue">
          <span class="material-icons">library_books</span>
        </a>
        <a href="#/favorite" class="topnav-link" title="Favorite">
          <span class="material-icons">favorite</span>
        </a>
        <a href="https://linkedin.com/in/ilhammrg" class="topnav-link" target="_blank" rel="noreferrer" title="About Us">
          <span class="material-icons">insert_link</span>
        </a>
      </aside>
    `;
  },
};

export default Header;