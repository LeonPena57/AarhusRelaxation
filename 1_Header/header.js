document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.burger-icon');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeButton = document.querySelector('.close-button');

    if (burgerIcon && menuOverlay) {
        // Toggle the burger menu and the burger-to-X animation
        burgerIcon.addEventListener('click', function () {
            burgerIcon.classList.toggle('active'); // Animate burger icon

            // Show or hide the menu overlay
            if (burgerIcon.classList.contains('active')) {
                menuOverlay.style.top = '0'; // Slide in menu
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                menuOverlay.style.top = '-100%'; // Slide out menu
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }
        });
    }

    // Close the menu when the close button is clicked
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            menuOverlay.style.top = '-100%'; // Hide menu
            burgerIcon.classList.remove('active');
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
    }
});
