
document.addEventListener("DOMContentLoaded", () => {
    const message = document.getElementById("authMessage");

    function showMessage(text, type = "success") {
        if (!message) return;

        message.className = `alert alert-${type}`;
        message.textContent = text;
        message.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    // Show / hide password
    document.querySelectorAll("[data-toggle-password]").forEach(button => {
        button.addEventListener("click", () => {
            const inputId = button.dataset.togglePassword;
            const input = document.getElementById(inputId);
            const icon = button.querySelector("i");

            if (!input || !icon) return;

            const show = input.type === "password";
            input.type = show ? "text" : "password";
            icon.className = show ? "bi bi-eye-slash" : "bi bi-eye";
            button.setAttribute("aria-label", show ? "Hide password" : "Show password");
        });
    });

    // Register form
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", event => {
            event.preventDefault();

            const name = document.getElementById("fullName").value.trim();
            const email = document.getElementById("registerEmail").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const role = document.getElementById("userRole").value;
            const password = document.getElementById("registerPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const agreed = document.getElementById("agreeTerms").checked;

            if (!name || !email || !phone || !role) {
                showMessage("Please complete all required fields.", "warning");
                return;
            }

            if (password.length < 8) {
                showMessage("Password must contain at least 8 characters.", "warning");
                return;
            }

            if (password !== confirmPassword) {
                showMessage("Passwords do not match. Please try again.", "danger");
                return;
            }

            if (!agreed) {
                showMessage("Please agree to the terms and conditions.", "warning");
                return;
            }

            showMessage(
                "Form validation successful! Connect Firebase or your backend to create your account.",
                "success"
            );
        });
    }

    // Login form
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", event => {
            event.preventDefault();

            const email = document.getElementById("loginEmail").value.trim();
            const password = document.getElementById("loginPassword").value;

            if (!email || !password) {
                showMessage("Please enter your email and password.", "warning");
                return;
            }

            showMessage(
                "Your form is valid, but login is not connected yet. Connect Firebase or your backend to authenticate users.",
                "info"
            );
        });
    }

    // Demo forgot-password message
    const forgotPassword = document.getElementById("forgotPassword");

    if (forgotPassword) {
        forgotPassword.addEventListener("click", event => {
            event.preventDefault();
            showMessage(
                "Password recovery will work after connecting your authentication backend.",
                "info"
            );
        });
    }
});
