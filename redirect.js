(function() {
  // --- Función de detección más robusta ---
  function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // 1️⃣ Comprobación por user agent (para la mayoría de móviles/tablets)
    const mobileRegex = /android|avantgo|blackberry|iemobile|ipad|iphone|ipod|opera mini|palm|windows ce|windows phone|mobile|tablet/i;
    if (mobileRegex.test(userAgent)) return true;

    // 2️⃣ Comprobación por capacidad táctil (para dispositivos híbridos)
    const hasTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
    if (hasTouch && window.innerWidth <= 1024) return true;

    // 3️⃣ Comprobación final por ancho de pantalla (fallback)
    if (window.matchMedia("(max-width: 768px)").matches) return true;

    return false;
  }

  // --- Redirección según el tipo de dispositivo ---
  const isMobile = isMobileDevice();

  if (isMobile) {
    window.location.replace("index-mobile.html");
  } else {
    window.location.replace("index-desktop.html");
  }
})();
