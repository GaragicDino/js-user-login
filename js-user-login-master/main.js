// User Login

// Event Listener
document.getElementById('login-btn').addEventListener('click', loginDetails)



// Event Functions
function loginDetails() {
    // Setting Up Username and Password
    let username = document.getElementById('username-input').value;
    let password = document.getElementById('password-input').value;

    // Testing Inputs to Update Page
    if (username == 'Dino.G' && password == '12345') {
        // Message Pop Up if Login Successful
        let message = 'Login Successful'
        document.getElementById('fail').innerHTML = message;
        document.getElementById('fail').style.color = 'green'; 

    } else {
        // Message Pop Up if Login Failed
        let message = "Login Failed, Your Username or Password Is Incorrect, or Not Filled In"
        document.getElementById('fail').innerHTML = message;
        document.getElementById('fail').style.color = 'red';


    }

}