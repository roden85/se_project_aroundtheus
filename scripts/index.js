const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

let container = document.querySelector(".main");
let editButton = container.querySelector(".profile__button-edit");
let closeButtonContainer = document.querySelector(".modal");
let closeButton = closeButtonContainer.querySelector(".modal__close-button");

function editProfile() {
  closeButtonContainer.classList.remove("modal__opened");
}

editButton.addEventListener("click", editProfile);

function exitEditor() {
  closeButtonContainer.classList.add("modal__opened");
  cd;
}

closeButton.addEventListener("click", exitEditor);
