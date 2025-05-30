
// FEEDBACK FORM
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedbackForm");

    form.addEventListener("submit", function (event) {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const rating = document.getElementById("rating").value;
      const comments = document.getElementById("comments").value.trim();

      const isAllEmpty = name === "" && email === "" && rating === "" && comments === "";

      if (isAllEmpty) {
        // Allow submission without validation
        return true;
      }

      if (!validateForm(name, email, rating, comments)) {
        event.preventDefault(); // Block submission if validation fails
      }
    });

    function validateForm(name, email, rating, comments) {
      let isValid = true;

      // Clear all error messages
      document.getElementById("nameError").textContent = "";
      document.getElementById("emailError").textContent = "";
      document.getElementById("ratingError").textContent = "";

      // Name validation
      if (name === "") {
        document.getElementById("nameError").textContent = "Please enter your name.";
        isValid = false;
      } else if (name.length < 2) {
        document.getElementById("nameError").textContent = "Name must be at least 2 characters.";
        isValid = false;
      }

      // Email validation
      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (email === "") {
        document.getElementById("emailError").textContent = "Please enter your email.";
        isValid = false;
      } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
      }

      // Rating validation
      if (rating === "") {
        document.getElementById("ratingError").textContent = "Please select a rating.";
        isValid = false;
      }

      // Comments (optional but check length if provided)
      if (comments.length > 0 && comments.length < 5) {
        alert("Comments should be at least 5 characters if filled.");
        isValid = false;
      }

      return isValid;
    }
  });

// FOOTER - Newsletter Form
document.getElementById("subscribeForm").addEventListener("submit", function(event) {
  if (!validateEmail()) {
    event.preventDefault(); // prevent submission if validation fails
  } else {
    // Optional: allow page refresh
    alert("Thank you for subscribing!");
  }
});

function validateEmail() {
  const emailInput = document.getElementById("newsletterEmail");
  const error = document.getElementById("newsletterError");
  const email = emailInput.value.trim();
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  error.textContent = "";

  if (email === "") {
    error.textContent = "Please enter your email.";
    return true;
  } else if (!regex.test(email)) {
    error.textContent = "Invalid email address.";
    return true;
  }

  return true;
}



// FOOTER
function validateEmail() {
    const emailInput = document.getElementById("newsletterEmail");
    const error = document.getElementById("newsletterError");
    const email = emailInput.value.trim();
    const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    error.textContent = "";

    if (email === "") {
      error.textContent = "Please enter your email.";
      return false;
    } else if (!regex.test(email)) {
      error.textContent = "Invalid email address.";
      return false;
    }

    alert("Thank you for subscribing!");
    return true;
  }