/* eslint-disable no-undef */
const LikeRestaurantUtils = require('./utils/FavoriteUtils');

Feature('Unliking restaurant');

Before((I) => {
  I.amOnPage('/#/liked-restaurants');
});

Scenario('showing empty liked restaurant', (I) => {
  LikeRestaurantUtils.showingEmptyLikedRestaurant(I);
});

Scenario('liking and then unliking a restaurant', async (I) => {
  await LikeRestaurantUtils.likingRestaurant(I);
  LikeRestaurantUtils.unlikingRestaurant(I);
});