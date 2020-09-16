const OfflineConnectionHandler = {
  init() {
    return `
      <div class="offline-wrapper">
        <span class="offline-text-indicator">Looks like you lost your connection</span>
        <span class="offline-text-indicator">Please check it and try again</span>
      </div>
    `;
  },
};

export default OfflineConnectionHandler;