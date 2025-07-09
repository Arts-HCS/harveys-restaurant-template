const links = document.querySelectorAll('.nav a');
const checkbox = document.getElementById('sidebar-active');

links.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 970) {
      checkbox.checked = false;
    }
  });
});
