const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered: ', registration);
      return registration;
    } catch (error) {
      return console.error('SW registration failed: ', error);
    }
  }

  return console.log('Service worker not supported in this browser');
};

export default swRegister;