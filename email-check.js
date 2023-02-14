function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    const emailMessage = document.getElementById("email-message");

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
        emailInput.style.borderColor = "red";
        emailMessage.innerHTML = "Please enter a valid email address.";
        emailMessage.style.color = "red";
    } else {
        emailInput.style.borderColor = "";
        emailMessage.innerHTML = "";
    }
}
