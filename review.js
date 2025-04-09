<script>
    // Get the form and elements
    const form = document.querySelector('#leave-review form');
    const nameInput = document.querySelector('#name');
    const ratingInput = document.querySelector('#rating');
    const reviewInput = document.querySelector('#review');

    // Load existing reviews from local storage
    function loadReviews() {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        return reviews;
    }

    // Save the review to local storage
    function saveReview(review) {
        const reviews = loadReviews();
        reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    // Listen for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting to the server

        const name = nameInput.value.trim();
        const rating = parseInt(ratingInput.value);
        const review = reviewInput.value.trim();

        console.log(`Submitting review: ${name}, ${rating}, ${review}`); // Log review submission

        // Basic validation
        if (!name || !review || isNaN(rating) || rating < 1 || rating > 5) {
            alert("Please complete all fields with valid information.");
            return;
        }

        // Create the review object
        const reviewData = {
            name: name,
            rating: rating,
            review: review
        };

        // Save the review to local storage
        saveReview(reviewData);

        console.log('Review saved to local storage:', reviewData); // Log review save

        // Show confirmation message
        alert(`Thank you for your review, ${name}!\nRating: ${rating}\nReview: ${review}`);

        // Reset form after submission
        form.reset();
    });
</script>