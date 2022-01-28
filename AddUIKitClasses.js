// Text Fields
var textFields = document.querySelectorAll('input[type=text]');
for (let i = 0; i < textFields.length; i++) {
    textFields[i].classList.add('uk-input');
}

// Textareas
var selectFields = document.getElementsByTagName('select');
for (let i = 0; i < selectFields.length; i++) {
    selectFields[i].classList.add('uk-select');
}

// Select Dropdowns
var selectFields = document.getElementsByTagName('select');
for (let i = 0; i < selectFields.length; i++) {
    selectFields[i].classList.add('uk-select');
}

//Buttons
var formButtons = document.querySelectorAll('button[type=button]');
for (let i = 0; i < formButtons.length; i++) {
    formButtons[i].classList.add('uk-button', 'uk-button-default');
}

// Submit Button
var submitButton = document.querySelector('button[type=submit]');
submitButton.classList.add('uk-button', 'uk-button-primary');