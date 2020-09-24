import Card from '../components/card';
import RestaurantSource from '../../data/restaurant-source';
import SectionNavigateLink from '../components/section-navigate-link';
import OfflineConnectionHandler from '../../utils/offline-connection-handler';
import CardSkeletonInitiator from '../../utils/card-skeleton-initiator';
import HeaderTitleInitiator from '../../utils/header-title-initiator';

const RestaurantCatalogue = {
  async render() {
    return `
      <div class="restaurant-catalogue-wrapper">
        <section class="restaurant-section">
          <div class="restaurant-link-container"></div>
          <section class="restaurant-list"></section>
        </section>       
        <div class="offline-indicator-container"></div>
      </div>
    `;
  },

  async afterRender() {
    HeaderTitleInitiator.init('Restaurant Catalogue');
    this.renderSectionLink();

    const restaurantListContainer = document.querySelector('.restaurant-list');
    CardSkeletonInitiator.init(restaurantListContainer);

    try {
      const restaurants = await RestaurantSource.getRestaurantList();
      this.renderRestaurantList(restaurants, restaurantListContainer);
    } catch (error) {
      const offlineContainer = document.querySelector('.offline-indicator-container');
      offlineContainer.innerHTML = OfflineConnectionHandler.init();
    }
  },

  renderRestaurantList(restaurants, restaurantListContainer) {
    const html = restaurants
      .reduce((accumulator, restaurant) => accumulator + Card.render(restaurant), '');
    restaurantListContainer.innerHTML = html;
  },

  renderSectionLink() {
    const restaurantLinkContainer = document.querySelector('.restaurant-link-container');
    restaurantLinkContainer.innerHTML = SectionNavigateLink.render('Restaurant Catalogue', '#/restaurants');
  },
};

export default RestaurantCatalogue;