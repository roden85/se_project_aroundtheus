import { FormValidator } from "./formvalidator.js";
import { Card } from "./card.js";
import { openPopup, closePopup } from "./utils.js";

// constants
const container = document.querySelector(".main");

// forms
const profileFormContainer = document.querySelector("#edit-popup");
const profileEditForm = document.querySelector("#modal-profile-form");
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(".profile__bio");
const formNameElement = document.querySelector("#profile-name");
const formDescriptionElement = document.querySelector("#profile-bio");
const cardFormContainer = document.querySelector("#add-popup");
const cardAddForm = document.querySelector("#modal-photo-form");

//buttons

const profileEditButton = container.querySelector(".profile__button-edit");
const cardAddButton = document.querySelector("#add-button");
const cardFormSubmitButton = document.querySelector(".modal__form-submit");
const modalCloseButtons = document.querySelectorAll(".modal__close-button");

//cards
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
const cardsList = document.querySelector(".cards__list");

//open/close popup

cardAddButton.addEventListener("click", () => {
  openPopup(cardFormContainer);
});

modalCloseButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => {
    closePopup(popup);
  });
});

function renderCard(cardEl, container) {
  container.prepend(cardEl);
}

function getCardData(data) {
  const card = new Card(data, "#cards-template").getView();
  return card;
}

initialCards.forEach(function (data) {
  const cardView = getCardData(data);
  cardsList.appendChild(cardView, cardsList);
});
// set form values

profileEditButton.addEventListener("click", () => {
  formNameElement.value = profileNameElement.textContent;
  formDescriptionElement.value = profileDescriptionElement.textContent;

  openPopup(profileFormContainer);
});

profileEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const nameValue = evt.target.name.value;
  const descriptionValue = evt.target.description.value;
  profileNameElement.textContent = nameValue;
  profileDescriptionElement.textContent = descriptionValue;

  closePopup(profileFormContainer);
});

cardAddForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.title.value;
  const link = evt.target.link.value;
  const cardView = getCardData({
    name: name,
    link: link,
  });
  renderCard(cardView, cardsList);
  evt.target.reset();
  cardFormSubmitButton.disabled = true;
  cardFormSubmitButton.classList.add("modal__form-submit_disabled");
  closePopup(cardFormContainer);
});

//form validator

const validationSettings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__form-submit",
  inactiveButtonClass: "modal__form-submit_disabled",
  inputErrorClass: "modal_form_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);

const addFormValidator = new FormValidator(validationSettings, cardAddForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
