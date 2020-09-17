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
    setTimeout(() => initialLoadingContainer.classList.remove('render-initial-loading'), 300);
  },
};

export default InitialLoadingInitiator;