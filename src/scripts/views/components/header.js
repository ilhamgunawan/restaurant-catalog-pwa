const Header = {
  render() {
    return `
      <div class="menu-button-container">
        <button class="material-icons menu-button open-nav-button">menu</button>
      </div>
      <div class="brand-container">
        <h1 class="brand-name">Cari Résto / </h1>
      </div>
      <aside class="topnav-container">
        <a href="#/home" class="topnav-link" title="Home">
          <span class="material-icons">home</span>
        </a>
        <a href="#/restaurants" class="topnav-link" title="Restaurant catalogue">
          <span class="material-icons">local_dining</span>
        </a>
        <a href="#/liked-restaurants" class="topnav-link" title="Liked restaurant">
          <span class="material-icons">thumb_up</span>
        </a>
        <a href="https://linkedin.com/in/ilham-gunawan" class="topnav-link" target="_blank" rel="noreferrer" title="About us">
          <span class="material-icons">insert_link</span>
        </a>
      </aside>
    `;
  },
};

export default Header;