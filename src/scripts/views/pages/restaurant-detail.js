import RestaurantDetailContent from '../components/restaurant-detail-content';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import OfflineConnectionHandler from '../../utils/offline-connection-handler';
import HeaderTitleInitiator from '../../utils/header-title-initiator';
import NavActiveHandler from '../../utils/nav-active-handler';

const RestaurantDetail = {
  async render() {
    return `
      <div class="restaurant-detail-wrapper">
        <section class="restaurant-detail-content"></section>
        <div class="offline-indicator-container"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getRestaurantDetail(url.id);
    this.isRestaurantDataReceived(restaurant);
  },

  async isRestaurantDataReceived(restaurant) {
    if (restaurant.id) {
      HeaderTitleInitiator.init(restaurant.name);
      NavActiveHandler.toggleActiveNav(2);
      const restaurantDetailContent = document.querySelector('.restaurant-detail-content');
      restaurantDetailContent.innerHTML = await RestaurantDetailContent.render(restaurant);
      await RestaurantDetailContent.afterRender(restaurant);
    } else {
      const offlineContainer = document.querySelector('.offline-indicator-container');
      offlineContainer.innerHTML = OfflineConnectionHandler.init();
    }
  },
};

export default RestaurantDetail;