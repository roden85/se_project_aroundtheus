import "../pages/index.css";

import {
  initialCards,
  selectors,
  validationSettings,
  cardAddButton,
  profileEditButton,
  profileEditForm,
  cardAddForm,
  formNameElement,
  formDescriptionElement,
  profileDescriptionElement,
  profileNameElement,
  cardsList,
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
// import { openPopup, closePopup } from "../utils/utils.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/popupWithImage.js";
// import Popup from "../components/Popup";
import PopupWithForm from "../components/popupWithForm.js";
import UserInfo from "../components/UserInfo.js";

// const cardTemplate = document.querySelector("#cards-template");

// get card data and render new card to page
const createCard = (data) => {
  const card = new Card(data, "#cards-template", () => {
    handleCardClick(data);
  });
  return cardsList.prepend(card.getView());
};

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      cardSection.addItem(createCard(data));
    },
  },
  selectors.cardsList
);

// view image
const cardPreview = new PopupWithImage(selectors.previewModal);

// const handleCardClick = (data) => {
//   cardPreview.open(data.name, data.link);
// };

const handleCardClick = (data) => {
  cardPreview.open(data);
};

//open new post form
cardAddButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addImageForm.open();
});

//add a new post
const addImageForm = new PopupWithForm({
  popupSelector: "#add-popup",
  handleFormSubmit: (data) => {
    cardSection.addItem(createCard(data));
    addImageForm.close();
  },
});

//get user info

const user = new UserInfo({
  nameSelector: ".profile__name",
  bioSelector: ".profile__bio",
});

const editForm = new PopupWithForm({
  popupSelector: "#edit-popup",
  handleFormSubmit: (data) => {
    user.setUserInfo(data);
    editForm.close();
  },
});

profileEditButton.addEventListener("click", () => {
  const { name, bio } = user.getUserInfo();
  formNameElement.value = name;
  formDescriptionElement.value = bio;
  editForm.open();
  editFormValidator.resetValidation();
});

const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);

const addFormValidator = new FormValidator(validationSettings, cardAddForm);

// const addFormValidator = new FormValidator({
//   validationSettings,
//   formEl: selectors.cardAddForm,
// });

editFormValidator.enableValidation();
addFormValidator.enableValidation();
cardSection.renderItems();
cardPreview.setEventListeners();
editForm.setEventListeners();
addImageForm.setEventListeners();

// constants
// const container = document.querySelector(".main");

// // forms
// const profileFormContainer = document.querySelector("#edit-popup");
// const profileEditForm = document.querySelector("#modal-profile-form");
// const profileNameElement = document.querySelector(".profile__name");
// const profileDescriptionElement = document.querySelector(".profile__bio");
// const formNameElement = document.querySelector("#profile-name");
// const formDescriptionElement = document.querySelector("#profile-bio");
// const cardFormContainer = document.querySelector("#add-popup");
// const cardAddForm = document.querySelector("#modal-photo-form");

// //buttons

// const profileEditButton = container.querySelector(".profile__button-edit");
// const cardAddButton = document.querySelector("#add-button");

// //cards
// const initialCards = [
//   {
//     name: "Yosemite Valley",
//     link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
//   },
//   {
//     name: "Lake Louise",
//     link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
//   },
//   {
//     name: "Bald Mountains",
//     link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://code.s3.yandex.net/web-code/latemar.jpg",
//   },
//   {
//     name: "Vanoise National Park",
//     link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://code.s3.yandex.net/web-code/lago.jpg",
//   },
// ];
// const cardsList = document.querySelector(".cards__list");

//open/close popup

// function renderCard(cardEl, container) {
//   container.prepend(cardEl);
// }

// initialCards.forEach(function (data) {
//   const cardView = createCard(data);
//   cardsList.appendChild(cardView, cardsList);
// });
// // set form values

// profileEditForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const nameValue = evt.target.name.value;
//   const descriptionValue = evt.target.description.value;
//   profileNameElement.textContent = nameValue;
//   profileDescriptionElement.textContent = descriptionValue;
//   closePopup(profileFormContainer);
// });

// cardAddForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = evt.target.title.value;
//   const link = evt.target.link.value;
//   const cardView = createCard({
//     name: name,
//     link: link,
//   });
//   renderCard(cardView, cardsList);
//   evt.target.reset();
//   closePopup(cardFormContainer);
// });

//form validator
