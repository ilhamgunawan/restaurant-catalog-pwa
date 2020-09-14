import Card from '../components/card';
import SidenavDesktop from '../components/sidenav-desktop';
import RestaurantSource from '../../data/restaurant-source';

const RestaurantCatalogue = {
  async render() {
    return `
      <div class="restaurant-catalogue-wrapper">
        <div class="sidenav-desktop-container"></div>

        <section class="restaurant-section">
          <a href="#/restaurants" class="section-navigate-link">
            <img class="section-navigate-icon" src="/icon-link.svg" alt="link icon">
            <h2 class="section-title">Restaurant Catalogue</h2>  
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

    const loadingHolder = document.querySelector('.loading-holder');
    const restaurants = await RestaurantSource.getRestaurantList(loadingHolder);

    const restaurantList = document.querySelector('.restaurant-list');
    restaurantList.innerHTML = restaurants
      .reduce((accumulator, restaurant) => accumulator + Card.render(restaurant), '');
  },
};

export default RestaurantCatalogue;