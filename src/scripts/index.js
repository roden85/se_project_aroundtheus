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
  cardsList,
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/popupWithImage.js";
import PopupWithForm from "../components/popupWithForm.js";
import UserInfo from "../components/UserInfo.js";

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

editFormValidator.enableValidation();
addFormValidator.enableValidation();
cardSection.renderItems();
cardPreview.setEventListeners();
editForm.setEventListeners();
addImageForm.setEventListeners();
