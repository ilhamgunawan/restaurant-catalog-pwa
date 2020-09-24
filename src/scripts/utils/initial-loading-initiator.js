import InitialLoading from '../views/components/initial-loading';

const InitialLoadingInitiator = {
  init(initialLoadingContainer) {
    initialLoadingContainer.innerHTML = InitialLoading.render();
    this.renderInitialLoading(initialLoadingContainer);
  },

  renderInitialLoading(initialLoadingContainer) {
    initialLoadingContainer.classList.toggle('render-initial-loading');
  },

  unmountInitialLoading(initialLoadingContainer) {
    initialLoadingContainer.classList.remove('render-initial-loading');
  },
};

export default InitialLoadingInitiator;