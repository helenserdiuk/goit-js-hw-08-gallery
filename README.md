# goit-js-hw-08-gallery
Домашнее задание №8
По JavaScript

Нужно повесить слушателя события "click" на галлерею и написать функцию-обработчик для этого события, в которой вы будете добавлять класс 'is-open' на lightbox и также добавлять атрибут src на lightbox__image. 
Ссылку на большое изображение нужно брать из того изображения, по которому кликнули (event.target.dataset.source).
Также, надо будет добавить слушатель события "click" на кнопку button [data-action = "close-modal"] и написать функцию-обработчик для этого события, чтобы модальное окно закрывалось с помощью удаления класса 'is-open" с lightbox


Разметка элемента галереи
Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, и указываться в href ссылки (это необходимо для доступности).

<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>