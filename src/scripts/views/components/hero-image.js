const HeroImage = {
  render() {
    return `
      <picture>
        <source media="(min-width: 1280px)" type="image/webp" srcset="images/heros/hero-image_2-large.webp">
        <source media="(min-width: 768px)" type="image/webp" srcset="images/heros/hero-image_2-medium.webp">
        <source media="(max-width: 768px)" type="image/webp" srcset="images/heros/hero-image_2-small.webp">
        <source media="(min-width: 1280px)" type="image/jpeg" srcset="images/heros/hero-image_2-large.jpg">
        <source media="(min-width: 768px)" type="image/jpeg" srcset="images/heros/hero-image_2-medium.jpg">
        <source media="(max-width: 768px)" type="image/jpeg" srcset="images/heros/hero-image_2-small.jpg">
        <img 
          class="hero-image" 
          src="images/heros/hero-image_2-large.jpg" 
          srcset="images/hero-image_2-small.jpg 480w, images/heros/hero-image_2-medium.jpg 800w, images/heros/hero-image_2-large.jpg 1280w"
          sizes="(max-width: 768px) 480px, (min-width: 768px) 800px, (min-width: 1280px) 1280px"
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