const Alert = {
  render() {
    return `
      <div class="alert-container">
        <span class="alert-message"></span>
      </div>
    `;
  },

  reviewPostedAlert(alertContainer, alertMessageContainer) {
    alertMessageContainer.innerHTML = 'Review posted';
    alertContainer.classList.toggle('alert-open');
  },

  reviewNotPostedAlert(alertContainer, alertMessageContainer) {
    alertMessageContainer.innerHTML = 'Review not posted';
    alertContainer.classList.toggle('alert-open');
  },

  addedToFavoriteAlert(alertContainer, alertMessageContainer) {
    alertMessageContainer.innerHTML = 'Added to favorite list';
    alertContainer.classList.toggle('alert-open');
  },

  removeFromFavoriteAlert(alertContainer, alertMessageContainer) {
    alertMessageContainer.innerHTML = 'Removed from favorite list';
    alertContainer.classList.toggle('alert-open');
  },

  closeAlert(alertContainer) {
    setTimeout(() => {
      alertContainer.classList.remove('alert-open');
    }, 2000);
  },
};

export default Alert;