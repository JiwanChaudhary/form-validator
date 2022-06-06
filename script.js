const form = document.getElementById('form');
const Password1Ele = document.getElementById('password1');
const Password2Ele = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Contraint API
    isValid = form.checkValidity();

    // Style main message for error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    // Check for passwords match
    if (Password1Ele.value === Password2Ele.value) {
        passwordsMatch = true;
        Password1Ele.style.borderColor = "green";
        Password2Ele.style.borderColor = "green";
    } else {
        passwordsMatch = false;
        Password1Ele.style.borderColor = "red";
        Password2Ele.style.borderColor = "red";
        message.textContent = "Passwords must be same.";
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    // Message for successful validation
    if (isValid && passwordsMatch) {
        message.textContent = "Successfully Registered!";
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // Form Validation
    validateForm();

    // Submit data is valid
    if (isValid && passwordsMatch) {
        storeData();
    }
}

// Event Listner
form.addEventListener('submit', processFormData);