const inputs = document.querySelectorAll('input[type="email"]');

inputs.forEach(function (input) {
    input.addEventListener('blur', function () {
        let span = input.nextElementSibling;
        let emailValue = input.value
        
        if (emailValue = '' || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
            input.classList.add("invalid-email");
            span.innerHTML = "Please check your email";
        } else {
            input.classList.remove("invalid-email");
            span.innerHTML = ""
        }
    })
})