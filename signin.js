// Show the modal on page load
window.onload = function() {
    const modal = document.getElementById("loginModal");
    const errorMessage = document.getElementById("errorMessage");
    
    // Show modal
    modal.style.display = "flex";

    // Handle login form submission
    const form = document.getElementById("loginForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get the values entered by the user
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check if credentials match
        if (username === "Alex" && password === "test") {
            // Redirect to index.html after successful login
            window.location.href = "index.html"; // Change to your target page
        } else {
            // Show the error message with animation
            errorMessage.style.display = "block";
        }
    });
};
