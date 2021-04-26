const uri = 'api/Login';
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

//    if (username === "user" && password === "web_dev") {
//        // If the credentials are valid, show an alert box and reload the page
//        alert("You have successfully logged in.");
//        location.reload();
//    } else {
//        // Otherwise, make the login error message show (change its oppacity)
//        loginErrorMsg.style.opacity = 1;
//    }
})

function login(username, password) {
    fetch(uri, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                'username': username,
                'password': password
            }
        })
        .then(response => {
            var json = response.json();
            if (true)
                location.replace("/funcjunc.html");
            else {
                loginErrorMsg.style.opacity = 1;
                loginForm.username.value = "";
                loginForm.password.value = "";
            }
        })
        .catch(error => console.error('Unable to login', error));
}