// Define an array of image URLs
const images = [
            
    //"images/karsten-winegeart-5sGYotxAuUA-unsplash.jpg",
    // "images/pexels-li-sun-2294361.jpg",
    "images/exercise-weights-iron-dumbbell-with-extra-plates.jpg",
    "images/athlete-8223797.jpg",
    "images/pexels-pikx-by-panther-1547248.jpg",
    // "images/pexels-sabel-blanco-1638336.jpg",
    // "images/pexels-the-lazy-artist-gallery-2247179.jpg",
    ""
        ];


const mainDiv = document.querySelector('body');

// Function to change the background image
function changeBackground() {
const index = Math.floor(Math.random() * images.length);
const imageUrl = images[index];
mainDiv.style.backgroundImage = `url('${imageUrl}')`;
}

// Change the background image every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 4000);

// Call the function once to set an initial background image
changeBackground();

//JS for the toggle menu
// document.addEventListener('DOMContentLoaded', function () {
//     const toggle = document.getElementById('menu-toggle');
//     const menu = document.querySelector('nav ul');

//     toggle.addEventListener('click', function () {
//         menu.classList.toggle('active');
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('nav ul');

    toggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Close the menu when clicking outside of it
    document.body.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && event.target !== toggle) {
            menu.classList.remove('active');
        }
    });
});
