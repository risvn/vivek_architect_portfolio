
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

  





document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const gallery = document.getElementById("gallery");
  const totalImages = 8;
  const folder = "asssets/images/";

  for (let i = 1; i <= totalImages; i++) {
    let img = document.createElement("img");
    img.src = `${folder}img${i}.jpg`;
    img.alt = `Image ${i}`;

    let div = document.createElement("div");
    div.className = "gallery-item";
    div.appendChild(img);

    div.addEventListener("click", () => {
       modal.classList.add("show");
      modal.style.display = "flex";
      modalImg.src = img.src;
        modal.style.background = "rgba(0,0,0,0.7)";
    });

    gallery.appendChild(div);
  }

  // Close when clicking outside image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
        modal.style.background = "none";
    }
  });

  // Close with Esc key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.style.display = "none";
        modal.style.background = "none";
    }
  });
});

