function sendMail(event) {
  event.preventDefault();

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  // Check if any field is empty
  if (!params.name || !params.email || !params.subject || !params.message) {
    Toastify({
      text: "Please fill in all fields!",
      duration: 3000,
      gravity: "top",
      position: "center",
      style: {
        background: "#FFA500", // orange
      },
    }).showToast();
    return;
  }
  emailjs
    .send("service_jbgp58x", "template_9l0tmvi", params)
    .then(function (res) {
      Toastify({
        text: "Message sent successfully!",
        duration: 3000, // 3 seconds
        gravity: "top", // top or bottom
        position: "center", // left, center or right
        style: {
          background: "#4BB543", // green
        },
      }).showToast();
      document.getElementById("contact-form").reset();
    })
    .catch(function (err) {
      console.error("Error sending email:", err);
      Toastify({
        text: "❌ Failed to send message!",
        duration: 3000, // 3 seconds
        gravity: "top", // top or bottom
        position: "center", // left, center or right
        style: {
          background: "#FF4C4C", // red
        },
      }).showToast();
    });
}

// Attach listener to form
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contact-form").addEventListener("submit", sendMail);
});
