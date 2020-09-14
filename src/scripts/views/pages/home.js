import Card from '../components/card';
import SidenavDesktop from '../components/sidenav-desktop';
import RestaurantSource from '../../data/restaurant-source';

const Home = {
  async render() {
    return `
      <div class="home-wrapper">
        <div class="sidenav-desktop-container"></div>

        <section class="hero-wrapper">
          <div class="hero-image" style="background-image: url('/images/heros/hero-image_2.jpg');">
            <div class="hero-overlay">
              <div class="hero-text-wrapper">
                <span class="hero-text">Cari Résto</span>
                <span class="hero-text">Platform to find best restaurant in town</span>
              </div>
            </div>
          </div>
        </section>

        <section class="restaurant-section">
          <a href="#/restaurants" class="section-navigate-link">
            <img class="section-navigate-icon" src="/icon-link.svg" alt="link icon">
            <h2 class="section-title">Restaurant Catalogue</h2>  
          </a>
          <div class="loading-holder"></div>
          <section class="restaurant-list"></section>
        </section>

        <section class="restaurant-section home-fav-section">
          <a href="#/favorite" class="section-navigate-link">
            <img class="section-navigate-icon" src="/icon-link.svg" alt="link icon">
            <h2 class="section-title">Favorite List</h2>  
          </a>  
          <section class="restaurant-list home-fav-list"></section>
        </section>

      </div>
    `;
  },

  async afterRender() {
    const sidenavDesktop = document.querySelector('.sidenav-desktop-container');
    sidenavDesktop.innerHTML = SidenavDesktop.render();

    const loadingHolder = document.querySelector('.loading-holder');
    const restaurants = await RestaurantSource.getRestaurantList(loadingHolder);

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