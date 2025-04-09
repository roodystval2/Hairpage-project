// Wait for page to load
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("bookinfoform");

    // Pre-fill first and last name from localStorage
    if (localStorage.getItem("fname")) {
        form.fname.value = localStorage.getItem("fname");
    }
    if (localStorage.getItem("lname")) {
        form.lname.value = localStorage.getItem("lname");
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Stop page reload

        // Grab form values
        let fname = form.fname.value;
        let lname = form.lname.value;
        let email = form.email.value;
        let phone = form.Phone.value;
        let bookDate = form.book_date.value;
        let bookTime = form.book_time.value;

        // Save name in localStorage for future visits
        localStorage.setItem("fname", fname);
        localStorage.setItem("lname", lname);

        // Save booking details in sessionStorage
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("phone", phone);
        sessionStorage.setItem("bookDate", bookDate);
        sessionStorage.setItem("bookTime", bookTime);

        // Show confirmation message on page
        document.querySelector(".book-info").innerHTML += `
            <p>Thank you ${fname} ${lname}! Your appointment for ${bookDate} at ${bookTime} has been saved.</p>
        `;

        form.reset(); // Optional: clear form fields
    });
});