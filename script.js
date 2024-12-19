// Get all gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

// Loop through each gallery item and add event listeners
galleryItems.forEach(item => {
    const image = item.querySelector('img');
    const video = item.querySelector('video');
    
    item.addEventListener('mouseenter', () => {
        image.style.opacity = '0';  // Hide image on hover
        video.style.display = 'block';  // Show video on hover
        video.play();  // Play video on hover
    });

    item.addEventListener('mouseleave', () => {
        image.style.opacity = '1';  // Show image again
        video.style.display = 'none';  // Hide video
        video.pause();  // Pause video
    });
});

// Handle popup opening
const popup = document.querySelector('.popup');
const popupOverlay = document.querySelector('.popup-overlay');
const popupContent = document.querySelector('.popup-content');

galleryItems.forEach(item => {
    const img = item.querySelector('img');
    item.addEventListener('click', () => {
        const imageUrl = img.src;
        const videoUrl = img.src.replace('.jpg', '.mp4'); // Assumes video is named similarly to image

        // Set the popup content
        const newImage = document.createElement('img');
        newImage.src = imageUrl;

        const newVideo = document.createElement('video');
        newVideo.src = videoUrl;
        newVideo.loop = true; // Set video to loop
        newVideo.muted = true; // Mute video
        newVideo.preload = 'auto'; // Preload the video

        // Clear previous content and append new content
        popupContent.innerHTML = '';
        popupContent.appendChild(newImage);
        popupContent.appendChild(newVideo);

        // Show the popup
        popup.style.display = 'block';
        popupOverlay.style.display = 'block';

        // Play the video in popup
        newVideo.play();
    });
});

// Close the popup
popupOverlay.addEventListener('click', () => {
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
});