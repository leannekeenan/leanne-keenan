
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbar = document.querySelector('.navbar')

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  navbarLinks.document.style.backgroundColor = "#F5F5F5";
});


