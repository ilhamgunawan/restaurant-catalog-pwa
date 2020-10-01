/* eslint-disable import/prefer-default-export */
import FavoriteButtonHandler from '../../src/scripts/utils/favorite-button-handler';
import AlertHandler from '../../src/scripts/utils/alert-handler';

const createFavoriteButtonPresenter = async (restaurant) => {
  const favoriteButtonContainer = document.querySelector('.fav-button-container');
  await FavoriteButtonHandler.init(favoriteButtonContainer, restaurant);
};

const createAlertInitiator = () => {
  const alertContainer = document.querySelector('.alert-placeholder');
  AlertHandler.init(alertContainer);
};

export { createFavoriteButtonPresenter, createAlertInitiator };