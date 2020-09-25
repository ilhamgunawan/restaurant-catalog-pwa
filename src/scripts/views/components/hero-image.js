const HeroImage = {
  render() {
    return `
      <picture>
        <source type="image/webp" srcset="images/heros/hero-image_2-large.webp">
        <source type="image/webp" srcset="images/heros/hero-image_2-small.webp">
        <source type="image/jpeg" srcset="images/heros/hero-image_2-large.jpg">
        <source type="image/jpeg" srcset="images/heros/hero-image_2-small.jpg">
        <img 
          class="hero-image" 
          src="images/heros/hero-image_2-large.jpg" 
          srcset="images/hero-image_2-small.jpg 480w, images/heros/hero-image_2-large.jpg 800w"
          sizes="(max-width: 600px) 480px, 800px"
          alt="Hero"
        >
     </picture>
      <div class="hero-overlay">
        <div class="hero-text-wrapper">
          <span class="hero-text hero-title">Cari Résto</span>
          <span class="hero-text">Platform to find best restaurant in town</span>
        </div>
      </div>
    `;
  },
};

export default HeroImage;