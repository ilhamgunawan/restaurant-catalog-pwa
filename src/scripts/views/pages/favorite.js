// import Card from '../components/card';
import SidenavDesktop from '../components/sidenav-desktop';

const Favorite = {
  async render() {
    return `
      <div class="favorite-wrapper">
        <div class="sidenav-desktop-container"></div>

        <section class="restaurant-section">
          <a href="#/favorite" class="section-navigate-link">
            <img class="section-navigate-icon" src="/icon-link.svg" alt="link icon">
            <h2 class="section-title">Favorite List</h2>  
          </a>
          <div class="loading-holder"></div>
          <section class="restaurant-list"></section>
        </section>

      </div>
    `;
  },

  async afterRender() {
    const sidenavDesktop = document.querySelector('.sidenav-desktop-container');
    sidenavDesktop.innerHTML = SidenavDesktop.render();

    const restaurantList = document.querySelector('.restaurant-list');
    restaurantList.innerHTML = `
      <span>Favorite list empty.</span>
    `;
  },
};

export default Favorite;