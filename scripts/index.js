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

function openPopup(popup) {
  popup.classList.remove("modal_closed");
}

function closePopup(popup) {
  popup.classList.add("modal_closed");
}

function renderCard(cardEl, container) {
  container.append(cardEl);
}

function getCardElement(data) {
  const cardElement = document.querySelector("#cards-template").content;
  const cards = cardElement.querySelector(".cards__list-item").cloneNode(true);
  const cardImage = cards.querySelector(".cards__list-image");
  const cardTitle = cards.querySelector(".cards__list-content-title");

  const cardLikeButton = cards.querySelector(".cards__like-button");
  cardLikeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("cards__like-button_active");
  });

  const trashButton = cards.querySelector(".cards__trash-button");
  trashButton.addEventListener("click", () => {
    const cardItem = trashButton.closest(".cards__list-item");
    cardItem.remove();
  });

  cardTitle.textContent = data.name;
  cardImage.setAttribute("src", data.link);
  cardImage.setAttribute("alt", `${data.name}`);
  return cards;
}

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
  const cardView = getCardElement({
    name,
    link,
  });
  renderCard(cardView, cardsList);
  closePopup(cardFormContainer);
});

initialCards.forEach(function (data) {
  const cardView = getCardElement(data);
  renderCard(cardView, cardsList);
});
