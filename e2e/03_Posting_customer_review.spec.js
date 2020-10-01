/* eslint-disable no-undef */
const reviewerName = 'User Testing';
const reviewContent = 'Posting a review for e2e testing.';

const goToFirstRestaurantPage = (I) => {
  I.seeElement('.card-readmore');

  const firstRestaurantLink = locate('.card-readmore').first();

  I.click(firstRestaurantLink);
};

Feature('Posting review');

Before((I) => {
  I.amOnPage('/');
});

Scenario('posting user review', (I) => {
  goToFirstRestaurantPage(I);

  I.seeElement('.review-form');

  const inputNameFieldElement = locate('.form-name-input');
  I.fillField(inputNameFieldElement, reviewerName);

  const inputReviewFieldElement = locate('.form-review-input');
  I.fillField(inputReviewFieldElement, reviewContent);

  I.click('.form-submit-button');
});

Scenario('showing posted review in review list', (I) => {
  goToFirstRestaurantPage(I);

  I.seeElement('.review-list');

  I.see(reviewerName, '.review-name span');
  I.see(reviewContent, '.review-content');
});