import Card from '../components/card';
import SidenavDesktop from '../components/sidenav-desktop';
import RestaurantSource from '../../data/restaurant-source';
import SectionNavigateLink from '../components/section-navigate-link';

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
      </div>
    `;
  },

  async afterRender() {
    const sidenavDesktopContainer = document.querySelector('.sidenav-desktop-container');
    this.renderSidenavDesktop(sidenavDesktopContainer);

    const loadingHolder = document.querySelector('.loading-holder');
    const restaurants = await RestaurantSource.getRestaurantList(loadingHolder);

    const restaurantLinkContainer = document.querySelector('.restaurant-link-container');
    this.renderSectionLink(restaurantLinkContainer);

    const restaurantListContainer = document.querySelector('.restaurant-list');
    this.renderRestaurantList(restaurantListContainer, restaurants);
  },

  renderSidenavDesktop(sidenavDesktopContainer) {
    sidenavDesktopContainer.innerHTML = SidenavDesktop.render();
  },

  renderSectionLink(restaurantLinkContainer) {
    restaurantLinkContainer.innerHTML = SectionNavigateLink.render('Restaurant Catalogue', '#/restaurants');
  },

  renderRestaurantList(restaurantListContainer, restaurants) {
    restaurantListContainer.innerHTML = restaurants
      .reduce((accumulator, restaurant) => accumulator + Card.render(restaurant), '');
  },
};

export default RestaurantCatalogue;