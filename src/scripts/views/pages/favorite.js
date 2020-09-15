// import Card from '../components/card';
import SidenavDesktop from '../components/sidenav-desktop';
import SectionNavigateLink from '../components/section-navigate-link';
import Loading from '../components/loading';

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
    loadingHolder.innerHTML = Loading.render();

    setTimeout(() => {
      loadingHolder.innerHTML = '';

      const favoriteLink = document.querySelector('.favorite-link-container');
      favoriteLink.innerHTML = SectionNavigateLink.render('Favorite List', '#/favorite');

      const restaurantList = document.querySelector('.restaurant-list');
      restaurantList.innerHTML = `
        <span>Favorite list empty.</span>
      `;
    }, 500);
  },
};

export default Favorite;