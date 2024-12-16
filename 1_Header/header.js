document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.burger-icon');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeButton = document.querySelector('.close-button');

    // Toggle the burger menu and the burger-to-X animation
    burgerIcon.addEventListener('click', function () {
        // Toggle the active class to animate the burger icon
        burgerIcon.classList.toggle('active');
        
        // Show or hide the menu
        if (burgerIcon.classList.contains('active')) {
            menuOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            menuOverlay.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });

    // Close the menu when the close button is clicked
    closeButton.addEventListener('click', function () {
        menuOverlay.style.display = 'none';
        burgerIcon.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
});
