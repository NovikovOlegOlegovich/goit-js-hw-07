import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalelry(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalelry(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
        <a class="gallery__link" href="#">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const largestImgSource = evt.target.dataset.source;

  const instance = basicLightbox.create(`
   <img src="${largestImgSource}" width = "800"  height = "600"/>
`);

  instance.show();
}
