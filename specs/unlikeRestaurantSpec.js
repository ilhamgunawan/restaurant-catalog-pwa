import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import {
  addFavoriteButtonContainer,
  addAlertContainer,
  initiateAlert,
  createFavoriteButtonWithRestaurant,
  simulateUserClickUnlikeButton,
  addingRestaurantIntoLikedRestaurant,
  emptyLikedRestaurant } from './utils/testUtils';

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    document.body.innerHTML = addFavoriteButtonContainer() + addAlertContainer();
    await addingRestaurantIntoLikedRestaurant();
  });

  afterEach(async () => {
    await emptyLikedRestaurant();
  });

  it('should display unlike button when a restaurant has been liked', async () => {
    initiateAlert();

    await createFavoriteButtonWithRestaurant();

    expect(document.querySelector('[aria-label="Unlike"]'))
      .toBeTruthy();
  });

  it('should not display like button when a restaurant has been liked', async () => {
    initiateAlert();

    await createFavoriteButtonWithRestaurant();

    expect(document.querySelector('[aria-label="Like"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    initiateAlert();

    await createFavoriteButtonWithRestaurant();

    simulateUserClickUnlikeButton();

    expect(await FavoriteRestaurantIdb.getAllRestaurants())
      .toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    initiateAlert();

    await createFavoriteButtonWithRestaurant();

    await emptyLikedRestaurant();

    simulateUserClickUnlikeButton();

    expect(await FavoriteRestaurantIdb.getAllRestaurants())
      .toEqual([]);
  });
});