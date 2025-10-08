
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');

  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  }
});



//TODO(rsvn):write the string maninpulation function to get the path



let fileMeta=[


{"name":"work/img1.jpg",
  "description":"STYLE: MODERN CONTEMPORARY"},
{"name":"work/img2.jpg",
    "description":"STYLE: MODERN CONTEMPORARY"},
{"name":"work/img3.jpg",
      "description":"STYLE: MODERN CONTEMPORARY"},  
{"name":"work/img4.jpg",
      "description":"STYLE: MODERN CONTEMPORARY"},  
{"name":"work/img5.jpg",
      "description":"STYLE: MODERN CONTEMPORARY"},  
{"name":"work/img6.jpg",
      "description":"STYLE: MODERN CONTEMPORARY"},  
{"name":"work/img7.jpg",
      "description":"STYLE: MODERN CONTEMPORARY"},  
{"name":"work/img8.jpg",
      "description":"STYLE: MODERN CONTEMPORARY"}  


]


let filePath = fileMeta.map(item => item.name);
console.log(filePath)




// getcatption:name,json meta data -> str
function getcaption(filename, metaData) {
  for (const post of metaData) {
    if (post.name === filename) {
      return post.description|| null
    }
  }
  return null; 
}





//createCard:path,caption->html card
function createCard(mediaPath,mediaCaption){

const gallery=document.getElementsByClassName('gallery')[0]
const mediaCard = document.createElement('div');
mediaCard.className = 'card';
const thumbWrap = document.createElement('div');
thumbWrap.className = 'thumb-wrap';


const fileName = mediaPath.split(/[/.]/)[1]


 if (/\.(mp4|webm|mov)$/i.test(mediaPath)) {
    // For video
    const video = document.createElement('video');
    video.src = mediaPath;
    video.controls = true;
    video.className = 'thumb';
    video.preload = 'metadata';
    video.id=fileName;
    thumbWrap.appendChild(video);
  } else {
    // For image
    const img = document.createElement('img');
    img.src = mediaPath;
    img.className = 'thumb';
    img.loading = 'lazy';
    img.id=fileName;
    thumbWrap.appendChild(img);
  }

const caption = document.createElement('div');
caption.className = 'caption';
const textPar = document.createElement('p');
textPar.textContent = mediaCaption; 
caption.appendChild(textPar);
    

mediaCard.appendChild(thumbWrap);
mediaCard.appendChild(caption);
gallery.appendChild(mediaCard);
document.body.appendChild(gallery);

//TODO(rsvn):ADD favourite,img,vid icon,thumbnail

}

//drawing image to the canvas
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  const images = document.querySelectorAll(".gallery img");
  images.forEach(img => {
    img.addEventListener("click", () => {
      canvas.style.display = "block";   // show canvas

      if (img.complete) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      } else {
        img.onload = () => ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  const closeBtn = document.getElementById("closeBtn");

  const images = document.querySelectorAll(".gallery img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      overlay.style.display = "flex";      // show overlay
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw image, maintaining aspect ratio
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;
      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      if (imgRatio > canvasRatio) {
        drawHeight = canvasWidth / imgRatio;
      } else {
        drawWidth = canvasHeight * imgRatio;
      }

      const offsetX = (canvasWidth - drawWidth) / 2;
      const offsetY = (canvasHeight - drawHeight) / 2;

      if (img.complete) {
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      } else {
        img.onload = () => ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    });
  });

  // Close overlay
  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  // Optional: click outside canvas closes overlay
  overlay.addEventListener("click", e => {
    if (e.target === overlay) {
      overlay.style.display = "none";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  });
});



filePath.forEach(fileName=>
  {

  let mediaCaption = getcaption(fileName,fileMeta)

  //give the exact path to the file location
  let filePath=fileName
  createCard(filePath,mediaCaption)

  }
  )




