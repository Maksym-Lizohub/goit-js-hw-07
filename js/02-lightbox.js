/* Задание 2 - библиотека SimpleLightbox
Сделай такую же галерею как в первом задании, но используя библиотеку SimpleLightbox,
 которая возьмет на себя обработку кликов по изображениям, открытие и закрытие 
 модального окна, а также пролистывание изображений при помощи клавиатуры. 
 Посмотри демо видео работы галереи с подключенной библиотекой.

Необходимо немного изменить разметку карточки галереи, используй этот шаблон.

<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>

Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js. Разбей его на несколько подзадач:

1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. 
Используй готовый код из первого задания.
2. Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. 
Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
3. Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. 
Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
4. Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. 
Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения. */

import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

/* 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. */

const makeGalleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
                <a class="gallery__item" href=${original}>
                    <img class="gallery__image" src=${preview} alt=${description} />
                </a>
            </div>`;
  })

  .join('');

refs.gallery.insertAdjacentHTML('beforeend', makeGalleryItem);

/* 2. Реализация делегирования на div.gallery и получение url большого изображения. */

refs.gallery.addEventListener('click', onGalleryPreviewClick);

function onGalleryPreviewClick(evt) {
  evt.preventDefault();

  const image = evt.target;
  const isGalleryItem = image.classList.contains('gallery__image');

  if (!isGalleryItem) {
    return;
  }

  /* 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки. 
      4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
      5. Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.*/

  let gallery = new SimpleLightbox('.gallery a');
  gallery.on('<img src=${image.dataset.source} width="1280px">', function () {
    // do something…
  });

  /* Добавь закрытие модального окна по нажатию клавиши Escape. */
}
