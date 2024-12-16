// Function to load the header from the header.html file
window.onload = function() {
    fetch('/1_header/header.html')  // Make sure this path is correct based on where header.html is stored
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading the header: ", error);
        });
};
