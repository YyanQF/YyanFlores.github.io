// Creating a new Intersection Observer object
const observer = new IntersectionObserver((entries) => {
    // Looping through each entry in the entries array
    entries.forEach((entry) => {
        // If the entry is intersecting, add the 'show' class to the target element
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // If the entry is not intersecting, remove the 'show' class from the target element
            entry.target.classList.remove('show');
        }
    });
});

// Selecting all elements with the 'hidden' class
const hiddenElements = document.querySelectorAll('.hidden');

// Looping through each hidden element and observing it with the Intersection Observer
hiddenElements.forEach((el) => observer.observe(el));

// Initializing Flickity on the '.gallery' element
const flkty = new Flickity('.gallery', {
    // Allowing the carousel to wrap around
    wrapAround: true,
    // Adding a change event listener to update the description based on the current slide
    on: {
        change: function(index) {
            // Creating an array of descriptions
            const descriptions = [
                'Description for slide 1',
                'Description for slide 2',
            ];
            // Selecting the description element
            const descriptionElement = document.querySelector('.description');
            // Updating the text content of the description element with the corresponding description
            descriptionElement.textContent = descriptions[index];
        }
    }
});