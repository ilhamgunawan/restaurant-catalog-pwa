/* eslint-disable no-undef */
const assert = require('assert');

class LikeRestaurantUtils {
  static showingEmptyLikedRestaurant(I) {
    I.seeElement('.liked-empty-image');
  }

  static async likingRestaurant(I) {
    I.seeElement('.liked-empty-image');

    I.amOnPage('/');

    I.seeElement('.card-readmore');

    const firstRestaurantLink = locate('.card-readmore').first();
    const firstRestaurantTitleElement = locate('.card-title').first();
    const firstRestaurantTitleText = await I.grabTextFrom(firstRestaurantTitleElement);

    I.click(firstRestaurantLink);

    I.seeElement('.fav-button-container button');
    I.click('.fav-button-container button');

    I.amOnPage('/#/liked-restaurants');
    I.seeElement('.card-wrapper');

    const favoriteRestaurantTitleText = await I.grabTextFrom('.card-title');

    assert.strictEqual(firstRestaurantTitleText, favoriteRestaurantTitleText);
  }

  static unlikingRestaurant(I) {
    I.seeElement('.card-wrapper');
    I.click('.card-readmore');

    I.seeElement('.fav-button-container button');
    I.click('.fav-button-container button');

    I.amOnPage('/#/liked-restaurants');
    I.seeElement('.liked-empty-image');
  }
}

module.exports = LikeRestaurantUtils;