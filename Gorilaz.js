
window.onload = function() {
var heroImage = document.querySelector("header img");
    if (heroImage) {
        heroImage.style.opacity = "0";
        setTimeout(function() {
            heroImage.style.transition = "opacity 2s";
            heroImage.style.opacity = "1";
        }, 300);
    }
}
