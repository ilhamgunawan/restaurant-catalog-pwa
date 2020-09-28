const CardSkeleton = {
  render() {
    return `
      <div class="card-wrapper">
        <picture>
          <source type="image/webp" srcset="images/placeholder.webp">
          <source type="image/png" srcset="images/placeholder.png">
          <img 
            class="card-image-loading" 
            src="images/placeholder.png" 
            alt="restaurant-image"
          >
        </picture>
        <div class="card-content">
          <img class="card-title-loading" src="images/placeholder.png" alt="restaurant-name">
          <div class="card-info-wrapper">
            <div class="card-info-container">
              <img class="card-info-loading" src="images/placeholder.png" alt="restaurant-info">
            </div>
            <div class="card-info-container">
              <img class="card-info-loading" src="images/placeholder.png" alt="restaurant-info">            
            </div>
          </div>
          <img class="card-description-loading" src="images/placeholder.png" alt="restaurant-description">
          <img class="card-readmore-loading" src="images/placeholder.png" alt="restaurant-readmore">
        </div>
      </div>
    `;
  },
};

export default CardSkeleton;