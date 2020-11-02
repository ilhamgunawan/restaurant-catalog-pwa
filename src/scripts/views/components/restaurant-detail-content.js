import CONFIG from '../../globals/config';
import FavoriteButtonHandler from '../../utils/favorite-button-handler';
import PostReview from '../../utils/post-review-handler';
import AlertHandler from '../../utils/alert-handler';
import ReviewList from './review-list';

const RestaurantDetailContent = {
  async render({
    name,
    description,
    pictureId,
    city,
    address,
    rating,
  }) {
    const imageUrl = `${CONFIG.MEDIUM_IMAGE_URL}/${pictureId}`;
    return `
      <div class="restaurant-header">
        <img class="restaurant-image lazyload" src="images/placeholder.png" 
          data-src="${pictureId ? imageUrl : 'images/placeholder.png'}" alt="${name}">
        <div class="restaurant-info-wrapper">
          <div class="restaurant-info-container">
            <h2 class="restaurant-title">${name}</h2>
            <span class="fav-button-container"></span>
          </div>
          <div class="restaurant-info-container">
            <i class="material-icons restaurant-category-label" aria-label="icon category">local_offer</i>
            <span class="restaurant-info restaurant-categories"></span>
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
      <h3 class="form-title">Community reviews</h3>
      <form class="review-form">
        <input class="form-name-input" type="text" id="your-name" name="your-name" placeholder="Your name...">
        <textarea class="form-review-input" id="your-review" name="your-review" placeholder="Add a review about this restaurant..."></textarea>
        <button class="form-submit-button">Review</button>
      </form>
      <div class="restaurant-reviews-container">
        <h3 class="review-title"></h3>
        <div class="review-list"></div>
      </div>
      <div class="alert-placeholder"></div>
    `;
  },

  async afterRender(restaurant) {
    const { id, menus: { foods, drinks }, customerReviews, categories } = restaurant;

    this.renderRestaurantCategories(categories);
    this.renderFoodList(foods);
    this.renderDrinkList(drinks);
    this.renderReviewsTitle(customerReviews.length);
    this.renderReviewList(customerReviews);
    this.submitFormHandler();

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

  submitFormHandler() {
    const formElement = document.querySelector('.review-form');
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  },

  renderRestaurantCategories(categories) {
    const categoriesContainer = document.querySelector('.restaurant-categories');
    categoriesContainer.innerHTML = categories
      .reduce((accumulator, category) => `${accumulator} ${category.name},`, '')
      .slice(0, -1);
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
    reviewListContainer.innerHTML = ReviewList.render(consumerReviews);
  },

  renderReviewsTitle(reviewsLength) {
    const reviewListTitleElement = document.querySelector('.review-title');
    reviewListTitleElement.innerHTML = ReviewList.renderTotalReviews(reviewsLength);
  },
};

export default RestaurantDetailContent;