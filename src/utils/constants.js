export const profileEditForm = document.querySelector("#modal-profile-form");
export const profileNameElement = document.querySelector(".profile__name");
export const profileDescriptionElement =
  document.querySelector(".profile__bio");
export const formNameElement = document.querySelector("#profile-name");
export const formDescriptionElement = document.querySelector("#profile-bio");
export const cardAddForm = document.querySelector("#modal-photo-form");
export const cardsList = document.querySelector(".cards__list");

// //buttons

export const profileEditButton = document.querySelector(
  ".profile__button-edit"
);

export const cardAddButton = document.querySelector("#add-button");

//cards
export const initialCards = [
  {
    title: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    title: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    title: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    title: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    title: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    title: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
// export const cardsList = document.querySelector(".cards__list");

export const selectors = {
  cardsList: ".cards__list",
  cardsTemplate: "#cards-template",
  previewModal: "#modal__preview",
  cardAddForm: "#modal-photo-form",
  cardAddButton: "#add-button",
  profileNameElement: ".profile__name",
  profileDescriptionElement: ".profile__bio",
  profileFormContainer: "#edit-popup",
  formNameElement: "#profile-name",
  formDescriptionElement: "#profile-bio",
  profileEditForm: "#modal-profile-form",
};

export const validationSettings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__form-submit",
  inactiveButtonClass: "modal__form-submit_disabled",
  inputErrorClass: "modal_form_type_error",
  errorClass: "modal__error_visible",
};
