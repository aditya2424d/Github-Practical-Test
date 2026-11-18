// Welcome Button

const welcomeBtn = document.getElementById("welcomeBtn");

welcomeBtn.addEventListener("click", function() {
    alert("Welcome to My Portfolio!");
});


// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("result").textContent =
        "Thank you " + name + "! Your message has been submitted.";

    contactForm.reset();

});
