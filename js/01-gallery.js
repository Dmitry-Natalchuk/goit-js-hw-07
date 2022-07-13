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
    </div>`;}).join("")
}
const clickEvent = (event) => {
  event.preventDefault();
  if(event.target.classList.contains("gallery"))
    return;
  const source = event.target.dataset.source
  const showImages = basicLightbox.create(`
  <img src="${source}"width="800" height="600">`);

   showImages.show();
  // window.addEventListener("keydown",closeKey)
};
/* function closeKey (event) {
   if(event.code === "Escape") {
    
   }
} */
gallery.addEventListener("click",clickEvent)



//========================================================
/* const galleryList = document.querySelector(".gallery")
//console.log(galleryList)

const creatElementImg = ({preview,original,description}) => 
`<div class="gallery__item"
<a class="gallery__link" 
href=${preview}>
  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />
  </a>
  </div>`;

const galleryReduce= galleryItems.reduce((acc, item) => acc + creatElementImg(item),"");

galleryList.insertAdjacentHTML("afterbegin",galleryReduce);


function eventClickGallery (event) {
    event.preventDefault()
   if(event.target.nodeName !== "DIV"){
    return
   }
   event.target.create(`
   <div class="gallery__item"
<a class="gallery__link" 
href=${preview}>
  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />
  </a>
  </div>`).show()

} 
galleryList.addEventListener("click",eventClickGallery)  */
  
//===============================================================================
//console.log(creatElementImg)

/* ocument.querySelector('button.image').onclick = () => {

	basicLightbox.create(`
		<img width="1400" height="900" src="https://placehold.it/1400x900">
	`).show()

} */


//instance.show()

//function eventClickGallery (event) {
 //   event.preventDefault()
//if(event.target.nodeName !== "DIV"){
  //  return
  // }
  
// 
//instance.addEventListener("click",eventClickGallery)
//galleryList.addEventListener("click",createGallery)
//console.log(galleryItems);
/* const galleryList = document.querySelector(".gallery")
//console.log(galleryList)
//{preview,original,description}) => 
const createGallery = ({preview,original,description}) => {
const in = basicLightbox.create(
`<div class="gallery__item">
<a class="gallery__link" 
href=${original}>
  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />
</a>
</div>`);
}
const galleryReduce = galleryItems
.reduce((acc, item) => acc + createGallery(item),"");

galleryList.insertAdjacentHTML("afterbegin",galleryReduce) ; */
//console.log(divGalleryItems.nodeName)
/* 
function eventClickGallery (event) {
    event.preventDefault()
   if(event.target.nodeName !== "DIV"){
    return
   }
  
} */

//galleryList.addEventListener("click",createGallery)
