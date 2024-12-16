function loadBurgerMenu() {
    const container = document.getElementById('burgerMenuContainer');
    const isSmallScreen = window.innerWidth <= 430;
    const isLargeScreen = window.innerWidth >= 1076;

    // For Small Screens (<= 430px)
    if (isSmallScreen) {
        // If screen width <= 430px, load the burger menu
        if (!container.innerHTML) {
            fetch('/1_burger/burger-menu.html')
                .then(response => response.text())
                .then(html => {
                    container.innerHTML = html;

                    const burgerIcon = document.querySelector('.burger-icon');
                    const menuOverlay = document.querySelector('.menu-overlay');
                    const closeButton = document.getElementById('closeButton');

                    // Open the menu when the burger icon is clicked
                    burgerIcon.addEventListener('click', () => {
                        menuOverlay.classList.add('open'); // Show the overlay
                        document.body.style.overflow = 'hidden'; // Disable body scroll when overlay is open
                    });

                    // Close the menu when the close button is clicked
                    closeButton.addEventListener('click', () => {
                        menuOverlay.classList.remove('open'); // Hide the overlay
                        document.body.style.overflow = 'auto'; // Enable body scroll when overlay is closed
                    });
                })
                .catch(error => console.error('Error loading burger menu:', error));
        }
    } else if (isLargeScreen) {
        // For screens larger than 1075px, remove burger menu and show header
        document.getElementById('header-placeholder').style.display = 'block';
        container.innerHTML = ''; // Clear the burger menu
        document.body.style.overflow = 'auto'; // Ensure scrolling is enabled

        // Ensure that the menu overlay is hidden for large screens
        const menuOverlay = document.querySelector('.menu-overlay');
        if (menuOverlay) {
            menuOverlay.classList.remove('open'); // Hide the menu overlay (if it exists)
            menuOverlay.style.display = 'none'; // Hide the menu overlay completely
        }
    } else {
        // For screens between 430px and 1075px, hide the header-placeholder and show burger menu
        document.getElementById('header-placeholder').style.display = 'none';
        container.innerHTML = ''; // Clear the burger menu if switching to mid-sized screen
    }
}

// Initial load of the burger menu
loadBurgerMenu();

// Re-load the menu when the window is resized
window.addEventListener('resize', loadBurgerMenu);
