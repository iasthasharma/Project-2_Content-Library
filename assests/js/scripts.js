document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});



document.addEventListener('DOMContentLoaded', () => {
    // Get the modal
    const modal = document.getElementById("join-modal");

    // Get the button that opens the modal
    const btn = document.getElementById("join-now");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // Get the login and signup buttons
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Add event listeners for login and signup buttons
    loginBtn.onclick = function() {
        // Redirect to login page or handle login logic
        window.location.href = "login.html"; // Update with your login page URL
    }

    signupBtn.onclick = function() {
        // Redirect to signup page or handle signup logic
        window.location.href = "signup.html"; // Update with your signup page URL
    }
});
document.getElementById('search-icon').addEventListener('click', function () {
    var searchContainer = document.getElementById('search-container');
    if (searchContainer.style.display === 'block') {
        searchContainer.style.display = 'none';
    } else {
        searchContainer.style.display = 'block';
        document.getElementById('search-input').focus();
    }
});

document.getElementById('search-input').addEventListener('input', function () {
    var query = this.value.toLowerCase();
    var suggestions = document.getElementById('search-suggestions');
    suggestions.innerHTML = '';
    if (query.length > 0) {
        var sampleData = ['Shimla', 'Manali', 'Dharamshala', 'Kasauli', 'Spiti Valley'];
        var filteredData = sampleData.filter(function (item) {
            return item.toLowerCase().includes(query);
        });
        filteredData.forEach(function (item) {
            var suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.textContent = item;
            suggestionItem.addEventListener('click', function () {
                document.getElementById('search-input').value = item;
                suggestions.innerHTML = '';
            });
            suggestions.appendChild(suggestionItem);
        });
    }
});


 
