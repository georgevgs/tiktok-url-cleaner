// Register service worker
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('ServiceWorker registered: ', registration);

          // Check for updates on page load
          registration.update();

          // Automatically reload when a new service worker is activated
          registration.addEventListener('controllerchange', () => {
            window.location.reload();
          });
        })
        .catch((registrationError) => {
          console.error('ServiceWorker registration failed: ', registrationError);
        });
    });
  }
}

// Update service worker
export function updateServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.update();
    });
  }
}
