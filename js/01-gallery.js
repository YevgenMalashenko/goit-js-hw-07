import { galleryItems } from "./gallery-items.js";

const galleryElement = document.querySelector(".gallery");

const itemsToInsert = galleryItems
  .map(
    (item) =>
      `<li class = "gallery__item"><a class = "gallery__link" href = "${item.original}"><img class = "gallery__image"src = "${item.preview}"data-source="${item.original}"alt = "${item.description}"></li>`
  )
  .join("");

galleryElement.insertAdjacentHTML("beforeend", itemsToInsert);

galleryElement.addEventListener("click", onImageHandler);

function onImageHandler(e) {
  e.preventDefault();
  if (e.target.className !== "gallery__image") {
    return;
  }

  const highResolutionImageUrl = e.target.dataset.source;

  const instance = basicLightbox.create(`
  <img src="${highResolutionImageUrl}">
`);

  instance.show();
}
