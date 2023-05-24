import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const cardGallery = ({preview, original, description}) => 
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
;
const markup = galleryItems.map((element) =>  cardGallery(element)).join("");

galleryEl.insertAdjacentHTML("afterbegin", markup);


// galleryEl.addEventListener('click', imageClick);

// function imageClick(event) {
//     event.preventDefault();
  
//     if (event.target.nodeName !== 'IMG') {
//       return;
//     }
//     createModal(event.target).show();
//   }
  
//   function createModal(event) {
//     const html = `<img src="${event.dataset.source}">`;
//     let instance = basicLightbox.create(html, {
//       onShow: () => {
//         window.addEventListener('keydown', onKeyClose);
//       },
//       onClose: () => {
//         window.removeEventListener('keydown', onKeyClose);
//       },
//     });
//     return instance;
  
//     function onKeyClose(event) {
//       if (event.code !== 'Escape') return;
//       instance.close();
//     }
//   }
   

