// Pics in cards
document.addEventListener('DOMContentLoaded', function() {
    // Select all the card images
    const cardImages = document.querySelectorAll('.card-img-top');

    // Store the original filter style of each image (using computed style)
    cardImages.forEach(img => {
        // Store the original filter using computed style (to get the default filter)
        const originalFilter = window.getComputedStyle(img).filter;

        // Add event listeners for mouse enter and mouse leave
        img.addEventListener('mouseenter', function() {
            // Change style on hover to make the image black and white
            img.style.filter = 'grayscale(100%)';
        });

        img.addEventListener('mouseleave', function() {
            // Reset style when mouse leaves using the stored original filter
            img.style.filter = originalFilter;
        });
    });
});

// About picture hover effect
document.addEventListener('DOMContentLoaded', function() {
    const photoContainer = document.querySelector('.photo-container');
    if (photoContainer) {
        const img = photoContainer.querySelector('img');
        if (img) {
            const originalFilter = window.getComputedStyle(img).filter;

            photoContainer.addEventListener('mouseenter', function() {
                img.style.filter = 'grayscale(100%)';
            });

            photoContainer.addEventListener('mouseleave', function() {
                img.style.filter = originalFilter;
            });
        }
    }
});
