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
