window.onload = function () {

        document.body.style.opacity = "1";
    var form = document.querySelector("form");
    var form = document.querySelector("form");
    if (form) {

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var subject = document.getElementById("subject").value.trim();
        var message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill in all required fields.");
            return;
        }

        alert("Thank you! Your message has been sent successfully.");

        form.reset(); 
    });
}
var links = document.querySelectorAll("nav a");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (e) {
            if (this.href !== window.location.href) {
                e.preventDefault();
                var goTo = this.href;

                document.body.style.opacity = "0";

                setTimeout(function () {
                    window.location.href = goTo;
                }, 800);
            }
        });
    }
};
