const toggleButton = document.getElementsByClassName('.toggle-button') [0];
const nav = document.getElementsByClassName('.navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});