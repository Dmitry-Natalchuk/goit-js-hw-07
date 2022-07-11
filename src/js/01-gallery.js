import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryList = document.querySelector(".gallery")
//console.log(gallery)

const createGallery = ({preview,original,description}) => 
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
</div>`;
const galleryReduce = galleryItems
.reduce((acc, item) => acc + createGallery(item),"");

galleryList.insertAdjacentHTML("afterbegin",galleryReduce);

const divGalleryItems = galleryList.querySelector(".gallery__item")
//console.log(divGalleryItems)
//console.log(divGalleryItems.nodeName)

function eventClickGallery (event) {
    event.preventDefault()
   if(event.target.nodeName !== "DIV"){
    return
   }
  
}

galleryList.addEventListener("click",eventClickGallery)