// Initialize EmailJS with your user ID (replace 'YOUR_USER_ID' with your actual ID)
emailjs.init("ghulambeast468@gmail.com");

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate email field with a regular expression
    const emailInput = contactForm.elements["email"];
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(emailInput.value)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Send the form data using EmailJS
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", contactForm).then(
      function () {
        alert("Email sent successfully!");
        contactForm.reset();
      },
      function (error) {
        alert("Failed to send email. Error: " + JSON.stringify(error));
      }
    );
  });
});
