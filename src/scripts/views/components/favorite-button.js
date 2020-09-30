const FavoriteButton = {
  renderFavoriteButton() {
    return `
      <button class="material-icons fav-icon" aria-label="Unlike" title="Unlike this restaurant">favorite</button> 
    `;
  },

  renderFavoriteBorderButton() {
    return `
      <button class="material-icons fav-icon" aria-label="Like" title="I like this restaurant">favorite_border</button> 
    `;
  },
};

export default FavoriteButton;