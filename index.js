document.addEventListener('DOMContentLoaded', () => {

const form = document.getElementById('form');
const nameField = document.getElementById('nameField');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const messageUser = document.getElementById('message-user');

form.addEventListener('submit', event => {
    event.preventDefault();
    if (validateInputs()){
    alertMessage();
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const correctEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return correctEmail.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameFieldValue = nameField.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    let isCorrect = true;

    if(nameFieldValue === '') {
        setError(nameField, 'First name is required');
        isCorrect = false;
    } else {
        setSuccess(nameField);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
        isCorrect = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isCorrect = false;
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
        isCorrect = false;
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
        isCorrect = false;
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
        isCorrect = false;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
        isCorrect = false;
    } else {
        setSuccess(password2);
    }
return isCorrect;
};
function alertMessage() {
messageUser.innerText = "Account successfully created. Check your email to verify.";
messageUser.classList.add("alert");
setTimeout(() => {
    messageUser.classList.remove("alert");
}, 3500);
};
}); 