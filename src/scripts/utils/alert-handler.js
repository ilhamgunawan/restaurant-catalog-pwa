import Alert from '../views/components/alert';

const AlertHandler = {
  init(alertPlaceHolder) {
    alertPlaceHolder.innerHTML = Alert.render();
    this._alertContainer = document.querySelector('.alert-container');
    this._alertMessageContainer = document.querySelector('.alert-message');
  },

  reviewPostedAlert() {
    this._alertMessageContainer.innerHTML = 'Review posted';
    this._alertContainer.classList.toggle('alert-open');
  },

  fieldCannotEmptyAlert() {
    this._alertMessageContainer.innerHTML = 'Fill the form properly!';
    this._alertContainer.classList.toggle('alert-open');
  },

  addedToFavoriteAlert() {
    this._alertMessageContainer.innerHTML = 'Added to liked restaurant';
    this._alertContainer.classList.toggle('alert-open');
  },

  removeFromFavoriteAlert() {
    this._alertMessageContainer.innerHTML = 'Removed from liked restaurant';
    this._alertContainer.classList.toggle('alert-open');
  },

  emptyFavoriteAlert() {
    this._alertMessageContainer.innerHTML = 'Favorites removed';
    this._alertContainer.classList.toggle('alert-open');
  },

  emptyFavoriteCanceled() {
    this._alertMessageContainer.innerHTML = 'Canceled';
    this._alertContainer.classList.toggle('alert-open');
  },

  closeAlert() {
    setTimeout(() => {
      this._alertContainer.classList.remove('alert-open');
    }, 2000);
  },
};

export default AlertHandler;