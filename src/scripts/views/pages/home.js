import Card from '../components/card';

const Home = {
  render() {
    return `
      <div class="home-wrapper">
        <section class="hero-wrapper">
          <div class="hero-image" style="background-image: url('/images/heros/hero-image_2.jpg');">
            <div class="hero-overlay">
              <div class="hero-text-wrapper">
                <span class="hero-text">Cari Résto</span>
                <span class="hero-text">A platform to find best restaurant in town</span>
              </div>
            </div>
          </div>
        </section>
        <section class="home-restaurants-section">
          <a href="#restaurants" class="home-navigate-link">
            <i class="material-icons">link</i>
            <h2 class="home-subtitle">Restaurants</h2>  
          </a>
          <section class="home-restaurants-list"></section>
        </section>
        <section class="home-fav-section">
          <a href="#favorite" class="home-navigate-link">
            <i class="material-icons">link</i>
            <h2 class="home-subtitle">Favorite</h2>  
          </a>  
          <section class="home-fav-list"></section>
        </section>
      </div>
    `;
  },

  afterRender() {
    const restaurantsList = document.querySelector('.home-restaurants-list');
    restaurantsList.innerHTML = Card.render() + Card.render();

    const favoriteList = document.querySelector('.home-fav-list');
    favoriteList.innerHTML = Card.render() + Card.render();
  },
};

export default Home;