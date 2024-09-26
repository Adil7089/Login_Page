
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector('form');
    const usernameInput = document.getElementById('form2Example11');
    const passwordInput = document.getElementById('form2Example22');
    const loginButton = document.querySelector('.btn-primary');
    const createButton = document.querySelector('.btn-outline-danger');

    // Handle the login button click event
    loginButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form from submitting
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        // Validate the inputs
        if (validateEmail(username) && validatePassword(password)) {
            
            alert("Login successful!");
            
        } else {
            // Show error message
            if (!validateEmail(username)) {
                alert("Please enter a valid email.");
            }
            if (!validatePassword(password)) {
                alert("Password must be at least 6 characters long.");
            }
        }
    });

    // Handle the "Create new account" button click
    createButton.addEventListener('click', function () {
        alert("Redirecting to the registration page...");
        
    });

    // Email validation function
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Password validation function (at least 6 characters)
    function validatePassword(password) {
        return password.length >= 6;
    }
});
