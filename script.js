let currentSlideIndex = 0;

// Update the activities data to include all new fields
const activities = {
    activity1: {
        title: "Preventive Health = Productive Workforce",
        images: [
            "https://apex-x-nizcare.netlify.app/Assets/Activity-1/5.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-1/3.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-1/1.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-1/4.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-1/2.jpeg"
        ],
        client: "Citykart, Gurgaon",
        location: "Gurgaon",
        date: "21 February 2025",
        details: "Comprehensive health checks covering basic health, eye care, and dental care with expert support from Akash Hospital & Clove Dental."
    },
    activity2: {
        title: "Stress Management Webinar",
        images: [
            "https://apex-x-nizcare.netlify.app/Assets/Activity-2/2.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-2/3.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-2/1.jpeg"
        ],
        client: "Ace Insurance Brokers",
        location: "Mumbai",
        date: "14th Feb 2025",
        details: "Exclusive stress management session for Ace Insurance Brokers and Planet Smart City, led by expert counselling psychologist Mrs. Bandita Rath Sharma."
    },
    activity3: {
        title: "Wellness at Nuevosol, Sultanpur",
        images: [
            "https://apex-x-nizcare.netlify.app/Assets/Activity-3/1.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-3/2.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-3/3.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-3/4.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-3/5.jpeg"
        ],
        client: "Nuevosol",
        location: "Sultanpur",
        date: "March 10, 2025",
        details: "Comprehensive wellness camp featuring health assessments, dental checkups, and vision screenings powered by expert healthcare partners."
    },
    activity4: {
        title: "Holistic Health at Madhapur",
        images: [
            "https://apex-x-nizcare.netlify.app/Assets/Activity-4/5.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-4/1.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-4/2.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-4/3.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-4/4.jpeg"
        ],
        client: "Nuevosol Head Office",
        location: "Madhapur",
        date: "April 22, 2025",
        details: "Holistic health check at Neuvosol Head Office powered by Medicover Hospitals, Clove Dental, and Win Vision Eye Hospitals."
    },
    activity5: {
        title: "NEPL Pashamylaram Plant Wellness",
        images: [
            "https://apex-x-nizcare.netlify.app/Assets/Activity-5/5.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-5/1.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-5/2.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-5/3.jpeg",
            "https://apex-x-nizcare.netlify.app/Assets/Activity-5/4.jpeg"
        ],
        client: "NEPL Plant",
        location: "Pashamylaram",
        date: "May 15, 2025",
        details: "Comprehensive health screening at NEPL plant in collaboration with Lenus Diagnostics, Clove Dental, and Dr. Vision Eye Care."
    }
};

function openGallery(activityId) {
    const activity = activities[activityId];
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalGallery = document.getElementById('modal-gallery');
    
    // Set the details content
    modalTitle.textContent = activity.title;
    document.getElementById('modal-client').textContent = activity.client;
    document.getElementById('modal-location').textContent = activity.location;
    document.getElementById('modal-date').textContent = activity.date;
    document.getElementById('modal-details-text').textContent = activity.details;

    // Populate the carousel with images
    modalGallery.innerHTML = '';
    activity.images.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.className = 'gallery-carousel-item';
        modalGallery.appendChild(img);
    });

    // Reset slide index and display the modal
    currentSlideIndex = 0;
    updateCarousel();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeSlide(n) {
    const gallery = document.getElementById('modal-gallery');
    const totalSlides = gallery.children.length;
    currentSlideIndex = (currentSlideIndex + n + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const gallery = document.getElementById('modal-gallery');
    const slideWidth = gallery.children[0].clientWidth;
    gallery.style.transform = `translateX(${-slideWidth * currentSlideIndex}px)`;
}

function playVideo(event) {
    event.preventDefault(); 
    
    const videoContainer = document.querySelector('.video-container');
    const videoSrc = 'https://apex-x-nizcare.netlify.app/Assets/Apex-X-Nizcare_video.mp4';

    // Create the video element
    const videoElement = document.createElement('video');
    videoElement.src = videoSrc;
    videoElement.setAttribute('controls', ''); 
    videoElement.setAttribute('autoplay', '');
    videoElement.classList.add('video-element');
    
    // Clear the thumbnail and play button
    videoContainer.innerHTML = '';
    
    // Append the new video element
    videoContainer.appendChild(videoElement);
    
    videoContainer.removeAttribute('onclick');
}

// Add event listener to handle window resizing to keep the carousel in sync
window.addEventListener('resize', () => {
    if (document.getElementById('modal').style.display === 'block') {
        updateCarousel();
    }
});