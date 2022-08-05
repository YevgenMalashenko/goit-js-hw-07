import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryElement = document.querySelector(".gallery");

const itemsToInsert = galleryItems
  .map(
    (item) =>
      `<li class = "gallery__item"><a class = "gallery__link" href = "${item.original}"><img class = "gallery__image"src = "${item.preview}"alt = "${item.description}"></li>`
  )
  .join("");

galleryElement.insertAdjacentHTML("beforeend", itemsToInsert);

const lisagsadafsghtbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
