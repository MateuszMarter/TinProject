
document.addEventListener('submit', function(event) {
    let inputs = document.querySelectorAll('input');

    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let confirmPasswordError = document.getElementById('confirm-password').nextElementSibling;

    if(password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        event.preventDefault();
    } else {
        confirmPasswordError.textContent = '';
    }

    inputs.forEach(input => {
        let value = input.value.trim();
        let errorMessage = input.nextElementSibling;

        if(input.type === 'text') {
            if (value === '') {
                errorMessage.textContent = 'Required';
                event.preventDefault();
            } else
                errorMessage.textContent = '';
        }

        if(input.type === 'email') {
            let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if(!emailPattern.test(value)) {
                errorMessage.textContent = 'Email address is invalid';
                event.preventDefault();
            } else
                errorMessage.textContent = '';
        }

        if(input.type === 'password') {
            let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/

            if(value.length < 8 && !passwordPattern.test(value)) {
                errorMessage.textContent = "Password must be 8 characters long, contain uppercase letters, a character and number";
                event.preventDefault();
            } else
                errorMessage.textContent = '';

            let password = document.getElementById('password').value;
            let confirmPassword = document.getElementById('confirm-password').value;

            if(!(password === confirmPassword)) {
                errorMessage.textContent = 'Passwords do not match';
                event.preventDefault();
            }
        }

    });

});