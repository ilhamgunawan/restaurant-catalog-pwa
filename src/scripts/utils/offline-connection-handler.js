const OfflineConnectionHandler = {
  init() {
    return `
      <div class="offline-wrapper">
        <img class="offline-image" src="/offline.svg" alt="offline">
        <span class="offline-text-indicator">Looks like you lost your connection</span>
        <span class="offline-text-indicator">Please check it and try again</span>
      </div>
    `;
  },
};

export default OfflineConnectionHandler;