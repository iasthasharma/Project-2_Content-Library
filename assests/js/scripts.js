// JavaScript for handling the Join Now button and modal functionality

document.getElementById('join-now').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-body').innerHTML = `
        <h2>Login or Sign Up</h2>
        <button onclick="showLoginForm()">Login</button>
        <button onclick="showSignupForm()">Sign Up</button>
    `;
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};

function showLoginForm() {
    document.getElementById('modal-body').innerHTML = `
        <h2>Login</h2>
        <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            <button type="submit">Login</button>
        </form>
    `;
}

function showSignupForm() {
    document.getElementById('modal-body').innerHTML = `
        <h2>Sign Up</h2>
        <form>
            <label for="new-username">Username:</label>
            <input type="text" id="new-username" name="new-username" required><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="new-password">Password:</label>
            <input type="password" id="new-password" name="new-password" required><br><br>
            <button type="submit">Sign Up</button>
        </form>
    `;
}

// Add search modal functionality
document.getElementById('search-icon').addEventListener('click', function() {
    document.getElementById('search-modal').style.display = 'block';
});

document.getElementById('close-search-modal').addEventListener('click', function() {
    document.getElementById('search-modal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('search-modal')) {
        document.getElementById('search-modal').style.display = 'none';
    }
};
