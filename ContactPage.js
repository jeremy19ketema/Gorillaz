window.onload = function () {

    var form = document.querySelector("form");

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
};
