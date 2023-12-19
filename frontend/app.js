// const loginBtn=document.getElementById('loginBtn');
// loginBtn.addEventListener('click',login);

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send request to the backend for authentication
    // Assume backendEndpoint is the URL to your authentication endpoint
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Authentication successful
                setCookie('email', email);
                window.location.href = 'page2.html'; // Redirect to page-2
            } else {
                // Authentication failed
                alert('Invalid credentials. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
