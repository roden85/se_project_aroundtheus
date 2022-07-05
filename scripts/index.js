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
const profileFormContainer = document.querySelector(".modal");
const formCloseButton = profileFormContainer.querySelector(
  ".modal__close-button"
);
const profileEditForm = document.querySelector("#modal-profile-form");
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(".profile__bio");
const cardsList = document.querySelector(".cards__list");
const formNameElement = document.querySelector("#profile-name");
const formDescriptionElement = document.querySelector("#profile-bio");

function openPopup() {
  profileFormContainer.classList.remove("modal_closed");
}

function closePopup() {
  profileFormContainer.classList.add("modal_closed");
}

function getCardElement(data) {
  const cardElement = document.querySelector("#cards-template").content;
  const cards = cardElement.querySelector(".cards__list-item").cloneNode(true);
  const cardImage = cards.querySelector(".cards__list-image");
  const cardTitle = cards.querySelector(".cards__list-content-title");
  cardTitle.textContent = data.name;
  cardImage.setAttribute("src", data.link);
  cardImage.setAttribute("alt", `${data.name}`);
  cardsList.append(cards);
}

profileEditButton.addEventListener("click", openPopup);

formCloseButton.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const nameValue = evt.target.name.value;
  const descriptionValue = evt.target.description.value;

  profileNameElement.textContent = nameValue;
  profileDescriptionElement.textContent = descriptionValue;

  closePopup();
});

initialCards.forEach(getCardElement);
