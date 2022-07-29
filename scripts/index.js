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

//constants

const container = document.querySelector(".main");
const profileEditButton = container.querySelector(".profile__button-edit");
const profileFormContainer = document.querySelector("#edit-popup");
const formCloseButton = profileFormContainer.querySelector(
  ".modal__close-button"
);
const profileEditForm = document.querySelector("#modal-profile-form");
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(".profile__bio");
const cardsList = document.querySelector(".cards__list");
const formNameElement = document.querySelector("#profile-name");
const formDescriptionElement = document.querySelector("#profile-bio");

const cardFormContainer = document.querySelector("#add-popup");
const cardAddButton = document.querySelector("#add-button");
const cardAddCloseButton = cardFormContainer.querySelector(
  ".modal__close-button"
);
const cardAddForm = document.querySelector("#modal-photo-form");
const imageModal = document.querySelector("#modal__preview");
const imageCloseButton = document.querySelector(
  ".modal__close-button_type_preview"
);
const modalImageEl = imageModal.querySelector(".modal__preview-image");
const modalCaption = imageModal.querySelector(".modal__caption");
// const formElement = document.querySelector(".modal__form");
// const formInput = formElement.querySelectorAll(".modal__form-input");
// const modalSubmitBtn = formElement.querySelectorAll(".modal__form-submit");

// functions

function openPopup(popup) {
  popup.classList.add("modal_opened");
}

function closePopup(popup) {
  popup.classList.remove("modal_opened");
}

// function showError(input) {
//   input.classList.add("modal__form-input_invalid");
// }

// function hideError(input) {
//   input.classList.remove("modal__form-input_invalid");
// }

// function disableButton(button) {
//   button.classList.add("modal__btn_disabled");
// }

// function enableButton(button) {
//   button.classList.remove("modal__btn_disabled");
// }

function renderCard(cardEl, container) {
  container.prepend(cardEl);
}

function getCardElement(data) {
  const cardElement = document.querySelector("#cards-template").content;
  const card = cardElement.querySelector(".cards__list-item").cloneNode(true);
  const cardImage = card.querySelector(".cards__list-image");
  const cardTitle = card.querySelector(".cards__list-content-title");

  const cardLikeButton = card.querySelector(".cards__like-button");
  cardLikeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("cards__like-button_active");
  });

  const trashButton = card.querySelector(".cards__trash-button");
  trashButton.addEventListener("click", () => {
    card.remove();
  });

  cardImage.addEventListener("click", function () {
    modalImageEl.setAttribute("src", data.link);
    modalImageEl.setAttribute("alt", data.name);
    modalCaption.textContent = data.name;
    openPopup(imageModal);
  });

  cardTitle.textContent = data.name;
  cardImage.setAttribute("src", data.link);
  cardImage.setAttribute("alt", `${data.name}`);
  return card;
}

// function checkInputValidity() {
//   if (!formInput.validity.valid) {
//     showError(formInput);
//   } else {
//     hideError(formInput);
//   }
// }

// event listeners

profileEditButton.addEventListener("click", () => {
  formNameElement.value = profileNameElement.textContent;
  formDescriptionElement.value = profileDescriptionElement.textContent;

  openPopup(profileFormContainer);
});

formCloseButton.addEventListener("click", () => {
  closePopup(profileFormContainer);
});

cardAddCloseButton.addEventListener("click", () => {
  closePopup(cardFormContainer);
});

cardAddButton.addEventListener("click", () => {
  openPopup(cardFormContainer);
});

imageCloseButton.addEventListener("click", () => {
  closePopup(imageModal);
});

// formElement.addEventListener("submit", (evt) => {
//   evt.preventDefault();
// });

// formElement.addEventListener("input", () => {
//   checkInputValidity();
// });

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
  const cardView = {
    name: name,
    link: link,
  };
  const card = getCardElement(cardView);
  renderCard(card, cardsList);
  evt.target.reset();
  closePopup(cardFormContainer);
});

//loops

initialCards.forEach(function (data) {
  const cardView = getCardElement(data);
  cardsList.appendChild(cardView);
});
