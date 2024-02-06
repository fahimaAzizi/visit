document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.more-images').forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            // Check if the target element already has images to prevent duplication
            if (targetElement.innerHTML.trim() === '') {
                // Example of adding more images. You should replace these with actual image paths.
                targetElement.innerHTML = `
                    <img src="additional-image-1.jpg" alt="More about Destination">
                    <img src="additional-image-2.jpg" alt="More about Destination">
                    <img src="additional-image-3.jpg" alt="More about Destination">
                `;
            }
        });
    });
});
