const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function validatePassword(password) {
    const regex = /^([a-zA-Z0-9@*#]{4,})$/
 
    return regex.test(String(password));
}

name.addEventListener('input', e => {
    // Add message bellow input
    const errorMessageSpan = document.createElement('SPAN');
    errorMessageSpan.classList.add('error-message');

    // Store parent element (.field div) to add child to it later
    let fieldDiv = e.target.parentElement;

    // Add Error class to parent element if the field is empty
    if (e.target.value == '') {
        fieldDiv.classList.add('field--error');    
            
        errorMessageSpan.innerText = 'Please enter your name';

        fieldDiv.appendChild(errorMessageSpan);
    } 
    
    // Remove the message element if the Message exists while the user filled the field
    // The text (Error message) in span element is a child of the field element
    // So.. We checking if the field is not empty and the if the field's child (Error message element) is there
    if (e.target.value && fieldDiv.lastChild.className === 'error-message') {
        fieldDiv.classList.remove('field--error');   

        errorMessageSpan.innerText = '';
        fieldDiv.removeChild(fieldDiv.lastChild);

    }
});
        
email.addEventListener('input', e => {
    // Add message bellow input
    const errorMessageSpan = document.createElement('SPAN');
    errorMessageSpan.classList.add('error-message');

    // Store parent element (.field div) to add child to it later
    let fieldDiv = e.target.parentElement;

    // Add Error class to parent element if the field is empty
    const isEmailValid = validateEmail(e.target.value);

    if (!isEmailValid) {
        fieldDiv.classList.add('field--error');    
            
        
        // If there's no message, Add message element in field element
        if (fieldDiv.lastChild.className !== 'error-message') {
            errorMessageSpan.innerText = 'Please enter a valid email address';
            fieldDiv.appendChild(errorMessageSpan);
        }
    } 
    
    // Remove the message element if the Message exists while the user filled the field with a valid email
    // The text (Error message) in span element is a child of the field element
    // So.. We checking if the field has a valid email and if the field's child (Error message element) is there
    if (isEmailValid && fieldDiv.lastChild.className === 'error-message') {
        fieldDiv.classList.remove('field--error');    

        errorMessageSpan.innerText = '';
        fieldDiv.removeChild(fieldDiv.lastChild);
    }
});

password.addEventListener('input', e => {
    // Add message bellow input
    const errorMessageSpan = document.createElement('SPAN');
    errorMessageSpan.classList.add('error-message');

    // Store parent element (.field div) to add child to it later
    let fieldDiv = e.target.parentElement;

    // Add Error class to parent element if the password is valid
    const isPasswordValid = validatePassword(e.target.value);

    if (!isPasswordValid) {
        fieldDiv.classList.add('field--error');    
        
        // If there's no message, Add message element in field element
        if (fieldDiv.lastChild.className !== 'error-message') {
            errorMessageSpan.innerText = 'Please enter a valid password';
            fieldDiv.appendChild(errorMessageSpan);
        }
    } 
    
    // Remove the message element if the Message exists while the user filled the field with a valid password
    // The text (Error message) in span element is a child of the field element
    // So.. We checking if the field has a valid email and if the field's child (Error message element) is there
    if (isPasswordValid && fieldDiv.lastChild.className === 'error-message') {
        fieldDiv.classList.remove('field--error');    

        errorMessageSpan.innerText = '';
        fieldDiv.removeChild(fieldDiv.lastChild);
    }
});

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', e => {
    // To prevent refreshing page
    e.preventDefault();
});