const FavoriteButton = {
  renderFavoriteButton() {
    return `
      <button class="material-icons fav-icon" aria-label="favorite" title="Remove from favorite">favorite</button> 
    `;
  },

  renderFavoriteBorderButton() {
    return `
      <button class="material-icons fav-icon" aria-label="favorite" title="Add to favorite">favorite_border</button> 
    `;
  },
};

export default FavoriteButton;