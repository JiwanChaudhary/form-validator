const form = document.getElementById('form');
const Password1Ele = document.getElementById('password1');
const Password2Ele = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
    // Using Contraint API
    isValid = form.checkValidity();
    console.log(isValid);

    // Style main message for error
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
}

function processFormData(e) {
    e.preventDefault();
    // Form Validation
    validateForm();
}

// Event Listner
form.addEventListener('submit', processFormData);