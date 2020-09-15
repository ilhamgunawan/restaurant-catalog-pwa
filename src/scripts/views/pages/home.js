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
    const sidenavDesktop = document.querySelector('.sidenav-desktop-container');
    sidenavDesktop.innerHTML = SidenavDesktop.render();

    const heroImageContainer = document.querySelector('.hero-wrapper');
    heroImageContainer.innerHTML = HeroImage.render();

    const loadingHolder = document.querySelector('.loading-holder');
    const restaurants = await RestaurantSource.getRestaurantList(loadingHolder);

    const restaurantLink = document.querySelector('.restaurant-link-container');
    restaurantLink.innerHTML = SectionNavigateLink.render('Restaurant Catalogue', '#/restaurants');

    const favoriteLink = document.querySelector('.favorite-link-container');
    favoriteLink.innerHTML = SectionNavigateLink.render('Favorite List', '#/favorite');

    const restaurantsList = document.querySelector('.restaurant-list');
    restaurantsList.innerHTML = restaurants
      .slice(0, 8)
      .reduce((accumulator, restaurant) => accumulator + Card.render(restaurant), '');

    const favoriteList = document.querySelector('.home-fav-list');
    favoriteList.innerHTML = `
      <span>Favorite list empty.</span>
    `;
  },
};

export default Home;