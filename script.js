
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');

  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  }
});




   document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-card').forEach(card => {
      const img = card.querySelector('img');
      img.classList.add('blur-gray');

      card.addEventListener('mouseenter', () => {
        img.classList.remove('blur-gray');
      });

      card.addEventListener('mouseleave', () => {
        img.classList.add('blur-gray');
      });
    });
  });
