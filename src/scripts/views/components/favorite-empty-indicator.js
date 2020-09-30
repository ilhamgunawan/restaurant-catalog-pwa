const FavoriteEmptyIndicator = {
  render() {
    return `
      <div class="favorite-empty">
        <img class="liked-empty-image" src="/empty-data.svg" alt="Empty image">
        <span class="liked-empty-text">Liked restaurant empty <i class="material-icons">mood_bad</i></span>
      </div>
    `;
  },
};

export default FavoriteEmptyIndicator;