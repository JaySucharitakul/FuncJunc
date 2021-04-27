const uri = 'fjapi/Login';
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;


    login(username, password);
})

function login(username, password) {
    fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'password': password
            })
        })
        .then(response => {
            var status = response.status;
            if (status === 200)
                location.replace("/funcjunc.html");
            else {
                loginErrorMsg.style.opacity = 1;
                loginForm.username.value = "";
                loginForm.password.value = "";
            }
        })
        .catch(error => console.error('Unable to login', error));
}