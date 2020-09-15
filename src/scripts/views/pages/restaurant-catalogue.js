import Card from '../components/card';
import SidenavDesktop from '../components/sidenav-desktop';
import RestaurantSource from '../../data/restaurant-source';
import SectionNavigateLink from '../components/section-navigate-link';

const RestaurantCatalogue = {
  async render() {
    return `
      <div class="restaurant-catalogue-wrapper">
        <aside class="sidenav-desktop-container"></aside>
        <section class="restaurant-section">
          <div class="restaurant-link-container"></div>
          <section class="restaurant-list"></section>
        </section>       
        <div class="loading-holder"></div>
      </div>
    `;
  },

  async afterRender() {
    const sidenavDesktop = document.querySelector('.sidenav-desktop-container');
    sidenavDesktop.innerHTML = SidenavDesktop.render();

    const loadingHolder = document.querySelector('.loading-holder');
    const restaurants = await RestaurantSource.getRestaurantList(loadingHolder);

    const restaurantLink = document.querySelector('.restaurant-link-container');
    restaurantLink.innerHTML = SectionNavigateLink.render('Restaurant Catalogue', '#/restaurants');

    const restaurantList = document.querySelector('.restaurant-list');
    restaurantList.innerHTML = restaurants
      .reduce((accumulator, restaurant) => accumulator + Card.render(restaurant), '');
  },
};

export default RestaurantCatalogue;