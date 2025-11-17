window.onload = function () {
    var name = localStorage.getItem("name");
    var email = localStorage.getItem("email");
    var budget = localStorage.getItem("budget");
    var message = localStorage.getItem("message");

    if (name) document.getElementById("name").value = name;
    if (email) document.getElementById("email").value = email;
    if (budget) document.getElementById("budget").value = budget;
    if (message) document.getElementById("message").value = message;
};

var inputs = document.querySelectorAll("#contactForm input, #contactForm select, #contactForm textarea");

inputs.forEach(function (input) {
    input.addEventListener("input", function () {
        localStorage.setItem(input.id, input.value);
    });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("successMessage").style.display = "block";

    setTimeout(function () {
        document.getElementById("successMessage").style.display = "none";
    }, 3000);
});
