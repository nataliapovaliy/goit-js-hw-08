// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const listGallery = document.querySelector(".gallery");

const listImage = galleryItems
listImage.map(item => {

    const listGalleryElementLink = document.createElement('a');
    listGalleryElementLink.className = "gallery__item";
    listGalleryElementLink.href = `${item.original}`;
    listGallery.append(listGalleryElementLink);

    const listGalleryElementImg = document.createElement('img');
    listGalleryElementImg.className = "gallery__image";
    listGalleryElementImg.src = `${item.preview}`;
    listGalleryElementImg.alt = `${item.description}`;
    listGalleryElementLink.append(listGalleryElementImg);
});

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});
