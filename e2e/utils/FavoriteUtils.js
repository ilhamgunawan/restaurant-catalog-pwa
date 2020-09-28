/* eslint-disable no-undef */
const assert = require('assert');

class FavoriteUtils {
  static showingEmptyFavorite(I) {
    I.amOnPage('/#/favorite');

    I.see('Favorite list empty', '.favorite-empty:nth-child(2)');
  }

  static async addingRestaurantToFavoriteList(I) {
    I.amOnPage('/#/favorite');

    I.see('Favorite list empty', '.favorite-empty:nth-child(2)');

    I.amOnPage('/');

    I.seeElement('.card-readmore');

    const firstRestaurantLink = locate('.card-readmore').first();
    const firstRestaurantTitleElement = locate('.card-title').first();
    const firstRestaurantTitleText = await I.grabTextFrom(firstRestaurantTitleElement);

    I.click(firstRestaurantLink);

    I.seeElement('.fav-button-container button');
    I.click('.fav-button-container button');

    I.amOnPage('/#/favorite');
    I.seeElement('.card-wrapper');

    const favoriteRestaurantTitleText = await I.grabTextFrom('.card-title');

    assert.strictEqual(firstRestaurantTitleText, favoriteRestaurantTitleText);
  }

  static removingRestaurantFromFavoriteList(I) {
    I.amOnPage('/#/favorite');

    I.seeElement('.card-wrapper');
    I.click('.card-readmore');

    I.seeElement('.fav-button-container button');
    I.click('.fav-button-container button');

    I.amOnPage('/#/favorite');
    I.see('Favorite list empty', '.favorite-empty:nth-child(2)');
  }
}

module.exports = FavoriteUtils;