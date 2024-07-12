document.getElementById('forgot-password-link').addEventListener('click', function() {
    document.getElementById('forgot-password-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
});

function hideForgotPasswordForm() {
    document.getElementById('forgot-password-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function resetForm() {
    document.getElementById('login-form').reset();
    document.getElementById('forgot-password-form').reset();
    clearErrors();
    hideForgotPasswordForm();
}

function clearErrors() {
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(error) {
        error.style.display = 'none';
    });
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    var isValid = true;

    if (!username) {
        document.getElementById('username-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('username-error').style.display = 'none';
    }

    if (!password) {
        document.getElementById('password-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('password-error').style.display = 'none';
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        event.preventDefault();
        window.location.href = "index.html"; 
    }
});

document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value.trim();
    if (!email) {
        document.getElementById('email-error').style.display = 'block';
        event.preventDefault();
    } else {
        document.getElementById('email-error').style.display = 'none';
    }
});