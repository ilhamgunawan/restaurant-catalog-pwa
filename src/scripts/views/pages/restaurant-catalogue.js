import Card from '../components/card';
import RestaurantSource from '../../data/restaurant-source';
import SectionNavigateLink from '../components/section-navigate-link';
import SidenavDesktopInitiator from '../../utils/sidenav-desktop-initiator';
import OfflineConnectionHandler from '../../utils/offline-connection-handler';

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
        <div class="offline-indicator-container"></div>
      </div>
    `;
  },

  async afterRender() {
    SidenavDesktopInitiator.init();
    this.renderSectionLink();
    try {
      const restaurants = await RestaurantSource.getRestaurantList();
      this.renderRestaurantList(restaurants);
    } catch (error) {
      const offlineContainer = document.querySelector('.offline-indicator-container');
      offlineContainer.innerHTML = OfflineConnectionHandler.init();
    }
  },

  renderRestaurantList(restaurants) {
    const restaurantListContainer = document.querySelector('.restaurant-list');
    restaurantListContainer.innerHTML = restaurants
      .reduce((accumulator, restaurant) => accumulator + Card.render(restaurant), '');
  },

  renderSectionLink() {
    const restaurantLinkContainer = document.querySelector('.restaurant-link-container');
    restaurantLinkContainer.innerHTML = SectionNavigateLink.render('Restaurant Catalogue', '#/restaurants');
  },
};

export default RestaurantCatalogue;