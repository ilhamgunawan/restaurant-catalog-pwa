import Card from '../components/card';
import SidenavDesktop from '../components/sidenav-desktop';
import Loading from '../components/loading';

const Home = {
  render() {
    return `
      <div class="home-wrapper">
        <div id="sidenav-desktop-container"></div>

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

        <section class="home-restaurants-section">
          <a href="#restaurants" class="home-navigate-link">
            <img class="home-navigate-icon" src="/icon-link.svg" alt="link icon">
            <h2 class="home-subtitle">Restaurant Catalogue</h2>  
          </a>
          <div class="loading-holder"></div>
          <section class="home-restaurants-list"></section>
        </section>

        <section class="home-fav-section">
          <a href="#favorite" class="home-navigate-link">
            <img class="home-navigate-icon" src="/icon-link.svg" alt="link icon">
            <h2 class="home-subtitle">Favorite List</h2>  
          </a>  
          <div class="loading-holder"></div>
          <section class="home-fav-list"></section>
        </section>

      </div>
    `;
  },

  async afterRender() {
    const sidenavDesktop = document.querySelector('#sidenav-desktop-container');
    sidenavDesktop.innerHTML = SidenavDesktop.render();

    const loadingHolder = Array.from(document.querySelectorAll('.loading-holder'));
    loadingHolder.forEach((holder) => holder.innerHTML = Loading.render());

    setTimeout(() => {
      loadingHolder.forEach((holder) => holder.innerHTML = '');

      const restaurantsList = document.querySelector('.home-restaurants-list');
      restaurantsList.innerHTML = Card.render() + Card.render() + Card.render() + Card.render();

      const favoriteList = document.querySelector('.home-fav-list');
      favoriteList.innerHTML = Card.render() + Card.render() + Card.render() + Card.render();
    }, 1000);
  },
};

export default Home;