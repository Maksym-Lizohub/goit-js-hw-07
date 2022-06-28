/* Задание 1 - галерея изображений

Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне. 
Посмотри демо видео работы галереи.

Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
2. Реализация делегирования на div.gallery и получение url большого изображения.
3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
5. Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

Разметка элемента галереи

Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе <img>, 
и указываться в href ссылки. Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.

<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>

Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь 
будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.

Закрытие с клавиатуры

ВНИМАНИЕ
Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание 
клавиатуры было только пока открыто модальное окно. У библиотеки basicLightbox есть метод для 
программного закрытия модального окна.
 */

import { galleryItems } from './gallery-items.js';
// Change code below this line
const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output');

colorPalette.addEventListener('click', selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Some helper functions to render palette items
createGalleryItems();

function createGalleryItems() {
  const galleryItemsNew = [...galleryItems]
    .map(({ url, alt }) => {
      return `<li><img src= ${url} alt= ${alt}></li>`;
    })
    .join('');
  colorPalette.append(...galleryItemsNew);
}

const refGallery = document.querySelector('.gallery');

const makeGallery = images
  .map(({ url, alt }) => {
    return `<li><img src= ${url} alt= ${alt}></li>`;
  })
  .join('');

/* const makeGalleryItems = images.map(makeGalleryItemMarkup).join(''); */

refGallery.insertAdjacentHTML('beforeend', makeGallery);

console.log(galleryItems);
