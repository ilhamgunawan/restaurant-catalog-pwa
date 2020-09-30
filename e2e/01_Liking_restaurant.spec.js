/* eslint-disable no-undef */
const LikeRestaurantUtils = require('./utils/FavoriteUtils');

Feature('Liking restaurant');

Before((I) => {
  I.amOnPage('/#/liked-restaurants');
});

Scenario('showing empty liked restaurant', (I) => {
  LikeRestaurantUtils.showingEmptyLikedRestaurant(I);
});

Scenario('liking a restaurant', async (I) => {
  await LikeRestaurantUtils.likingRestaurant(I);
});