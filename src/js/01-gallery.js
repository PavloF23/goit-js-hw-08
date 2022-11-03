// 1.Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm (посилання на CDN з твоєї минулої роботи більше не потрібне).
// 2.Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай рефакторинг з урахуванням того, що бібліотека була встановлена через npm (синтаксис import/export).


import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRefs = document.querySelector('.gallery');
const galleryItemsRefs = galleryItemsMarkup(galleryItems);

galleryRefs.innerHTML = galleryItemsRefs;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function galleryItemsMarkup(items) {
  return items
    .map(
      ({ original, preview, description } = items) =>
        `<a class="gallery__item" href="${original}"><img class="gallery__image"src="${preview}" alt="${description}" /></a> `
    )
    .join('');
}