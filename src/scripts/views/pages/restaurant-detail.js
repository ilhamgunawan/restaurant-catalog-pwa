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
    const sidenavDesktop = document.querySelector('.sidenav-desktop-container');
    sidenavDesktop.innerHTML = SidenavDesktop.render();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loadingHolder = document.querySelector('.loading-holder');
    const navbarTitle = document.querySelector('.brand-name');
    const restaurant = await RestaurantSource.getRestaurantDetail(url.id, loadingHolder);

    navbarTitle.innerHTML = `Cari Résto / ${restaurant.name}`;

    const restaurantDetailContent = document.querySelector('.restaurant-detail-content');
    restaurantDetailContent.innerHTML = RestaurantDetailContent.render(restaurant);
  },
};

export default RestaurantDetail;