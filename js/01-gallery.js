import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery")
//console.log(galleryList)

const creatElementImg = ({preview,original,description}) => 
    `<div class="gallery__item"
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

const galleryReduce = galleryItems.reduce((acc, item) => acc + creatElementImg(item),"");

galleryList.insertAdjacentHTML("afterbegin",galleryReduce).show();

function eventClickGallery (event) {
    event.preventDefault()
   if(event.target.nodeName !== "DIV"){
    return
   }
   event.show()
} 
galleryList.addEventListener("click",eventClickGallery)

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