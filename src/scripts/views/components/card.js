const Card = {
  render() {
    return `
      <div class="card-wrapper">
        <image class="card-image" src="/images/heros/hero-image_4.jpg" alt="restaurant">
        <div class="card-content">
          <h3 class="card-title">Card Title</h3>
          <div class="card-info-wrapper">
            <div class="card-info-container">
                <i class="material-icons place-icon" aria-label="icon place">place</i>
                <span class="card-city" aria-label="restaurant location">Location</span>
            </div>
            <div class="card-info-container">
                <i class="material-icons rate-icon" aria-label="icon rating">star_rate</i>
                <span class="card-rating" aria-label="restaurant rating">4.5</span>                
            </div>
          </div>
          <p class="card-description">
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
          </p>
          <a class="card-readmore" href="#detail">Read more</a>
        </div>
      </div>
    `;
  },
};

export default Card;