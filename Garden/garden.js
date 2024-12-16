let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function moveCarousel(direction) {
    // Remove the 'active' class from the current image
    images[currentIndex].classList.remove('active');
    
    // Calculate the new index based on the direction
    if (direction === 'left') {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    } else {
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    }
    
    // Add the 'active' class to the new image
    images[currentIndex].classList.add('active');

    // Move the carousel to the new active image
    const newTransform = `translateX(-${currentIndex * 100}%)`;
    document.querySelector('.carousel-images').style.transform = newTransform;
}

// Initialize the first image as active
images[currentIndex].classList.add('active');
