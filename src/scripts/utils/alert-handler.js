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
    this._alertMessageContainer.innerHTML = 'Field cannot be empty';
    this._alertContainer.classList.toggle('alert-open');
  },

  addedToFavoriteAlert() {
    this._alertMessageContainer.innerHTML = 'Added to favorite list';
    this._alertContainer.classList.toggle('alert-open');
  },

  removeFromFavoriteAlert() {
    this._alertMessageContainer.innerHTML = 'Removed from favorite list';
    this._alertContainer.classList.toggle('alert-open');
  },

  closeAlert() {
    setTimeout(() => {
      this._alertContainer.classList.remove('alert-open');
    }, 2000);
  },
};

export default AlertHandler;