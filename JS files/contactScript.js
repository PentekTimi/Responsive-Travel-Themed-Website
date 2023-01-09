// get hold of the form, the radio button choices, email input, sign up button, and error messages container
// save these into variables
let form = document.getElementById("form");
let signupBtn = document.getElementById("sign-up-btn");
let email = document.getElementById("email-input");
let errorMessageDisplay = document.getElementById("error-messages");
let newsletterChoice = document.getElementsByName("newsletter");
// create two varibales, where we will save the values inserted by user
let newsletterValue;
let emailValue;

// add a submit event listener to the form
form.addEventListener("submit", (e) => {
    // prevent the page from reloading
    e.preventDefault();
    // initialize an empty array, where possible error messages will be added
    let errorMessages = [];

    // if the email input field is empty, add an error message to the array
    if(email.value === "" || email.value === null) {
        errorMessages.push("Please fill out the email field.")
    // if it is not empty save the input field value to the emailValue variable, and set back the field to ""
    } else {
        emailValue = email.value;
        email.value = "";
    }

    // loop through the two radio button choices, check the value of the chosen radio button, and save it to a variable
    for(let i = 0; i < newsletterChoice.length; i++) {
        if (newsletterChoice[i].checked) {
            newsletterValue = newsletterChoice[i].value;
        }     
    }
    
    // in case there was no radio button chosen, push an error message to the array
    if (newsletterValue === undefined) {
        errorMessages.push("Please choose which article are you interested in!")
    }
   
    // if there are items in the error array, display them under the sign up button
    if (errorMessages.length > 0) {
        errorMessageDisplay.innerHTML = errorMessages.join(", ");
    // otherwise alert the user of successfull subscription, displaying the newsletter choice and email 
    // also add a text under the sign up button reading "Successfully subscribed!"
    } else {
        errorMessageDisplay.innerHTML = "Successfully subscribed!"
        alert(`We´ve got your subscription!
        Your article choice is ${newsletterValue} travel articles.
        Email address: ${emailValue}`)
    }

})