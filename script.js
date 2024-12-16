
// MENU //
// Function to include HTML content
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                        setActiveLink(); // Ensure active link is set after including HTML
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}

// Function to set active link
function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop(); // Extract current page name from URL
    const navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split("/").pop(); // Extract page name from href
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Ensure other links are not active
        }
    });
}

// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
    includeHTML();
});

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
