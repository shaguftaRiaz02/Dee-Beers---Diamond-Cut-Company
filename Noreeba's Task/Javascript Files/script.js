const menuIcon = document.getElementById('menuIcon');
const navigationMenu = document.getElementById('navigationMenu');

menuIcon.addEventListener('click', () => {
  navigationMenu.classList.toggle('active');
});
