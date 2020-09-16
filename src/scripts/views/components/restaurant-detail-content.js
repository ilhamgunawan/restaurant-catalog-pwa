import CONFIG from '../../globals/config';
import FavoriteButtonHandler from '../../utils/favorite-button-handler';
import PostReview from '../../utils/post-review-handler';
import AlertHandler from '../../utils/alert-handler';

const RestaurantDetailContent = {
  async render({
    name,
    description,
    pictureId,
    city,
    address,
    rating,
  }) {
    return `
      <img class="restaurant-image" src="${CONFIG.MEDIUM_IMAGE_URL}/${pictureId}" alt="restaurant">
      <div class="restaurant-info-wrapper">
        <div class="restaurant-info-container">
          <h2 class="restaurant-title">${name}</h2>
          <span class="fav-button-container"></span>
        </div>
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
          <span class="menu-list food-list"></span>
        </div>
        <div class="menus-container">
          <i class="material-icons drink-icon" aria-label="icon drink">local_cafe</i>
          <span class="menu-list drink-list"></span>
        </div>
      </div>
      <p class="restaurant-description">${description}</p>
      <div class="restaurant-reviews-container">
        <h3 class="review-title">Community Reviews</h3>
        <div class="review-list"></div>
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

  async afterRender(restaurant) {
    const { id, menus: { foods, drinks }, consumerReviews } = restaurant;

    this.renderFoodList(foods);
    this.renderDrinkList(drinks);
    this.renderReviewList(consumerReviews);

    const alertPlaceholder = document.querySelector('.alert-placeholder');
    AlertHandler.init(alertPlaceholder);

    const submitButton = document.querySelector('.form-submit-button');
    const inputName = document.querySelector('.form-name-input');
    const inputReview = document.querySelector('.form-review-input');
    await PostReview.post({
      submitButton,
      restaurantId: id,
      inputName,
      inputReview,
    });

    const favoriteButtonContainer = document.querySelector('.fav-button-container');
    await FavoriteButtonHandler.init(favoriteButtonContainer, restaurant);
  },

  renderFoodList(foods) {
    const foodListContainer = document.querySelector('.food-list');
    foodListContainer.innerHTML = foods
      .reduce((accumulator, food) => `${accumulator} ${food.name},`, '')
      .slice(0, -1);
  },

  renderDrinkList(drinks) {
    const drinkListContainer = document.querySelector('.drink-list');
    drinkListContainer.innerHTML = drinks
      .reduce((accumulator, drink) => `${accumulator} ${drink.name},`, '')
      .slice(0, -1);
  },

  renderReviewList(consumerReviews) {
    const reviewListContainer = document.querySelector('.review-list');
    reviewListContainer.innerHTML = consumerReviews
      .reduce((accumulator, consumerReview) => `
        ${accumulator}
        <div class="review-wrapper">
          <span class="review-name">${consumerReview.name}</span>
          <span class="review-date">${consumerReview.date}</span>
          <p class="review-content">"${consumerReview.review}"</p>
        </div>`, '');
  },
};

export default RestaurantDetailContent;