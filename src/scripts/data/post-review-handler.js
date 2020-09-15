import RestaurantSource from './restaurant-source';
import Alert from '../views/components/alert';

const PostReview = {
  async post({
    submitButton,
    restaurantId,
    inputName,
    inputReview,
    alertContainer,
    alertMessageContainer,
  }) {
    submitButton.addEventListener('click', async () => {
      const userReview = {
        id: restaurantId,
        name: inputName.value,
        review: inputReview.value,
      };

      try {
        const newReviews = await RestaurantSource.postReview(userReview);
        Alert.openAlert(alertContainer, alertMessageContainer);
        this.renderUpdatedReviews(newReviews);
        this.resetForm(inputName, inputReview);
        Alert.closeAlert(alertContainer);
      } catch (error) {
        Alert.failureAlert(alertContainer, alertMessageContainer);
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