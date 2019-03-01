document.getElementById('menu-toggle').addEventListener('click', navToggle);

function navToggle() {
  const nav = document.querySelector('.menu');
  console.log('clicked');
  nav.classList.toggle('menu-visible');
}
