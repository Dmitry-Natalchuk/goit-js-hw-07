import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const gallery = document.querySelector(".gallery");
//console.log(gallery)

const imagesList = createGallery(galleryItems);
//console.log(imagesList)
gallery.insertAdjacentHTML("beforeend",imagesList);

function createGallery(images) {
  return galleryItems.map(({preview, original, description }) => {
   return` <a class="gallery__item"
    href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`;})
.join("")
  }
//песня
  const galleryImg = new SimpleLightbox(".gallery a", {
    //captionType : "alt",
    captionsData: "alt",
   // docClose: false,
   // close : false,
    captionDelay: 250,
    animationSpeed : 200,
    maxZoom: 5,
   // disableScroll : false,
    
  });

  //gallery.addEventListener("click",clickEvent);