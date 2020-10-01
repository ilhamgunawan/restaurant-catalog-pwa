import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from '../helpers/testFactories';

export const addFavoriteButtonContainer = () => '<div class="fav-button-container"></div>';

export const addAlertContainer = () => '<div class="alert-placeholder"></div>';

export const initiateAlert = () => {
  TestFactories.createAlertInitiator();
};

export const createFavoriteButtonWithRestaurant = async () => {
  await TestFactories.createFavoriteButtonPresenter({ id: 1 });
};

export const createFavoriteButtonWithoutRestaurantID = async () => {
  await TestFactories.createFavoriteButtonPresenter({});
};

export const simulateUserClickLikeButton = () => {
  document.querySelector('.fav-icon').dispatchEvent(new Event('click'));
};

export const simulateUserClickUnlikeButton = () => {
  document.querySelector('[aria-label="Unlike"]').dispatchEvent(new Event('click'));
};

export const addingRestaurantIntoLikedRestaurant = async () => {
  await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
};

export const emptyLikedRestaurant = async () => {
  await FavoriteRestaurantIdb.deleteRestaurant(1);
};