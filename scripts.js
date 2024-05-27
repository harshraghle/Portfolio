document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Welcome to my portfolio website!');
});

document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;

    // Function to show the current image
    function showImage(index) {
        // Hide all images
        galleryItems.forEach(item => {
            item.style.display = 'none';
        });
        // Show the current image
        galleryItems[index].style.display = 'block';
    }

    // Show the first image initially
    showImage(currentIndex);

    // Function to show the previous image
    function showPreviousImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = galleryItems.length - 1;
        }
        showImage(currentIndex);
    }

    // Function to show the next image
    function showNextImage() {
        currentIndex++;
        if (currentIndex >= galleryItems.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    // Event listeners for previous and next buttons
    prevButton.addEventListener('click', showPreviousImage);
    nextButton.addEventListener('click', showNextImage);
});
