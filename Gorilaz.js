window.onload = function() {
var heroImage = document.querySelector("header img");
    if (heroImage) {
        heroImage.style.opacity = "0";
        setTimeout(function() {
            heroImage.style.transition = "opacity 2s";
            heroImage.style.opacity = "1";
        }, 300);

var facts = [
        "Murdoc is evil... but kinda funny",
        "2-D thinks pineapple belongs on pizza",
        "Noodle is the coolest 10-year-old ever",
        "Russel has a ghost friend inside him"
    ];

    var factElement = document.createElement("p");
    factElement.style.textAlign = "center";
    factElement.style.fontStyle = "italic";
    factElement.style.color = "#000";
    factElement.style.margin = "30px"; 
var about = document.querySelector("section h2");
    if (about) {
        about.parentElement.appendChild(factElement);
    }

    function showRandomFact() {
        var randomNumber = Math.floor(Math.random() * facts.length);
        factElement.innerText = facts[randomNumber];
    }

    showRandomFact();
    setInterval(showRandomFact, 10000);
   }
}
