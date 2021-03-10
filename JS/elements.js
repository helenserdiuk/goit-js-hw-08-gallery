import galleryItems from './gallery-items.js';

const refs = {
 gallery: document.querySelector('.gallery'),
 lightbox: document.querySelector('.lightbox'),
 lightboxImage: document.querySelector('.lightbox__image'),
 lightboxButton: document.querySelector('.lightbox__button'),
 dataCloseLightbox: document.querySelector('[data-action="close-lightbox"]'),
}

const galleryList = galleryItems.map(({preview, original, description})=>
    `<li class="gallery__item">
    <a
      class="gallery__link"
      href=${original}
    >
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
      />
    </a>
  </li>`
);

//console.log(galleryList);
refs.gallery.innerHTML = galleryList.join('');

refs.gallery.addEventListener('click', onGalleryClick)

function onGalleryClick (event) {

    event.preventDefault()
    refs.lightbox.classList.add('is-open')
    refs.dataCloseLightbox.classList.add('is-open')

    window.addEventListener('keydown', onKaypress);

    refs.lightboxImage.src = event.target.dataset.source
    //console.log(event.target)
};

function onModalClose (event) {
    refs.lightbox.classList.remove('is-open')
    window.removeEventListener('keydown', onKaypress);
}

refs.lightboxButton.addEventListener('click', onModalClose);



function onKaypress(event) {
    //console.log('event.key', event.key)
  if(event.key === 'Escape') {
    refs.dataCloseLightbox.classList.remove('is-open');
  }
}

// Не поняла как назначить 'Escape' чтобы закрыть модальное окно