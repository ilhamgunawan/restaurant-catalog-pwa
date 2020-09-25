/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import EmptyFavoriteButton from '../views/components/empty-favorite-button';
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import AlertHandler from './alert-handler';

const EmptyFavoriteHandler = {
  init(favorites) {
    this._isFavoriteExist(favorites);
  },

  _isFavoriteExist(favorites) {
    if (favorites.length > 0) {
      this._renderEmptyButton();
      this._emptyButtonClickHandler();
    }
  },

  _renderEmptyButton() {
    const emptyButtonContainer = document.querySelector('.empty-button-container');
    emptyButtonContainer.innerHTML = EmptyFavoriteButton.render();
  },

  _emptyButtonClickHandler() {
    const emptyButton = document.querySelector('.empty-favorite-button');
    emptyButton.addEventListener('click', async () => {
      const popUpMessage = 'Do you want to empty favorite list?';
      const userCoice = confirm(popUpMessage);
      await this._isUserChooseOk(userCoice);
    });
  },

  async _isUserChooseOk(userCoice) {
    switch (userCoice) {
      case true:
        await this._userClickOk();
        return;
      default:
        this._userClickCancel();
    }
  },

  async _userClickOk() {
    await FavoriteRestaurantIdb.deleteAllRestaurants();
    AlertHandler.emptyFavoriteAlert();
    AlertHandler.closeAlert();
    this._renderFavoritePage();
  },

  _userClickCancel() {
    AlertHandler.emptyFavoriteCanceled();
    AlertHandler.closeAlert();
  },

  _renderFavoritePage() {
    location.reload();
  },
};

export default EmptyFavoriteHandler;