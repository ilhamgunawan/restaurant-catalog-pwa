import CONFIG from '../../globals/config';

const RestaurantDetailContent = {
  render({ name, description, pictureId, city, address, rating, menus: { foods, drinks } }) {
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
};

export default RestaurantDetailContent;