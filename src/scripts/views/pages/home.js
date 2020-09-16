import Card from '../components/card';
import SectionNavigateLink from '../components/section-navigate-link';
import HeroImage from '../components/hero-image';
import RestaurantSource from '../../data/restaurant-source';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import SidenavDesktopInitiator from '../../utils/sidenav-desktop-initiator';
import OfflineConnectionHandler from '../../utils/offline-connection-handler';

const Home = {
  async render() {
    return `
      <div class="home-wrapper">
        <aside class="sidenav-desktop-container"></aside>
        <section class="hero-wrapper"></section>
        <section class="restaurant-section">
          <div class="restaurant-link-container"></div>
          <section class="restaurant-list"></section>
          <div class="offline-indicator-container"></div>
        </section>   
        <div class="loading-holder"></div>        
        <section class="restaurant-section home-fav-section">
          <div class="favorite-link-container"></div>
          <section class="restaurant-list home-fav-list"></section>
        </section>
      </div>
    `;
  },

  async afterRender() {
    SidenavDesktopInitiator.init();
    this.renderHeroImage();
    try {
      const restaurants = await RestaurantSource.getRestaurantList();
      this.renderSectionLink();
      const restaurantListContainer = document.querySelector('.restaurant-list');
      this.renderRestaurantList(restaurantListContainer, restaurants);
    } catch (error) {
      this.renderSectionLink();
      const offlineContainer = document.querySelector('.offline-indicator-container');
      offlineContainer.innerHTML = OfflineConnectionHandler.init();
    }
    const favorites = await FavoriteRestaurantIdb.getAllRestaurants();
    this.isFavoriteListEmpty(favorites);
  },

  renderHeroImage() {
    const heroImageContainer = document.querySelector('.hero-wrapper');
    heroImageContainer.innerHTML = HeroImage.render();
  },

  isFavoriteListEmpty(favorites) {
    const favoriteListContainer = document.querySelector('.home-fav-list');
    if (favorites.length === 0) {
      this.renderEmptyFavoriteList(favoriteListContainer);
    } else {
      this.renderRestaurantList(favoriteListContainer, favorites);
    }
  },

  renderRestaurantList(restaurantListContainer, restaurants) {
    restaurantListContainer.innerHTML = restaurants
      .slice(0, 8)
      .reduce((accumulator, restaurant) => accumulator + Card.render(restaurant), '');
  },

  renderEmptyFavoriteList(favoriteListContainer) {
    favoriteListContainer.innerHTML = '<span>Favorite list empty</span>';
  },

  renderSectionLink() {
    const restaurantLinkContainer = document.querySelector('.restaurant-link-container');
    const favoriteLinkContainer = document.querySelector('.favorite-link-container');
    restaurantLinkContainer.innerHTML = SectionNavigateLink.render('Restaurant Catalogue', '#/restaurants');
    favoriteLinkContainer.innerHTML = SectionNavigateLink.render('Favorite List', '#/favorite');
  },
};

export default Home;