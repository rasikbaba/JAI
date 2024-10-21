document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create a user object
    const userData = {
        name: name,
        email: email,
        password: password
    };

    // Store user data in local storage
    let users = localStorage.getItem("users");
    if (users) {
        users = JSON.parse(users); // Parse existing users
    } else {
        users = []; // Create a new array if no users exist
    }
    users.push(userData); // Add new user
    localStorage.setItem("users", JSON.stringify(users)); // Save back to local storage

    // Redirect to the success page
    window.location.href = "success.html"; // Navigate to success page
});
