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
};
