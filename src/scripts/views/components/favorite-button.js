const FavoriteButton = {
  renderFavoriteButton() {
    return `
      <i class="material-icons fav-icon" aria-label="favorite button" title="Remove from favorite">favorite</i> 
    `;
  },

  renderFavoriteBorderButton() {
    return `
      <i class="material-icons fav-icon" aria-label="favorite button" title="Add to favorite">favorite_border</i> 
    `;
  },
};

export default FavoriteButton;