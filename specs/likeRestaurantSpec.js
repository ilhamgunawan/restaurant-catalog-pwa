import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import {
  addFavoriteButtonContainer,
  addAlertContainer,
  initiateAlert,
  createFavoriteButtonWithRestaurant,
  createFavoriteButtonWithoutRestaurantID,
  simulateUserClickLikeButton,
  addingRestaurantIntoLikedRestaurant,
  emptyLikedRestaurant } from './utils/testUtils';

describe('Liking A Restaurant', () => {
  beforeEach(() => {
    document.body.innerHTML = addFavoriteButtonContainer() + addAlertContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await createFavoriteButtonWithRestaurant();

    expect(document.querySelector('[aria-label="Like"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await createFavoriteButtonWithRestaurant();

    expect(document.querySelector('[aria-label="Unlike"]'))
      .toBeFalsy();
  });

  it('should be able to like a restaurant', async () => {
    initiateAlert();

    await createFavoriteButtonWithRestaurant();

    simulateUserClickLikeButton();

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    await emptyLikedRestaurant();
  });

  it('should not add a restaurant again when its already liked', async () => {
    initiateAlert();

    await createFavoriteButtonWithRestaurant();

    await addingRestaurantIntoLikedRestaurant();

    simulateUserClickLikeButton();

    // no duplicate restaurant added
    expect(await FavoriteRestaurantIdb.getAllRestaurants())
      .toEqual([{ id: 1 }]);

    emptyLikedRestaurant();
  });

  it('should not add a restaurant when it has no id', async () => {
    initiateAlert();

    await createFavoriteButtonWithoutRestaurantID();

    simulateUserClickLikeButton();

    expect(await FavoriteRestaurantIdb.getAllRestaurants())
      .toEqual([]);
  });
});