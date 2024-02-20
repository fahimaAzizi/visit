document.addEventListener('DOMContentLoaded', () => {
    // Load additional images when 'More Images' button is clicked
    loadAdditionalImages();

    // Handle search form submission
    handleSearchFormSubmission();

    // Setup click event listeners for each map region
    setupRegionClickListeners();
});

function loadAdditionalImages() {
    document.querySelectorAll('.more-images').forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            // Prevent duplication of images
            if (targetElement.innerHTML.trim() === '') {
                targetElement.innerHTML = `
                    <img src="additional-image-1.jpg" alt="More about Destination">
                    <img src="additional-image-2.jpg" alt="More about Destination">
                    <img src="additional-image-3.jpg" alt="More about Destination">
                `;
            }
        });
    });
}

function handleSearchFormSubmission() {
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        const searchValue = document.getElementById('searchInput').value.toLowerCase();

        // Example destinations data
        const destinations = [
            { name: 'Banff National Park', description: 'Nestled in the heart of the Canadian Rockies...' },
            { name: 'Vancouver', description: 'This vibrant city on the Pacific coast...' },
            { name: 'Quebec City', description: 'As one of North America\'s oldest cities...' }
            // Add more destinations as needed
        ];

        // Filter destinations based on search input
        const filteredDestinations = destinations.filter(destination =>
            destination.name.toLowerCase().includes(searchValue) ||
            destination.description.toLowerCase().includes(searchValue));

        // Update DOM with search results instead of console logging
        displaySearchResults(filteredDestinations);
    });
}

function setupRegionClickListeners() {
    const regions = document.querySelectorAll('.map-region');

    regions.forEach(region => {
        region.addEventListener('click', function() {
            const regionId = this.id;
            displayRegionInfo(regionId);
        });
    });
}

function displayRegionInfo(regionId) {
    let info = "";
    switch (regionId) {
        case "rockies":
            info = "The Canadian Rockies offer breathtaking landscapes and a multitude of outdoor activities.";
            break;
        case "vancouver":
            info = "Vancouver, a bustling west coast seaport, is known for its art, theater scenes, and beautiful natural environments.";
            break;
        case "quebec-city":
            info = "Quebec City is known for its rich history, cobblestone streets, and European architecture.";
            break;
    }

    // Displaying info in an alert for simplicity; consider updating a dedicated section on the page
    alert(info);
}

function displaySearchResults(filteredDestinations) {
    // Example: Log filtered destinations to console
    // In practice, you would update the DOM to show these results on the page
    console.log('Search Results:', filteredDestinations);
}

document.addEventListener('DOMContentLoaded', () => {
    // Existing initialization functions
    loadAdditionalImages();
    handleSearchFormSubmission();
    setupRegionClickListeners();

    // Initialize featured experiences display
    setupFeaturedExperiences();
});

// Assuming this is a new function to handle the featured experiences
function setupFeaturedExperiences() {
    const experiences = [
        { id: 'aurora', name: 'Aurora Viewing in the Yukon', description: 'Experience the magical northern lights in the vast Yukon skies.' },
        { id: 'whale-watching', name: 'Whale Watching in British Columbia', description: 'Get up close with majestic whales in their natural habitat along the BC coast.' },
        { id: 'ice-skating', name: 'Ice Skating on the Rideau Canal', description: 'Enjoy a quintessential Canadian winter experience skating on the world’s largest naturally frozen ice rink.' }
        // Add more experiences as needed
    ];

    // Example: Attach event listeners to your UI elements that trigger the display of these experiences
    // For simplicity, let's assume you have buttons or links with IDs corresponding to the experiences' IDs
    experiences.forEach(experience => {
        const elem = document.getElementById(experience.id);
        if (elem) {
            elem.addEventListener('click', () => displayExperienceDetails(experience));
        }
    });
}

function displayExperienceDetails(experience) {
    // Update the DOM to show the details of the experience
    // This could be updating the innerHTML of a dedicated section or dynamically creating elements to display the content
    const detailsSection = document.getElementById('experienceDetails');
    if (detailsSection) {
        detailsSection.innerHTML = `
            <h2>${experience.name}</h2>
            <p>${experience.description}</p>
        `;
        // Optionally, add images or links related to the experience
    }
}

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userInput = document.getElementById('searchInput').value;

    // Example of sending the user input to a hypothetical backend endpoint '/search'
    fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Process and display the data as needed
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
function initMap() {
    var ottawa = {lat: 45.4215, lng: -75.6972}; // Coordinates for Ottawa, Canada
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: ottawa
    });
    var marker = new google.maps.Marker({
        position: ottawa,
        map: map
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting normally
        const query = searchInput.value;
        window.location.href = `https://chat.openai.com/g/g-6QnV7K2Em-canada=${encodeURIComponent(query)}`; // Redirect user to the search URL
    });
});




