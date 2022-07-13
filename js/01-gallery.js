import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
//console.log(gallery)

const imagesList = createGallery(galleryItems);
//console.log(imagesList)
gallery.insertAdjacentHTML("beforeend",imagesList);

function createGallery(images) {
  return galleryItems.map(({preview, original, description }) => {
   return `<div class="gallery__item">
      <a class="gallery__link"
       href="${images.original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;}).join("");
}
const clickEvent = (event) => {
  event.preventDefault();
  if(event.target.classList.contains("gallery"))
    return;

  const sourceImg = event.target.dataset.source;

  const showImages = basicLightbox.create(`
  <img src="${sourceImg}"width="800" height="600">`, {
    onShow: () => {
        window.addEventListener("keydown", closeImages);
    },
    onClose: () => {
        window.removeEventListener("keydown", closeImages);
    },
  });
  function closeImages (event) {
    if (event.code === 'Escape') {
      showImages.close();
    }
  }
   showImages.show();
} 



gallery.addEventListener("click",clickEvent);

