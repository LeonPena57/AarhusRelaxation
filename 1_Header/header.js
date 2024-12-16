document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.getElementById('burger-icon');
    const burgerMenu = document.getElementById('burger-menu');
    const closeButton = document.getElementById('close-button');

    // Open the burger menu
    burgerIcon.addEventListener('click', function () {
        burgerMenu.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Close the burger menu
    closeButton.addEventListener('click', function () {
        burgerMenu.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
});

document.querySelector('.burger-icon').addEventListener('click', function() {
    this.classList.toggle('active'); // Toggle the 'active' class
    document.querySelector('.menu-overlay').style.top = this.classList.contains('active') ? '0' : '-100%'; // Slide menu down/up
});

