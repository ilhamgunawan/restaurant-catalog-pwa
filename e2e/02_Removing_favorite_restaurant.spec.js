/* eslint-disable no-undef */
const FavoriteUtils = require('./utils/FavoriteUtils');

Feature('Removing favorite restaurant');

Scenario('showing empty favorite list', (I) => {
  FavoriteUtils.showingEmptyFavorite(I);
});

Scenario('adding a restaurant to favorite list and then removing it from favorite list', async (I) => {
  await FavoriteUtils.addingRestaurantToFavoriteList(I);
  await FavoriteUtils.removingRestaurantFromFavoriteList(I);
});