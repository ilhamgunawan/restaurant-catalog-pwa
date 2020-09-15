const Alert = {
  render() {
    return `
      <div class="alert-container">
        <span class="alert-message"></span>
      </div>
    `;
  },

  openAlert(alertContainer, alertMessageContainer) {
    alertMessageContainer.innerHTML = 'Review posted!';
    alertContainer.classList.toggle('alert-open');
  },

  failureAlert(alertContainer, alertMessageContainer) {
    alertMessageContainer.innerHTML = 'Post not sent!';
    alertContainer.classList.toggle('alert-open');
  },

  closeAlert(alertContainer) {
    setTimeout(() => {
      alertContainer.classList.remove('alert-open');
    }, 2000);
  },
};

export default Alert;