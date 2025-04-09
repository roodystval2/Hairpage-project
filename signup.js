// Get the form and elements
const form = document.querySelector('#signup-form');
const emailInput = document.querySelector('#email');

// Listen for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting to the server

    const email = emailInput.value.trim();

    // Simple email validation (basic check)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Store the email in local storage (for demonstration purposes)
    let subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
    subscribers.push(email);
    localStorage.setItem('subscribers', JSON.stringify(subscribers));

    // Show a confirmation message
    alert(`Thank you for subscribing with the email: ${email}`);

    // Reset the form
    form.reset();
});