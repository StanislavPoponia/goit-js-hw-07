import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryElement = document.querySelector('.gallery');
const imagesElement = galleryItems
  .map(
    item =>
      `<li class = "gallery__item"><a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</li>`
  )
  .join('');

galleryElement.insertAdjacentHTML('afterbegin', imagesElement);

galleryElement.addEventListener('click', imageClick);

function imageClick(event) {
    event.preventDefault();
  
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    imgModal(event.target).show();
  }
  
  function imgModal(event) {
    const changeImg = `<img src="${event.dataset.source}">`;
    let showClose = basicLightbox.create(changeImg, {
      onShow: () => {
        window.addEventListener('keydown', closeButton);
      },
      onClose: () => {
        window.removeEventListener('keydown', closeButton);
      },
    });
    return showClose;
  
    function closeButton (event) {
      if (event.code !== 'Escape') return;
      showClose.close();
    }
  }
   

