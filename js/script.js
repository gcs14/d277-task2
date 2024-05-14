const contactForm = document.getElementById('contact-form');
const email1 = document.getElementById("email1");
const email2 = document.getElementById("email2");
const errorMessage = document.getElementById("error-message");

contactForm.addEventListener('submit', (e) => {
    let messages = []
    
    if (email1.value != email2.value){
        messages.push('Email does not match. Please try again.');
    }
    else if (email1.value == "" || email2.value == ""){
        messages.push('Please enter your email address');
    }
    if (messages.length > 0){
        e.preventDefault();
        errorMessage.style.color = "red";
        errorMessage.innerText = messages.join(', ');
    }
    else{
        errorMessage.innerText = ''
    }
})