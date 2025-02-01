const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const hamIcon = hamburger.querySelector('.hamburger-icon');
const crossIcon = hamburger.querySelector('.cross-icon');
const menuLinks = document.querySelectorAll('.menu-list-items a');

// Toggle the hamburger menu (only for mobile view)
hamburger.addEventListener('click', function () {
    if (window.innerWidth <= 768) { // Only toggle in mobile view
        if (hamIcon.style.display === "none") {
            hamIcon.style.display = "inline-block";  // Show hamburger icon
            menu.style.display = "none";             // Hide menu
            crossIcon.style.display = "none";        // Hide close icon
        } else {
            crossIcon.style.display = "inline-block"; // Show close icon
            hamIcon.style.display = "none";          // Hide hamburger icon
            menu.style.display = "block";            // Show menu
        }
    }
});

// Close the menu when a menu item is clicked (only in mobile view)
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) { // Only close in mobile view
            hamIcon.style.display = "inline-block";  // Show hamburger icon
            menu.style.display = "none";             // Hide menu
            crossIcon.style.display = "none";        // Hide close icon
        }
    });
});


