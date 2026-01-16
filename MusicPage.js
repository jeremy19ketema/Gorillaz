window.onload = function () {

    document.body.style.opacity = "1";
    var videos = document.querySelectorAll("video");
    videos.forEach(function(video) {
        video.addEventListener("play", function() {
            videos.forEach(function(otherVideo) {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });
    });
    var links = document.querySelectorAll("nav a");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(e) {
            if (this.href !== window.location.href) {
                e.preventDefault();
                var goTo = this.href;

                document.body.style.opacity = "0";

                setTimeout(function() {
                    window.location.href = goTo;
                }, 800);
            }
        });
    }
};
