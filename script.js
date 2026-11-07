
const form = document.getElementById("loginForm");

const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");
const message = document.getElementById("message");

// Show or hide password
toggle.addEventListener("click", function() {

    if (password.type === "password") {
        password.type = "text";
        toggle.textContent = "Hide";
    } else {
        password.type = "password";
        toggle.textContent = "Show";
    }

});

// Login form
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = password.value;

    if (email && pass) {
        message.style.color = "#70e8a0";
        message.textContent =
            "Training login submitted successfully! 🚀";
    }

});