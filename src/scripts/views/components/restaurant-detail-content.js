import CONFIG from '../../globals/config';

const RestaurantDetailContent = {
  render({ name, description, pictureId, city, address, rating }) {
    return `
      <img class="restaurant-image" src="${CONFIG.MEDIUM_IMAGE_URL}${pictureId}" alt="restaurant">
      <h2 class="restaurant-title">${name}</h2>
      <div class="restaurant-info-wrapper">
        <span class="restaurant-info">${address}</span>
        <span class="restaurant-info">${city}</span>
        <span class="restaurant-info">${rating}</span>
      </div>
      <p class="restaurant-description">${description}</p>
    `;
  },
};

export default RestaurantDetailContent;