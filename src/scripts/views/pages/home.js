import Card from '../components/card';
import SidenavDesktop from '../components/sidenav-desktop';
import RestaurantSource from '../../data/restaurant-source';
import SectionNavigateLink from '../components/section-navigate-link';
import HeroImage from '../components/hero-image';

const Home = {
  async render() {
    return `
      <div class="home-wrapper">
        <aside class="sidenav-desktop-container"></aside>
        <section class="hero-wrapper"></section>
        <section class="restaurant-section">
          <div class="restaurant-link-container"></div>
          <section class="restaurant-list"></section>
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
    const sidenavDesktopContainer = document.querySelector('.sidenav-desktop-container');
    this.renderSidenavDesktop(sidenavDesktopContainer);

    const heroImageContainer = document.querySelector('.hero-wrapper');
    this.renderHeroImage(heroImageContainer);

    const loadingHolder = document.querySelector('.loading-holder');
    const restaurants = await RestaurantSource.getRestaurantList(loadingHolder);

    const restaurantLinkContainer = document.querySelector('.restaurant-link-container');
    const favoriteLinkContainer = document.querySelector('.favorite-link-container');
    this.renderSectionLink(restaurantLinkContainer, favoriteLinkContainer);

    const restaurantListContainer = document.querySelector('.restaurant-list');
    this.renderRestaurantList(restaurantListContainer, restaurants);

    const favoriteList = document.querySelector('.home-fav-list');
    favoriteList.innerHTML = `
      <span>Favorite list empty.</span>
    `;
  },

  renderSidenavDesktop(sidenavDesktopContainer) {
    sidenavDesktopContainer.innerHTML = SidenavDesktop.render();
  },

  renderHeroImage(heroImageContainer) {
    heroImageContainer.innerHTML = HeroImage.render();
  },

  renderRestaurantList(restaurantListContainer, restaurants) {
    restaurantListContainer.innerHTML = restaurants
      .slice(0, 8)
      .reduce((accumulator, restaurant) => accumulator + Card.render(restaurant), '');
  },

  renderSectionLink(restaurantLinkContainer, favoriteLinkContainer) {
    restaurantLinkContainer.innerHTML = SectionNavigateLink.render('Restaurant Catalogue', '#/restaurants');
    favoriteLinkContainer.innerHTML = SectionNavigateLink.render('Favorite List', '#/favorite');
  },
};

export default Home;