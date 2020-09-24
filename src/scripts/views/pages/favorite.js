import Card from '../components/card';
import SectionNavigateLink from '../components/section-navigate-link';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import CardSkeletonInitiator from '../../utils/card-skeleton-initiator';
import HeaderTitleInitiator from '../../utils/header-title-initiator';

const Favorite = {
  async render() {
    return `
      <div class="favorite-wrapper">
        <section class="restaurant-section">
          <div class="favorite-link-container"></div>
          <section class="restaurant-list"></section>
        </section>        
        <div class="loading-holder"></div>
      </div>
    `;
  },

  async afterRender() {
    HeaderTitleInitiator.init('Favorite List');
    this.renderSectionLink();

    const restaurantListContainer = document.querySelector('.restaurant-list');
    CardSkeletonInitiator.init(restaurantListContainer);

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    this.isFavoriteListEmpty(restaurants, restaurantListContainer);
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
    restaurantListContainer.innerHTML = '<span class="favorite-empty">Favorite list empty</span>';
  },

  renderSectionLink() {
    const favoriteLinkContainer = document.querySelector('.favorite-link-container');
    favoriteLinkContainer.innerHTML = SectionNavigateLink.render('Favorite List', '#/favorite');
  },
};

export default Favorite;