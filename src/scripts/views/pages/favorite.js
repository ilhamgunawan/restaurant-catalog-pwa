import Card from '../components/card';
import SidenavDesktop from '../components/sidenav-desktop';
import SectionNavigateLink from '../components/section-navigate-link';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    return `
      <div class="favorite-wrapper">
        <aside class="sidenav-desktop-container"></aside>
        <section class="restaurant-section">
          <div class="favorite-link-container"></div>
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
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants(loadingHolder);

    const favoriteLinkContainer = document.querySelector('.favorite-link-container');
    this.renderSectionLink(favoriteLinkContainer);

    this.isFavoriteListEmpty(restaurants);
  },

  isFavoriteListEmpty(restaurants) {
    const restaurantListContainer = document.querySelector('.restaurant-list');
    if (restaurants.length === 0) {
      this.renderEmptyFavoriteList(restaurantListContainer);
    } else {
      this.renderRestaurantList(restaurantListContainer, restaurants);
    }
  },

  renderRestaurantList(restaurantListContainer, restaurants) {
    restaurantListContainer.innerHTML = restaurants
      .reduce((accumulator, restaurant) => accumulator + Card.render(restaurant), '');
  },

  renderEmptyFavoriteList(restaurantListContainer) {
    restaurantListContainer.innerHTML = '<span>Favorite list empty</span>';
  },

  renderSectionLink(favoriteLinkContainer) {
    favoriteLinkContainer.innerHTML = SectionNavigateLink.render('Favorite List', '#/favorite');
  },
};

export default Favorite;