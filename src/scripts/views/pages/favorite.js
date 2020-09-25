import Card from '../components/card';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import CardSkeletonInitiator from '../../utils/card-skeleton-initiator';
import HeaderTitleInitiator from '../../utils/header-title-initiator';
import HeaderNavActiveHandler from '../../utils/header-nav-active-handler';
import FavoriteEmptyIndicator from '../components/favorite-empty-indicator';
import EmptyFavoriteHandler from '../../utils/empty-favorite-handler';
import AlertHandler from '../../utils/alert-handler';

const Favorite = {
  async render() {
    return `
      <div class="favorite-wrapper">
        <section class="restaurant-section">
          <section class="restaurant-list"></section>
        </section>        
        <div class="empty-button-container"></div>
        <div class="alert-placeholder"></div>
      </div>
    `;
  },

  async afterRender() {
    HeaderTitleInitiator.init('Favorite List');
    HeaderNavActiveHandler.toggleActiveNav(3);

    const alertPlaceholder = document.querySelector('.alert-placeholder');
    AlertHandler.init(alertPlaceholder);

    const restaurantListContainer = document.querySelector('.restaurant-list');
    CardSkeletonInitiator.init(restaurantListContainer);

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    this.isFavoriteListEmpty(restaurants, restaurantListContainer);

    EmptyFavoriteHandler.init(restaurants);
  },

  isFavoriteListEmpty(restaurants, restaurantListContainer) {
    if (restaurants.length === 0) {
      this.renderEmptyFavoriteList(restaurantListContainer);
    } else {
      this.renderRestaurantList(restaurantListContainer, restaurants);
    }
  },

  renderRestaurantList(restaurantListContainer, restaurants) {
    const html = restaurants
      .reduce((accumulator, restaurant) => accumulator + Card.render(restaurant), '');
    restaurantListContainer.innerHTML = html;
  },

  renderEmptyFavoriteList(restaurantListContainer) {
    restaurantListContainer.innerHTML = FavoriteEmptyIndicator.render();
  },
};

export default Favorite;