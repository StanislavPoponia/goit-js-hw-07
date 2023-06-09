import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryElement = document.querySelector('.gallery');

const imagesElement = galleryItems
  .map(({original,preview,description })  =>
      `<li>
      <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a></li>`
  )
  .join('');

galleryElement.insertAdjacentHTML('afterbegin', imagesElement);


const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });