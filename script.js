// Select elements
const form = document.getElementById("registrationForm");
// Input fields 
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
// Error message spans
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");


// Load username from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    username.value = savedUsername;
  }
});


// Generic field validation  
function validateField(input, errorElement) {
  if (input.validity.valueMissing) {
    errorElement.textContent = "This field is required";
  } 
  else if (input.validity.tooShort) {
    errorElement.textContent = `Minimum length is ${input.minLength}`;
  } 
  else if (input.validity.typeMismatch) {
    errorElement.textContent = "Enter a valid format";
  } 
  else if (input.validity.patternMismatch) {
    errorElement.textContent =
      "Password must include uppercase, lowercase, and number";
  } 
  else {
    errorElement.textContent = "";
  }
}


// Confirm password validation
function validateConfirmPassword() {
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    return false;
  } else {
    confirmPasswordError.textContent = "";
    return true;
  }
}


// Real-time validation
username.addEventListener("input", () =>
  validateField(username, usernameError)
);
// Email validation checks format and required
email.addEventListener("input", () =>
  validateField(email, emailError)
);
// Password validation also checks confirm password
password.addEventListener("input", () => {
  validateField(password, passwordError);
  validateConfirmPassword();
});

confirmPassword.addEventListener("input", validateConfirmPassword);


// Form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Validate all fields
  validateField(username, usernameError);
  validateField(email, emailError);
  validateField(password, passwordError);
  const isConfirmValid = validateConfirmPassword();

  if (
    username.checkValidity() &&
    email.checkValidity() &&
    password.checkValidity() &&
    isConfirmValid
  ) {
    // Success
    alert("Registration Successful!");

    // Save username
    localStorage.setItem("username", username.value);

    // Reset form
    form.reset();
  } else {
    // Focus first invalid field
    if (!username.checkValidity()) username.focus();
    else if (!email.checkValidity()) email.focus();
    else if (!password.checkValidity()) password.focus();
    else confirmPassword.focus();
  }
});