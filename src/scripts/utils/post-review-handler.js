import RestaurantSource from '../data/restaurant-source';
import AlertHandler from './alert-handler';

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

      try {
        const newReviews = await RestaurantSource.postReview(userReview);
        AlertHandler.reviewPostedAlert();
        this.renderUpdatedReviews(newReviews);
        this.resetForm(inputName, inputReview);
        AlertHandler.closeAlert();
      } catch (error) {
        this.resetForm(inputName, inputReview);
        AlertHandler.reviewNotPostedAlert();
        AlertHandler.closeAlert();
      }
    });
  },

  renderUpdatedReviews(updatedReviews) {
    const reviewListContainer = document.querySelector('.review-list');
    reviewListContainer.innerHTML = updatedReviews
      .reduce((accumulator, consumerReview) => `
        ${accumulator}
        <div class="review-wrapper">
          <span class="review-name">${consumerReview.name}</span>
          <span class="review-date">${consumerReview.date}</span>
          <p class="review-content">"${consumerReview.review}"</p>
        </div>`, '');
  },

  resetForm(nameInputElement, reviewInputElement) {
    nameInputElement.value = '';
    reviewInputElement.value = '';
  },
};

export default PostReview;