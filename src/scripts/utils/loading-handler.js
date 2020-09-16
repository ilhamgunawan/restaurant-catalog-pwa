import Loading from '../views/components/loading';

const LoadingHandler = {
  init(loadingContainer) {
    this._loadingContainer = loadingContainer;
    this.isLoadingOccured();
  },

  isLoadingOccured() {
    this._loadingContainer.innerHTML = Loading.render();
  },

  isLoadingEnded() {
    this._loadingContainer.innerHTML = '';
  },
};

export default LoadingHandler;