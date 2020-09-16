import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import FavoriteButton from '../views/components/favorite-button';
import Alert from '../views/components/alert';

const FavoriteButtonHandler = {
  async init({ favoriteButtonContainer, restaurant, alertContainer, alertMessageContainer }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;
    this._alertContainer = alertContainer;
    this._alertMessageContainer = alertMessageContainer;

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
      Alert.addedToFavoriteAlert(this._alertContainer, this._alertMessageContainer);
      Alert.closeAlert(this._alertContainer);
      this.renderButton();
    });
  },

  renderFavoriteButton() {
    this._favoriteButtonContainer.innerHTML = FavoriteButton.renderFavoriteButton();

    const favButton = document.querySelector('.fav-icon');
    favButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      Alert.removeFromFavoriteAlert(this._alertContainer, this._alertMessageContainer);
      Alert.closeAlert(this._alertContainer);
      this.renderButton();
    });
  },
};

export default FavoriteButtonHandler;