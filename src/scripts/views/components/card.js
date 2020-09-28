import CONFIG from '../../globals/config';

const Card = {
  render({ id, name, pictureId, description, city, rating }) {
    const imageUrl = `${CONFIG.SMALL_IMAGE_URL}/${pictureId}`;
    return `
      <div class="card-wrapper">
        <div class="card-image-container">
          <image class="card-image lazyload" src="images/placeholder.png" 
            data-src="${pictureId ? imageUrl : 'images/placeholder.png'}" alt="${name}">
        </div>
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
            ${description.substring(0, 100)}...
          </p>
          </div>
        <a class="card-readmore" href="#/detail/${id}" title="${name}">Read more</a>
      </div>
    `;
  },
};

export default Card;