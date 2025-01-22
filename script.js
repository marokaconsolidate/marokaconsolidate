// Example of a simple form validation
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    
    if (!name || !email) {
        alert('Please fill out all fields.');
        event.preventDefault(); // Prevent form submission
    }
});
