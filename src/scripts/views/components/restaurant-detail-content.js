import CONFIG from '../../globals/config';
import PostReview from '../../data/post-review-handler';
import Alert from './alert';

const RestaurantDetailContent = {
  async render({
    name,
    description,
    pictureId,
    city,
    address,
    rating,
    menus: { foods, drinks },
    consumerReviews,
  }) {
    return `
      <img class="restaurant-image" src="${CONFIG.MEDIUM_IMAGE_URL}${pictureId}" alt="restaurant">
      <div class="restaurant-info-wrapper">
        <h2 class="restaurant-title">${name}</h2>
        <div class="restaurant-info-container">
          <i class="material-icons place-icon" aria-label="icon place">place</i>
          <span class="restaurant-info">${address}, ${city}</span>
        </div>
        <div class="restaurant-info-container">
          <i class="material-icons rate-icon" aria-label="icon rating">star_rate</i>
          <span class="restaurant-info">${rating}</span>
        </div>
      </div>
      <div class="menus-wrapper">
        <div class="menus-container">
          <i class="material-icons food-icon" aria-label="icon food">restaurant</i>
          <span class="menu-list">${this.renderFoods(foods)}</span>
        </div>
        <div class="menus-container">
          <i class="material-icons drink-icon" aria-label="icon drink">local_cafe</i>
          <span class="menu-list">${this.renderDrinks(drinks)}</span>
        </div>
      </div>
      <p class="restaurant-description">${description}</p>
      <div class="restaurant-reviews-container">
        <h3 class="review-title">Community Reviews</h3>
        <div class="review-list">
          ${this.renderReviews(consumerReviews)}
        </div>
      </div>
      <form class="review-form">
        <h3 class="form-title">Post Review</h3>
        <label class="form-name-label" for="your-name">Name:</label>
        <input class="form-name-input" type="text" id="your-name" name="your-name" placeholder="Your Name">
        <label class="form-review-label" for="your-review">Review:</label>
        <textarea class="form-review-input" id="your-review" name="your-review" placeholder="Your Review"></textarea>
        <input class="form-submit-button" type="button" value="Post Review">
      </form>
      <div class="alert-placeholder"></div>
    `;
  },

  renderFoods(foods) {
    return foods
      .reduce((accumulator, food) => `${accumulator} ${food.name},`, '')
      .slice(0, -1);
  },

  renderDrinks(drinks) {
    return drinks
      .reduce((accumulator, drink) => `${accumulator} ${drink.name},`, '')
      .slice(0, -1);
  },

  renderReviews(consumerReviews) {
    return consumerReviews
      .reduce((accumulator, consumerReview) => `
        ${accumulator}
        <div class="review-wrapper">
          <span class="review-name">${consumerReview.name}</span>
          <span class="review-date">${consumerReview.date}</span>
          <p class="review-content">"${consumerReview.review}"</p>
        </div>`, '');
  },

  async afterRender(restaurantId) {
    const alertPlaceholder = document.querySelector('.alert-placeholder');
    alertPlaceholder.innerHTML = Alert.render();

    const submitButton = document.querySelector('.form-submit-button');
    const inputName = document.querySelector('.form-name-input');
    const inputReview = document.querySelector('.form-review-input');
    const alertContainer = document.querySelector('.alert-container');
    const alertMessageContainer = document.querySelector('.alert-message');
    await PostReview.post({
      submitButton,
      restaurantId,
      inputName,
      inputReview,
      alertContainer,
      alertMessageContainer,
    });
  },
};

export default RestaurantDetailContent;