/* eslint-disable no-undef */
const FavoriteUtils = require('./utils/FavoriteUtils');

Feature('Adding favorite restaurant');

Scenario('showing empty favorite list', (I) => {
  FavoriteUtils.showingEmptyFavorite(I);
});

Scenario('adding a restaurant to favorite list', async (I) => {
  await FavoriteUtils.addingRestaurantToFavoriteList(I);
});