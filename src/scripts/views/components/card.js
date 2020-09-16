import CONFIG from '../../globals/config';

const Card = {
  render({ id, name, pictureId, description, city, rating }) {
    return `
      <div class="card-wrapper">
        <image class="card-image" src="${CONFIG.SMALL_IMAGE_URL}/${pictureId}" alt="${name}">
        <div class="card-content">
          <h3 class="card-title">${name}</h3>
          <div class="card-info-wrapper">
            <div class="card-info-container">
                <i class="material-icons place-icon" aria-label="icon place">place</i>
                <span class="card-city" aria-label="restaurant location">${city}</span>
            </div>
            <div class="card-info-container">
                <i class="material-icons rate-icon" aria-label="icon rating">star_rate</i>
                <span class="card-rating" aria-label="restaurant rating">${rating}</span>                
            </div>
          </div>
          <p class="card-description">
            ${description.substring(0, 150)}...
          </p>
          <a class="card-readmore" href="#/detail/${id}">Read more</a>
        </div>
      </div>
    `;
  },
};

export default Card;