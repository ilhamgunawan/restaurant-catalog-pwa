import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import FavoriteButton from '../views/components/favorite-button';
import AlertHandler from './alert-handler';

const FavoriteButtonHandler = {
  async init(favoriteButtonContainer, restaurant) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this._restaurant;
    if (await this.isRestaurantExit(id)) {
      this.renderFavoriteButton();
    } else {
      this.renderFavoriteBorderButton();
    }
  },

  async isRestaurantExit(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  renderFavoriteBorderButton() {
    this._favoriteButtonContainer.innerHTML = FavoriteButton.renderFavoriteBorderButton();

    const favButton = document.querySelector('.fav-icon');
    favButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      AlertHandler.addedToFavoriteAlert();
      AlertHandler.closeAlert();
      this.renderButton();
    });
  },

  renderFavoriteButton() {
    this._favoriteButtonContainer.innerHTML = FavoriteButton.renderFavoriteButton();

    const favButton = document.querySelector('.fav-icon');
    favButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      AlertHandler.removeFromFavoriteAlert();
      AlertHandler.closeAlert();
      this.renderButton();
    });
  },
};

export default FavoriteButtonHandler;