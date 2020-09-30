import RestaurantSource from '../data/restaurant-source';
import AlertHandler from './alert-handler';
import ReviewList from '../views/components/review-list';

const PostReview = {
  async post({
    submitButton,
    restaurantId,
    inputName,
    inputReview,
  }) {
    submitButton.addEventListener('click', async () => {
      const userReview = {
        id: restaurantId,
        name: inputName.value,
        review: inputReview.value,
      };

      const { name, review } = userReview;

      switch (true) {
        case this.isStringEmpty(name):
        case this.isStringOnlyWhiteSpaces(name):
        case this.isStringEmpty(review):
        case this.isStringOnlyWhiteSpaces(review):
          this.cannotPostReview(inputName, inputReview);
          break;
        default:
          this.postReview(userReview, inputName, inputReview);
          break;
      }
    });
  },

  isStringEmpty(string) {
    return !!(string.length === 0);
  },

  isStringOnlyWhiteSpaces(string) {
    return !!(/^ *$/.test(string));
  },

  async postReview(userReview, inputName, inputReview) {
    const newReviews = await RestaurantSource.postReview(userReview);
    this.renderReviewsTitle(newReviews.length);
    this.renderUpdatedReviews(newReviews);
    AlertHandler.reviewPostedAlert();
    this.resetForm(inputName, inputReview);
    AlertHandler.closeAlert();
  },

  cannotPostReview(inputName, inputReview) {
    AlertHandler.fieldCannotEmptyAlert();
    this.resetForm(inputName, inputReview);
    AlertHandler.closeAlert();
  },

  renderUpdatedReviews(updatedReviews) {
    const reviewListContainer = document.querySelector('.review-list');
    reviewListContainer.innerHTML = ReviewList.render(updatedReviews);
  },

  renderReviewsTitle(reviewsLength) {
    const reviewListTitleElement = document.querySelector('.review-title');
    reviewListTitleElement.innerHTML = ReviewList.renderTotalReviews(reviewsLength);
  },

  resetForm(nameInputElement, reviewInputElement) {
    nameInputElement.value = '';
    reviewInputElement.value = '';
  },
};

export default PostReview;