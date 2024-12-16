// FOOTER LOAD //

// Load the footer dynamically
window.addEventListener('DOMContentLoaded', () => {
    fetch('/1_footer/footer.html') // Update the path if necessary
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading the footer: ", error);
        });
});
