// Function to toggle password visibility
function togglePasswordVisibility(fieldId, iconId) {
    var field = document.getElementById(fieldId);
    var icon = document.getElementById(iconId);
    if (field.type === "password") {
        field.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        field.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}

document.getElementById("togglePassword").addEventListener("click", function () {
    togglePasswordVisibility("password", "togglePassword");
});

document.getElementById("toggleConfirmPassword").addEventListener("click", function () {
    togglePasswordVisibility("confirm_password", "toggleConfirmPassword");
});

// Function to check if passwords match
document.getElementById("submitBtn").addEventListener("click", function (event) {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var passwordMismatch = document.getElementById("passwordMismatch");

    if (password !== confirm_password) {
        passwordMismatch.classList.remove("d-none");
        event.preventDefault(); // Prevent form submission
    } else {
        passwordMismatch.classList.add("d-none");
    }
});