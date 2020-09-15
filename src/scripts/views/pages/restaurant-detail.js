import SidenavDesktop from '../components/sidenav-desktop';
import RestaurantDetailContent from '../components/restaurant-detail-content';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';

const RestaurantDetail = {
  async render() {
    return `
      <div class="restaurant-detail-wrapper">
        <aside class="sidenav-desktop-container"></aside>
        <section class="restaurant-detail-content"></section>
        <div class="loading-holder"></div>
      </div>
    `;
  },

  async afterRender() {
    const sidenavDesktopContainer = document.querySelector('.sidenav-desktop-container');
    this.renderSidenavDesktop(sidenavDesktopContainer);

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loadingHolder = document.querySelector('.loading-holder');
    const restaurant = await RestaurantSource.getRestaurantDetail(url.id, loadingHolder);

    const navbarTitle = document.querySelector('.brand-name');
    this.renderNavbarTitle(navbarTitle, restaurant.name);

    const restaurantDetailContent = document.querySelector('.restaurant-detail-content');
    restaurantDetailContent.innerHTML = await RestaurantDetailContent.render(restaurant);
    await RestaurantDetailContent.afterRender(restaurant.id);
  },

  renderSidenavDesktop(sidenavDesktopContainer) {
    sidenavDesktopContainer.innerHTML = SidenavDesktop.render();
  },

  renderNavbarTitle(navbarTitle, restaurantName) {
    navbarTitle.innerHTML = `Cari Résto / ${restaurantName}`;
  },
};

export default RestaurantDetail;