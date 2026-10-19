document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".view-more");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("More details will be added soon!");
        });
    });
});
// Offer "Book Now" button click handler
document.querySelectorAll('.book-now').forEach(button => {
    button.addEventListener('click', () => {
        alert("Thank you for your interest! We'll contact you soon.");
    });
});

// Contact form submission handler
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    // Collect form values (optional: validate)
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (name && email && message) {
        alert('Thank you, ${name}! Your message has been sent.');
        this.reset(); // Clear the form
    } else {
        alert("Please fill in all fields before submitting.");
    }
});